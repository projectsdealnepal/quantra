import frappe

def check_company_custom_fields(doc, method):
    required_fields = [
        "custom_cloud_server_ip",
        "custom_cloud_database_name",
        "custom_cloud_database_password",
    ]

    missing = [f for f in required_fields if not doc.get(f)]

    if missing:
        frappe.db.set_value("System Settings", None, "setup_complete", 0)
    else:
        frappe.db.set_value("System Settings", None, "setup_complete", 1)
