import os
from PIL import Image

# مسیر پوشه تصاویر منو
image_dir = os.path.join("public", "images", "menu")

if not os.path.exists(image_dir):
    print(f"مسیر پیدا نشد: {image_dir}")
    exit()

for filename in os.listdir(image_dir):
    if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.jpeg')):
        file_path = os.path.join(image_dir, filename)
        try:
            with Image.open(file_path) as img:
                # تغییر نام پسوند به webp
                name, _ = os.path.splitext(filename)
                target_path = os.path.join(image_dir, f"{name}.webp")
                
                # تبدیل و ذخیره با کیفیت ۸۵٪ (بهینه و با کیفیت بالا)
                img.save(target_path, "WEBP", quality=85)
                print(f"تبدیل شد: {filename} -> {name}.webp")
                
                # اختیاری: اگر می‌خواهید فایل‌های قدیمی png حذف شوند این خط را فعال کنید:
                # os.remove(file_path)
        except Exception as e:
            print(f"خطا در تبدیل {filename}: {e}")

print("عملیات تبدیل به پایان رسید!")
