from datetime import datetime, date
from dateutil import parser
import re
import frappe
from .date_converter import ad_to_bs, bs_to_ad, bs
from frappe.model.document import Document

# Patterns for AD date/datetime strings
DATE_PATTERN = re.compile(r"^\d{4}-\d{2}-\d{2}$")         # e.g. 2025-08-12
DATETIME_PATTERN = re.compile(r"^\d{4}-\d{2}-\d{2}T")     # e.g. 2025-08-12T16:28:35
TIME_PATTERN = re.compile(r"^\d{1,2}:\d{2}(:\d{2}(\.\d+)?)?$")  # "9:30:00", "13:15:10.805702", "09:00"

def get_user_date_preference():
    user = frappe.session.user
    pref = frappe.db.get_value(
        "User Date Settings",
        {"user": user},
        "date_preference"
    )
    return pref or "AD"

def is_date_like(value: str) -> bool:
    """Return True if a string looks like a date or datetime."""
    if not isinstance(value, str) or TIME_PATTERN.match(value):
        return False
    if DATE_PATTERN.match(value) or DATETIME_PATTERN.match(value):
        return True
    try:
        parsed = parser.parse(value, fuzzy=False)
        # filter out unrealistic years
        return 1900 <= parsed.year <= 2100
    except Exception:
        return False
    
def process_incoming_dates(obj):
    user_preference = get_user_date_preference()

    if user_preference != "BS":
        return obj

    if isinstance(obj, dict):
        new_obj = {}
        for k, v in obj.items():
            if isinstance(v, str) and is_date_like(v):
                try:
                    y, m, d = map(int, v.split("-"))
                    ad_date = bs_to_ad(y, m, d)
                    new_obj[k] = ad_date.isoformat()
                    new_obj[f"{k}_bs"] = v
                except Exception:
                    new_obj[k] = v
            elif isinstance(v, (dict, list)):
                new_obj[k] = process_incoming_dates(v)
            else:
                new_obj[k] = v
        return new_obj

    elif isinstance(obj, list):
        return [process_incoming_dates(i) for i in obj]

    return obj


def safe_ad_to_bs(dt_date):
    try:
        min_bs_year, max_bs_year = min(bs.keys()), max(bs.keys())

        y, m, d = ad_to_bs(dt_date)

        if y < min_bs_year or y > max_bs_year:
            return None
        return (y, m, d)

    except Exception:
        return None


def enrich_dates(obj):
    user_preference = get_user_date_preference()

    if isinstance(obj, Document):
        return enrich_dates(obj.as_dict())

    if isinstance(obj, dict):
        new_obj = {}
        for k, v in obj.items():
            bs_str = None
            ad_str = None

            # Handle string values
            # if isinstance(v, str):
            #     # Only try conversion if fieldname looks like a date/time field OR value matches a date pattern
            #     if (any(kw in k.lower() for kw in DATE_KEYWORDS) or 
            #         DATE_PATTERN.match(v) or 
            #         DATETIME_PATTERN.match(v)):
            #         try:
            #             dt = parser.parse(v).date()
            #             y, m, d = ad_to_bs(dt)
            #             bs_str = f"{y}-{m:02d}-{d:02d}"
            #         except Exception:
            #             pass
            #     new_obj[k] = v

            if isinstance(v, str) and TIME_PATTERN.match(v):
                new_obj[k] = v
                continue

            if isinstance(v, str) and is_date_like(v):
                try:
                    dt = parser.parse(v).date()
                    res = safe_ad_to_bs(dt)
                    if res:
                        y, m, d = res
                        bs_str = f"{y}-{m:02d}-{d:02d}"
                except Exception:
                    pass
                new_obj[k] = v

            elif isinstance(v, (date, datetime)):
                dt_date = v.date() if isinstance(v, datetime) else v
                res = safe_ad_to_bs(dt_date)
                if res:
                    y, m, d = res
                    bs_str = f"{y}-{m:02d}-{d:02d}"
                new_obj[k] = v.isoformat()

            elif isinstance(v, (dict, list)):
                new_obj[k] = enrich_dates(v)
            else:
                new_obj[k] = v

            if bs_str:
                new_obj[f"{k}_bs"] = bs_str

        return new_obj

    elif isinstance(obj, list):
        return [enrich_dates(i) for i in obj]

    return obj
