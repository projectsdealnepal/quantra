import frappe

@frappe.whitelist()
def get_current_user_details():
    user = frappe.session.user
    user_doc = frappe.get_doc("User", user)
    # roles = frappe.get_roles(user)
    settings = frappe.get_doc("User Date Settings", {"user": user}) \
               if frappe.db.exists("User Date Settings", {"user": user}) else None

    date_preference = settings.date_preference if settings else "AD"

    return {
        "user": user,
        "full_name": user_doc.full_name,
        "email": user_doc.email,
        # "roles": roles,
        "roles": user_doc.role_profile_name,
        "date_preference": date_preference
    }
