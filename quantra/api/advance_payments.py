import frappe
from frappe.utils import today, getdate

@frappe.whitelist()
def get_advance_payments(party_type, party, company, allocate_advances=False):
    if party_type not in ["Customer", "Supplier"]:
        frappe.throw("party_type must be 'Customer' or 'Supplier'")

    payment_type = "Receive" if party_type == "Customer" else "Pay"

    payments = frappe.get_all(
        "Payment Entry",
        filters={
            "party_type": party_type,
            "party": party,
            "company": company,
            "payment_type": payment_type,
            "docstatus": 1
        },
        fields=["name", "posting_date", "paid_amount", "remarks"],
        order_by="posting_date asc"
    )

    result = []
    for pe in payments:
        pe_doc = frappe.get_doc("Payment Entry", pe.name)

        allocated_amount_db = float(sum([ref.allocated_amount for ref in pe_doc.references]))
        unallocated = float(pe_doc.paid_amount) - allocated_amount_db

        if unallocated > 0:
            advance_amount = unallocated
            allocated_amount = advance_amount if frappe.utils.cint(allocate_advances) else allocated_amount_db

            result.append({
                "reference_type": "Payment Entry",
                "reference_name": pe_doc.name,
                "posting_date": pe_doc.posting_date,
                "advance_amount": advance_amount,
                "allocated_amount": allocated_amount,
                "difference_posting_date": str(max(getdate(pe_doc.posting_date), getdate(today()))),
                "currency": pe_doc.paid_to_account_currency if party_type == "Customer" else pe_doc.paid_from_account_currency,
                "remarks": pe_doc.remarks
            })

    return result
