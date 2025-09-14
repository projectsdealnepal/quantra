import frappe
from healthcare.healthcare.utils import get_healthcare_services_to_invoice, get_drugs_to_invoice

@frappe.whitelist()
def get_healthcare_services_with_practitioner(patient, customer=None, company=None):
    if not customer:
        customer = frappe.db.get_value("Patient", patient, "customer")

    if not company:
        company = frappe.defaults.get_global_default("company")

    base_services = get_healthcare_services_to_invoice(patient, customer, company)
    # print(f"Lets see: {base_services}")

    for row in base_services:
        ref_dt = row.get("reference_type")
        ref_dn = row.get("reference_name")

        if ref_dt and ref_dn:
            try:
                practitioner, practitioner_name = frappe.db.get_value(
                    ref_dt, ref_dn, ["practitioner", "practitioner_name"]
                )
                if practitioner:
                    row["practitioner"] = practitioner
                if practitioner_name:
                    row["practitioner_name"] = practitioner_name
            except Exception:
                pass

    return base_services

@frappe.whitelist()
def get_prescription_items_with_practitioner(encounter, customer=None, link_customer=False):
    if not customer:
        # Get customer linked to the patient in the encounter
        enc_doc = frappe.get_doc("Patient Encounter", encounter)
        customer = frappe.db.get_value("Patient", enc_doc.patient, "customer")

    drug_items = get_drugs_to_invoice(encounter, customer, link_customer=link_customer)
    # print(f"Details: {drug_items}")

    # practitioner
    try:
        practitioner, practitioner_name = frappe.db.get_value(
            "Patient Encounter", encounter, ["practitioner", "practitioner_name"]
        )
        # print(f"practitioner: {practitioner}, practitioner name: {practitioner_name}")
    except Exception:
        practitioner = practitioner_name = None

    for row in drug_items:
        if practitioner:
            row["practitioner"] = practitioner
        if practitioner_name:
            row["practitioner_name"] = practitioner_name

    return drug_items
