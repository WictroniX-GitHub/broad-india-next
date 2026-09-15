from PIL import Image, ImageFilter
import os

images_to_enhance = [
    'public/images/broad-bg-1.webp',
    'public/images/broad-bg-2.webp',
    'public/images/13Podium.webp'
]

target_width = 1920

for img_path in images_to_enhance:
    if os.path.exists(img_path):
        try:
            print(f"Processing {img_path}...")
            img = Image.open(img_path).convert("RGB")
            
            # Upscale if needed
            if img.width < target_width:
                wpercent = (target_width / float(img.width))
                hsize = int((float(img.height) * float(wpercent)))
                img = img.resize((target_width, hsize), Image.Resampling.LANCZOS)
                print(f"Upscaled to {target_width}x{hsize}")
            
            # Apply Sharpen Filter
            enhanced_img = img.filter(ImageFilter.UnsharpMask(radius=2, percent=150, threshold=3))
            
            # Save back
            enhanced_img.save(img_path, "WEBP", quality=100)
            print(f"Successfully enhanced {img_path}")
        except Exception as e:
            print(f"Failed to process {img_path}: {e}")
    else:
        print(f"File not found: {img_path}")
