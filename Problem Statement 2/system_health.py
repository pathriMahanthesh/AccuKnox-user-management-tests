import psutil
import datetime

CPU_THRESHOLD = 80
MEMORY_THRESHOLD = 80
DISK_THRESHOLD = 80

def log_alert(message):
    with open("system_health_log.txt", "a") as f:
        f.write(f"{datetime.datetime.now()} - {message}\n")

def check_system():
    cpu = psutil.cpu_percent(interval=1)
    memory = psutil.virtual_memory().percent
    disk = psutil.disk_usage('/').percent

    print("CPU:", cpu)
    print("Memory:", memory)
    print("Disk:", disk)

    if cpu > CPU_THRESHOLD:
        log_alert(f"High CPU: {cpu}%")
    if memory > MEMORY_THRESHOLD:
        log_alert(f"High Memory: {memory}%")
    if disk > DISK_THRESHOLD:
        log_alert(f"High Disk: {disk}%")

check_system()
