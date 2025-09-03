import frappe
from frappe import _

@frappe.whitelist()
def get_sidebar_items():
    user_roles = frappe.get_roles()
    items = frappe.get_all(
        "Sidebar Item",
        fields=[
            "name",
            "title_en",
            "title_np",
            "route",
            "icon",
            "parent_sidebar",
            "is_group",
            "custom_sequence"
        ]
    )

    # referer = frappe.request.headers.get("Referer")
    # print(f"The referer is {referer}")


    # Build a map of sidebar items
    item_map = {}
    for item in items:
        # Fetch roles for this sidebar item from child table
        roles = frappe.get_all(
            "Sidebar Role",
            filters={"parent": item["name"]},
            pluck="role"
        )

        # Only include items which have at least one role matching the user's roles
        if not set(roles).intersection(user_roles):
            continue

        item["role_list"] = roles
        item["children"] = []
        item["isOpen"] = False
        item["parentRoute"] = None
        item_map[item["name"]] = item

    # Build tree structure
    tree = []
    for item in item_map.values():
        parent_name = item.get("parent_sidebar")
        if parent_name and parent_name in item_map:
            parent = item_map[parent_name]
            item["parentRoute"] = parent.get("route")
            parent["children"].append(item)
        else:
            tree.append(item)

    # Recursive sort
    def sort_children(item):
        item["children"].sort(key=lambda x: x.get("custom_sequence", 0))
        for child in item["children"]:
            sort_children(child)

    for t in tree:
        sort_children(t)

    tree.sort(key=lambda x: x.get("custom_sequence", 0))

    # Simplify output
    def simplify(item):
        return {
            "title_en": item["title_en"],
            "title_np": item["title_np"],
            "route": item.get("route"),
            "icon": item.get("icon"),
            "is_group": item.get("is_group"),
            "roles": item.get("role_list", []),   # list of roles from child table
            "parent_sidebar": item.get("parent_sidebar"),
            # "parentRoute": item.get("parentRoute"),
            # "isOpen": item.get("isOpen"),
            "children": [simplify(child) for child in item.get("children", [])]
        }

    sidebar = [simplify(item) for item in tree]

    return sidebar
