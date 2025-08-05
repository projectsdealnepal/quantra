import frappe
from erpnext.accounts.utils import get_outstanding_invoices

@frappe.whitelist()
def get_allocated_invoices(party_type, party, account, paid_amount):
    paid_amount = float(paid_amount)

    # Get outstanding invoices for the party/account
    invoices = get_outstanding_invoices(
        party_type=party_type,
        party=party,
        account=[account]
    )

    # Allocate paid_amount across invoices on FIFO basis
    for inv in invoices:
        if paid_amount > 0:
            to_allocate = min(paid_amount, float(inv['outstanding_amount']))
            inv['payment_amount'] = to_allocate
            paid_amount -= to_allocate
        else:
            inv['payment_amount'] = 0  # clear allocation if none left

    return invoices
