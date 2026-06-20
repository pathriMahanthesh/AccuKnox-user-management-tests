import requests
import datetime

def log_status(msg):
    with open("app_health_log.txt", "a") as f:
        f.write(f"{datetime.datetime.now()} - {msg}\n")

def check(url):
    try:
        r = requests.get(url, timeout=5)
        if r.status_code == 200:
            print(url, "UP ✅")
            log_status(f"{url} UP")
        else:
            print(url, "DOWN ❌")
            log_status(f"{url} DOWN ({r.status_code})")
    except:
        print(url, "DOWN ❌ (No response)")
        log_status(f"{url} DOWN (No response)")

check("https://example.com")