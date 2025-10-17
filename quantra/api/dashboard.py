import frappe
from frappe.utils import getdate, nowdate, add_days, today
from datetime import timedelta
from frappe import _

# for dashboard cards
@frappe.whitelist()
def get_dashboard_cards():
    today = getdate(nowdate())
    yesterday = add_days(today, -1)

    # Today's Revenue
    today_sales = frappe.db.sql("""
        SELECT IFNULL(SUM(base_grand_total), 0) as total
        FROM `tabSales Invoice`
        WHERE posting_date = %s AND docstatus = 1
    """, (today,), as_dict=True)[0].total

    # Yesterday's Revenue
    yesterday_sales = frappe.db.sql("""
        SELECT IFNULL(SUM(base_grand_total), 0) as total
        FROM `tabSales Invoice`
        WHERE posting_date = %s AND docstatus = 1
    """, (yesterday,), as_dict=True)[0].total

    revenue_change = 0
    if yesterday_sales:
        revenue_change = ((today_sales - yesterday_sales) / yesterday_sales) * 100

    # Active Patients (Customers)
    total_patients_today = frappe.db.count("Customer")

    # Total Customers Until Yesterday
    total_patients_yesterday = frappe.db.count("Customer", {
        "creation": ["<", today]
    })

    # Change Percent in Active Patients
    patients_change = 0
    if total_patients_yesterday:
        patients_change = ((total_patients_today - total_patients_yesterday) / total_patients_yesterday) * 100
    # New Patients Today
    new_patients = frappe.db.count("Customer", {
        "creation": [">=", today]
    })

    # Pending Bills
    pending_invoices = frappe.db.sql("""
        SELECT IFNULL(SUM(outstanding_amount), 0) as total, COUNT(name) as count
        FROM `tabSales Invoice`
        WHERE docstatus = 1 AND outstanding_amount > 0
    """, as_dict=True)[0]

    return {
        "todays_revenue": {
            "amount": today_sales,
            "currency": frappe.defaults.get_user_default("currency"),
            "change_percent": f"{'+' if revenue_change > 0 else '-' if revenue_change < 0 else ''}{abs(round(revenue_change, 2))}"
        },
        "active_patients": {
            "count": total_patients_today,
            "new_today": new_patients,
            "change_percent": f"{'+' if patients_change > 0 else '-' if patients_change < 0 else ''}{abs(round(patients_change, 2))}"
        },
        "pending_bills": {
            "amount": pending_invoices.total,
            "currency": frappe.defaults.get_user_default("currency"),
            "count": pending_invoices.count
        },
        "insurance_claims": {
            "count": 0,
            "note": "Coming Soon"
        }
    }

# for line graph - revenue trends
@frappe.whitelist()
def get_revenue_trends(days=7):
    try:
        days = int(days)
    except:
        days = 7

    end_date = getdate(today())
    start_date = end_date - timedelta(days=days - 1)

    result = frappe.db.sql(
        """
        SELECT 
            posting_date,
            SUM(grand_total) AS total
        FROM `tabSales Invoice`
        WHERE docstatus = 1
            AND posting_date BETWEEN %s AND %s
        GROUP BY posting_date
        ORDER BY posting_date ASC
        """,
        (start_date, end_date),
        as_dict=True
    )

    # for missing days
    daily_totals = {}
    for i in range(days):
        date = start_date + timedelta(days=i)
        daily_totals[date.strftime('%Y-%m-%d')] = 0

    for row in result:
        daily_totals[row.posting_date.strftime('%Y-%m-%d')] = float(row.total)

    labels = [ (start_date + timedelta(days=i)).strftime('%b %d') for i in range(days) ]
    values = [ daily_totals[(start_date + timedelta(days=i)).strftime('%Y-%m-%d')] for i in range(days) ]

    return {
        "labels": labels,
        "values": values
    }

# for department wise revenue
@frappe.whitelist()
def get_department_revenue():
    today = nowdate()

    results = frappe.db.sql("""
        SELECT
            sii.cost_center,
            SUM(sii.base_net_amount) AS total_revenue
        FROM
            `tabSales Invoice Item` sii
        INNER JOIN
            `tabSales Invoice` si ON sii.parent = si.name
        WHERE
            si.docstatus = 1
            AND sii.cost_center IS NOT NULL
            AND si.posting_date = %s
        GROUP BY
            sii.cost_center
    """, (today,), as_dict=True)

    for row in results:
        row["department_name"] = frappe.db.get_value("Cost Center", row["cost_center"], "cost_center_name")

    return results

@frappe.whitelist()
def get_low_medication_stock_data(threshold=10):
    threshold = int(threshold)

    results = frappe.db.sql("""
        SELECT
            *
        FROM
            `tabBin`
        WHERE
            actual_qty < %s
        ORDER BY actual_qty ASC
    """, (threshold,), as_dict=True)

    # for row in results:
    #     row["item_name"] = frappe.db.get_value("Item", row["item_code"], "item_name")

    return {
        "count": len(results),
        "items": results
    }