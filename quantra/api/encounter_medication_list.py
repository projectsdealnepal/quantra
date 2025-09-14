import frappe

@frappe.whitelist()
def get_latest_medications(patient):
    """
    Return medications from the latest Patient Encounter for a given patient.
    """
    # latest encounter of the patient
    latest_encounter = frappe.get_all(
        "Patient Encounter",
        filters={"patient": patient},
        fields="*",
        order_by="encounter_date desc",
        limit=1
    )

    if not latest_encounter:
        return []

    encounter = latest_encounter[0]

    # load the full doc to acess child table
    encounter_doc = frappe.get_doc("Patient Encounter", encounter.name)

    # medications
    medications = encounter_doc.drug_prescription or []

    return {
        "encounter": encounter,
        "medications": medications
    }
