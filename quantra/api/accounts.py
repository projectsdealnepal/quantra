import frappe
from erpnext.accounts.utils import get_balance_on

@frappe.whitelist()
def get_chart_of_accounts(company):
    if not company:
        frappe.throw("Company is required")

    # Get currency of the company
    currency = frappe.db.get_value("Company", company, "default_currency")

    # Get all accounts with root_type
    accounts = frappe.get_all(
        "Account",
        filters={"company": company},
        fields=["name", "parent_account", "is_group", "account_name", "root_type"]
    )

    for acc in accounts:
        balance = get_balance_on(acc["name"], company=company)

        # Determine Dr or Cr 
        if acc["root_type"] in ["Asset", "Expense"]:
            entry_type = "Dr" if balance >= 0 else "Cr"
        elif acc["root_type"] in ["Liability", "Income", "Equity"]:
            entry_type = "Cr" if balance >= 0 else "Dr"
        else:
            entry_type = "Dr/Cr"

        # Add computed fields
        acc["balance"] = abs(balance)
        acc["entry_type"] = entry_type
        acc["currency"] = currency

        # Optional: If you still want to keep these
        acc["debit"] = balance if balance > 0 else 0
        acc["credit"] = -balance if balance < 0 else 0

    return accounts

