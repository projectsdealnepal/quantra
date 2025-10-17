import frappe

@frappe.whitelist(allow_guest=True)
def custom_reset_password(user, new_password):
    user_doc = frappe.get_doc("User", user)
    user_doc.reset_password(new_password)

    uds_name = frappe.db.get_value("User Date Settings", {"user": user}, "name")

    if uds_name:
        frappe.db.set_value(
            "User Date Settings",
            uds_name,
            "is_reset_password_required",
            0
        )
    else:
        uds_doc = frappe.get_doc({
            "doctype": "User Date Settings",
            "user": user,
            "is_reset_password_required": 0,
            "date_preference": "AD"
        })
        uds_doc.insert(ignore_permissions=True)

    frappe.db.commit()

    return {
        "message": "Password reset successful.",
        "user": user,
        "reset_required": False
    }
