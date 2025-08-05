import frappe
from frappe import _

@frappe.whitelist()
def get_sidebar_items():
    roles = frappe.get_roles()
    items = frappe.get_all(
        "Sidebar Item",
        # filters={"role": ["in", roles]},
        fields=[
            "name",
            "title_en",
            "title_np",
            "route",
            "icon",
            "parent_sidebar",
            "is_group",
            "role"
        ]
    )

    item_map = {}
    for item in items:
        item["children"] = []
        item["isOpen"] = False
        item["parentRoute"] = None
        item_map[item["name"]] = item

    tree = []
    for item in items:
        parent_name = item.get("parent_sidebar")
        if parent_name and parent_name in item_map:
            parent = item_map[parent_name]
            item["parentRoute"] = parent.get("route")
            parent["children"].append(item)
        else:
            tree.append(item)

    def simplify(item):
        return {
            "title_en": item["title_en"],
            "title_np": item["title_np"],
            "route": item.get("route"),
            "icon": item.get("icon"),
            "is_group": item.get("is_group"),
            "role": item.get("role"),
            "parent_sidebar": item.get("parent_sidebar"),
            "parentRoute": item.get("parentRoute"),
            "isOpen": item.get("isOpen"),
            "children": [simplify(child) for child in item.get("children", [])]
        }

    sidebar = [simplify(item) for item in tree]

    return sidebar
