import frappe

def boot_session(bootinfo):
    keep = {"Accounting"}
    bootinfo["user"]["workspaces"] = [
        w for w in bootinfo.get("user", {}).get("workspaces", [])
        if w.get("label") in keep
    ]
