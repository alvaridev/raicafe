import os

# مسیر پوشه تصاویر منو
image_dir = os.path.join("public", "images", "menu")

if not os.path.exists(image_dir):
    print(f"مسیر پیدا نشد: {image_dir}")
    exit()

deleted_count = 0

# دریافت تاییدیه ساده برای امنیت بیشتر
confirm = input("آیا مطمئن هستید که می‌خواهید تمام فایل‌های PNG را در این مسیر حذف کنید؟ (y/n): ")
if confirm.lower() != 'y':
    print("عملیات لغو شد.")
    exit()

for filename in os.listdir(image_dir):
    # بررسی اینکه پسوند فایل حتماً png باشد (بدون در نظر گرفتن حروف بزرگ و کوچک)
    if filename.lower().endswith('.png'):
        file_path = os.path.join(image_dir, filename)
        try:
            os.remove(file_path)
            print(f"حذف شد: {filename}")
            deleted_count += 1
        except Exception as e:
            print(f"خطا در حذف فایل {filename}: {e}")

print(f"\nعملیات با موفقیت پایان یافت. تعداد {deleted_count} فایل PNG حذف شدند.")
