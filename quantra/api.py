import frappe

def filter_workspaces(bootinfo):
    """Keep only Accounting & Stock workspaces in Desk sidebar/home."""
    allowed = {"Accounting", "Stock"}
    bootinfo["user"]["workspaces"] = [
        w for w in bootinfo.get("user", {}).get("workspaces", [])
        if w.get("label") in allowed
    ]
