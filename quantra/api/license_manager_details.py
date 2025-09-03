import frappe
from frappe.utils import today
from frappe import _

@frappe.whitelist()
def get_allowed_modules(company=None):
    if not company:
        company = frappe.defaults.get_user_default("Company")

    if not company:
        return [] 
    print(f"Users company is: {company}")
    today_date = today()

    # Get active license for company
    license_doc = frappe.get_all(
        "License Manager",
        filters={
            "company": company,
            "active": 1,
            "start_date": ["<=", today_date],
            "end_date": [">=", today_date]
        },
        fields=["name"],
        limit=1
    )

    if not license_doc:
        return []

    # Fetch allowed modules from child table
    modules = frappe.get_all(
        "License Manager Details",
        filters={"parent": license_doc[0].name},
        fields=["module_name"]
    )

    return [m.module_name for m in modules]

def validate_module_access(doc, method):
    """
    Prevent creation or modification of a DocType if its module
    is not licensed for the company of the document.
    """
    company = getattr(doc, "company", None)

    if not company:
        company = frappe.defaults.get_user_default("Company")
        if not company:
            return  # no company to check against

    allowed_modules = get_allowed_modules(company)

    module = doc.meta.module

    if module not in allowed_modules:
        frappe.throw(
            _("The module '{0}' is not licensed for the company '{1}'.").format(module, company)
        )