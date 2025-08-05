import nepali_datetime
import datetime

def ad_to_bs(date):
    if isinstance(date, str):
        date = datetime.datetime.strptime(date, "%d-%m-%Y").date()
    bs = nepali_datetime.date.from_datetime_date(date)
    return bs.strftime("%d-%m-%Y")

def bs_to_ad(bs_str):
    d, m, y = map(int, bs_str.split("-"))
    bs_date = nepali_datetime.date(y, m, d)
    return bs_date.to_datetime_date().strftime("%Y-%m-%d")

