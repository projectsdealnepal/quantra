import json
from frappe import handler, local, api
from quantra.utils.api_wrapper import enrich_dates

# Store originals
original_handle_method = handler.handle
original_handle_resource = api.handle

def enrich_response():
    if not hasattr(local, "response"):
        return

    resp = local.response

    if getattr(resp, "message", None):
        resp.message = enrich_dates(resp.message)

    if getattr(resp, "data", None):
        resp.data = enrich_dates(resp.data)

    # try:
    #     payload = resp.message if getattr(resp, "message", None) else resp.data
    #     print("Enriched Response:\n", json.dumps(payload, indent=2, default=str))
    # except Exception as e:
    #     print("Could not print response:", e)

def patched_method_handle(*args, **kwargs):
    # req = getattr(local, "request", None)
    # if req:
    #     print(f"[METHOD] API Wrapper Hit! Method: {req.method}, Path: {req.path}")
    result = original_handle_method(*args, **kwargs)
    enrich_response()
    return result

def patched_resource_handle(*args, **kwargs):
    # req = getattr(local, "request", None)
    # if req:
    #     print(f"[RESOURCE] API Wrapper Hit! Method: {req.method}, Path: {req.path}")

    response = original_handle_resource(*args, **kwargs)

    try:
        if response.is_json:
            payload = response.get_json()
            if "data" in payload and payload["data"] is not None:
                payload["data"] = enrich_dates(payload["data"])
            response.set_data(json.dumps(payload, default=str))
            response.headers["Content-Length"] = str(len(response.get_data()))
            # print("Enriched RESOURCE Response:\n", json.dumps(payload, indent=2, default=str))
    except Exception as e:
        print("Resource enrichment failed:", e)

    return response

def apply_patches():
    """Call this once on app init to patch frappe handlers."""
    handler.handle = patched_method_handle
    api.handle = patched_resource_handle
