import frappe
import json

@frappe.whitelist()
def search_icd_by_index_title(search_text=None, page=1, page_size=10):
    # convert to int if passed as query string
    try:
        page = int(page)
    except:
        page = 1
    try:
        page_size = int(page_size)
    except:
        page_size = 10

    if not search_text:
        return {
            "results": [],
            "page": page,
            "page_size": page_size,
            "total_count": 0,
            "total_pages": 0,
            "next_page": None,
            "prev_page": None
        }

    search_text = search_text.lower()
    matched_results = []

    icd_codes = frappe.get_all(
        "ICD Code",
        ["name", "code", "definition", "long_definition", "index_title"],
    )

    for icd in icd_codes:
        try:
            titles = json.loads(icd.get("index_title") or "[]")
        except:
            titles = []

        for t in titles:
            if search_text in t.lower():
                matched_results.append({
                    "name": icd.name,
                    "code": icd.code,
                    "definition": icd.definition,
                    "long_definition": icd.long_definition,
                    "index_title": icd.index_title
                })
                break

    total_count = len(matched_results)
    total_pages = (total_count + page_size - 1) // page_size

    # Pagination
    start = (page - 1) * page_size
    end = start + page_size
    paged_results = matched_results[start:end]

    return {
        "page": page,
        "page_size": page_size,
        "total_count": total_count,
        "total_pages": total_pages,
        "next_page": page + 1 if page < total_pages else None,
        "prev_page": page - 1 if page > 1 else None,
        "results": paged_results
    }
