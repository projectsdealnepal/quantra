import frappe

@frappe.whitelist()
def get_item_data():
    # get the item code
    item_code = (
        frappe.form_dict.get("item_code")
        or frappe.local.form_dict.get("item_code")
        or frappe.request.args.get("item_code")
    )

    if not item_code:
        frappe.throw("Missing item_code")

    item = frappe.get_doc("Item", item_code).as_dict()

    item_prices = frappe.get_all(
        "Item Price",
        filters={"item_code": item_code},
        fields=[
            "name", "price_list", "price_list_rate",
            "currency", "buying", "selling", "valid_from"
        ]
    )

    bins = frappe.get_all(
        "Bin",
        filters={"item_code": item_code},
        fields=[
            "name", "warehouse", "actual_qty", "reserved_qty", "projected_qty",
            "stock_uom", "valuation_rate", "stock_value"
        ]
    )

    return {
        "item": item,
        "item_prices": item_prices,
        "stock": bins
    }


@frappe.whitelist()
def get_all_items_data():
    items = frappe.get_all("Item", fields=["item_code"])

    results = []

    for item in items:
        item_code = item.item_code

        # Get full Item doc
        item_doc = frappe.get_doc("Item", item_code).as_dict()

        # Get Item Prices
        item_prices = frappe.get_all(
            "Item Price",
            filters={"item_code": item_code},
            fields=[
                "name", "price_list", "price_list_rate",
                "currency", "buying", "selling", "valid_from"
            ]
        )

        # Get stock bins
        bins = frappe.get_all(
            "Bin",
            filters={"item_code": item_code},
            fields=[
                "name", "warehouse", "actual_qty", "reserved_qty", "projected_qty",
                "stock_uom", "valuation_rate", "stock_value"
            ]
        )

        results.append({
            "item": item_doc,
            "item_prices": item_prices,
            "stock": bins
        })

    return results
