import frappe
from frappe.auth import LoginManager
import json
import os

no_cache = 1
no_sitemap = 1
is_public = True  # Allow Guest access

def get_context(context):
    # Load assets from manifest
    manifest_path = os.path.join(frappe.get_site_path(), 'public', 'assets', 'manifest.json')
    if os.path.exists(manifest_path):
        with open(manifest_path) as f:
            manifest = json.load(f)
        context.login_bundle = '/assets/' + manifest.get('frappe/dist/css/login.bundle.css', 'frappe/dist/css/login.bundle.css')
        context.quantra_theme = '/assets/' + manifest.get('quantra/css/quantra_theme.css', 'quantra/css/quantra_theme.css')
    else:
        context.login_bundle = '/assets/frappe/dist/css/login.bundle.css'
        context.quantra_theme = '/assets/quantra/css/quantra_theme.css'

    context.error_message = None
    context.redirect_url = None

    # Required for CSRF protection
    context.csrf_token = frappe.sessions.get_csrf_token()

    if frappe.request.method == "POST":
        try:
            usr = frappe.form_dict.get("usr")
            pwd = frappe.form_dict.get("pwd")

            # Pass to LoginManager
            frappe.local.form_dict["usr"] = usr
            frappe.local.form_dict["pwd"] = pwd

            login_manager = LoginManager()
            login_manager.login()
            frappe.db.commit()

            # After successful login, redirect to Desk (Accounting module)
            context.redirect_url = "/app/accounting"

        except Exception as e:
            context.error_message = str(e)

    return context
