import frappe

@frappe.whitelist()
def get_items_for_user():
    """
    Return items for the logged-in user based on their Role Profile -> Item Group mapping
    """
    user = frappe.session.user

    # role profile of the user
    role_profile = frappe.db.get_value("User", user, "role_profile_name")

    if not role_profile:
        return []

    # items
    item_groups = frappe.get_all(
        "Item Role Mapping",
        filters={"role_profile": role_profile},
        pluck="item_group"
    )

    if not item_groups:
        return []
    
    items = frappe.get_all(
        "Item",
        filters={"item_group": ["in", item_groups]},
        fields="*"
    )

    for item in items:
        item_prices = frappe.get_all(
            "Item Price",
            filters={"item_code": item.name},
            fields="*"
        )
        item["item_prices"] = item_prices

    return items
