import frappe

@frappe.whitelist(methods=["GET", "PUT", "PATCH"])
def get_current_user_details():
    user = frappe.session.user
    user_doc = frappe.get_doc("User", user)
    # roles = frappe.get_roles(user)
    settings = frappe.get_doc("User Date Settings", {"user": user}) \
               if frappe.db.exists("User Date Settings", {"user": user}) else None

    if frappe.request.method in ["PUT", "PATCH"]:
        data = frappe.local.form_dict

        updated = False
        if data.get("full_name"):
            user_doc.first_name = data.get("full_name")
            updated = True

        if data.get("email"):
            user_doc.email = data.get("email")
            updated = True

        if updated:
            user_doc.save(ignore_permissions=True)

        if data.get("date_preference"):
            if settings:
                settings.date_preference = data.get("date_preference")
                settings.save(ignore_permissions=True)
            else:
                settings = frappe.get_doc({
                    "doctype": "User Date Settings",
                    "user": user,
                    "date_preference": data.get("date_preference")
                })
                settings.insert(ignore_permissions=True)

        frappe.db.commit()

    user_doc = frappe.get_doc("User", user)
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
