import frappe
from frappe.auth import LoginManager
from frappe.core.doctype.user.user import get_home_page

PORT_APP_MAP = {
    "3001": "Accounting",
    "3002": "Healthcare",
    "3003": "Admin"
}

@frappe.whitelist(allow_guest=True)
def custom_login():
    usr = frappe.form_dict.get("usr")
    pwd = frappe.form_dict.get("pwd")

    # FE port
    referer = frappe.request.headers.get("Referer") or ""
    port = referer.split(":")[-1].replace("/", "") if ":" in referer else None
    print(f"Referer :{referer}")

    print(f"Login attempt from port {port} for user {usr}")

    # login manager from frappe
    login_manager = LoginManager()
    login_manager.authenticate(user=usr, pwd=pwd)
    login_manager.post_login()

    #  required app for this port
    required_app = PORT_APP_MAP.get(port)
    if not required_app:
        frappe.throw("Unknown portal access. Invalid port.")

    # role profile
    role_profile = frappe.db.get_value("User", usr, "role_profile_name")
    print(f"Role profile: {role_profile}")
    if not role_profile:
        frappe.throw("User does not have a role profile assigned.")

    # Get allowed apps from Portal Access Manager
    allowed_apps = frappe.get_all(
        "Portal Access Manager",
        filters={"parent": role_profile},
        pluck="app_name"
    )

    print(f"User {usr} allowed apps: {allowed_apps}")

    # Validation: Admin app is always allowed
    if required_app != "Admin" and required_app not in allowed_apps:
        frappe.throw(f"Access Denied: {usr} cannot login to {required_app} portal.")

    # home_page = get_home_page()

    is_reset_required = frappe.db.get_value(
        "User Date Settings",
        {"user": usr},
        "is_reset_password_required"
    )

    if is_reset_required:
        return {
            "message": "Please reset your password first.",
            "user": usr,
            "reset_required": True,
        }

    return {
        "message": "Logged in successfully.",
        "user": usr,
        "allowed_apps": allowed_apps,
        # "role_profile": role_profile,
        "reset_required": False
    }
