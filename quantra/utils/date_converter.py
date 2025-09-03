import datetime
from .bs_data import bs, nepali_numbers

# ---------------------------
# Helper Functions
# ---------------------------

def get_nepali_number(eng_num: int | str) -> str:
    """Convert English number to Nepali numeral string."""
    return "".join(nepali_numbers[int(d)] for d in str(eng_num))


def get_leap_years(start: int = 2000, end: int = 2100) -> list[int]:
    """Return list of BS leap years between start and end."""
    leap_years = []
    for year in range(start, end + 1):
        if year in bs:
            total_days = sum(bs[year][1:])  # skip index 0
            if total_days == 366:
                leap_years.append(year)
    return leap_years


leap_years = get_leap_years()


# ---------------------------
# AD ↔ BS Conversion
# ---------------------------

# reference: 1944-01-01 AD == 2000-09-17 BS
REF_AD = datetime.date(1943, 4, 14)
REF_BS = (2000, 1, 1)  


def ad_to_bs(ad_date: datetime.date) -> tuple[int, int, int]:
    """Convert AD date → BS (year, month, day)."""
    # days difference from reference
    delta_days = (ad_date - REF_AD).days

    # start from reference BS
    year, month, day = REF_BS

    # add days one by one
    while delta_days > 0:
        days_in_month = bs[year][month]
        day += 1
        if day > days_in_month:
            day = 1
            month += 1
            if month > 12:
                month = 1
                year += 1
        delta_days -= 1

    return year, month, day


def bs_to_ad(year: int, month: int, day: int) -> datetime.date:
    """Convert BS date → AD (datetime.date)."""
    ad_date = REF_AD
    y, m, d = REF_BS

    delta_days = 0

    # If BS date is after reference
    if (year, month, day) >= (y, m, d):
        # Add year days
        for yy in range(y, year):
            delta_days += sum(bs[yy][1:])

        # Add month days
        for mm in range(m, month):
            delta_days += bs[year][mm]

        # Add day diff
        delta_days += (day - d)
    else:
        # Go backwards
        for yy in range(year, y):
            delta_days -= sum(bs[yy][1:])

        for mm in range(month, m):
            delta_days -= bs[year][mm]

        delta_days -= (d - day)

    return ad_date + datetime.timedelta(days=delta_days)
