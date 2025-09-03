from datetime import datetime, date
from dateutil import parser
import re
import frappe
from .date_converter import ad_to_bs, bs_to_ad 
from frappe.model.document import Document

# Patterns for AD date/datetime strings
DATE_PATTERN = re.compile(r"^\d{4}-\d{2}-\d{2}$")         # e.g. 2025-08-12
DATETIME_PATTERN = re.compile(r"^\d{4}-\d{2}-\d{2}T")     # e.g. 2025-08-12T16:28:35
TIME_PATTERN = re.compile(r"^\d{1,2}:\d{2}(:\d{2}(\.\d+)?)?$")  # "9:30:00", "13:15:10.805702", "09:00"

# Fieldname hints
DATE_KEYWORDS = ("date", "creation", "modified")

def get_user_date_preference():
    user = frappe.session.user
    pref = frappe.db.get_value(
        "User Date Settings",
        {"user": user},
        "date_preference"
    )
    return pref or "AD"

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

            if isinstance(v, str):
                if TIME_PATTERN.match(v):
                    new_obj[k] = v
                    continue

                if (any(kw in k.lower() for kw in DATE_KEYWORDS) or 
                    DATE_PATTERN.match(v) or 
                    DATETIME_PATTERN.match(v)):
                    try:
                        if user_preference == "BS":
                            # convert to ad
                            try:
                                y, m, d = map(int, v.split("-"))
                                ad_date = bs_to_ad(y, m, d)
                                ad_str = ad_date.isoformat()
                                bs_str = v
                            except Exception:
                                dt = parser.parse(v).date()
                                y, m, d = ad_to_bs(dt)
                                bs_str = f"{y}-{m:02d}-{d:02d}"
                        else:
                            dt = parser.parse(v).date()
                            y, m, d = ad_to_bs(dt)
                            bs_str = f"{y}-{m:02d}-{d:02d}"
                    except Exception:
                        pass

                new_obj[k] = ad_str or v

            elif isinstance(v, (date, datetime)):
                try:
                    dt_date = v.date() if isinstance(v, datetime) else v
                    y, m, d = ad_to_bs(dt_date)
                    bs_str = f"{y}-{m:02d}-{d:02d}"
                    new_obj[k] = v.isoformat()
                except Exception:
                    new_obj[k] = v.isoformat() if isinstance(v, datetime) else str(v)

            else:
                new_obj[k] = enrich_dates(v)

            if bs_str:
                new_obj[f"{k}_bs"] = bs_str

        return new_obj

    elif isinstance(obj, list):
        return [enrich_dates(i) for i in obj]

    return obj
