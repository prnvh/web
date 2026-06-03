"""Extract hero images from reference mockups."""
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    raise SystemExit("pip install pillow")

root = Path(__file__).resolve().parents[1]
out = root / "public" / "images"
out.mkdir(parents=True, exist_ok=True)

crops = {
    "home-featured.jpg": ("417c49ff-416c-49c2-a3a9-52189d6ea09c.png", (720, 280, 1080, 720)),
    "brief-hero.jpg": ("ChatGPT Image Jun 3, 2026, 01_44_56 PM (1).png", (900, 200, 1250, 550)),
    "essay-hero.jpg": ("ChatGPT Image Jun 3, 2026, 01_45_12 PM (3).png", (820, 180, 1180, 540)),
    "field-map-hero.jpg": ("ChatGPT Image Jun 3, 2026, 01_45_31 PM (4).png", (680, 200, 1150, 480)),
}

for name, (src, box) in crops.items():
    path = root / src
    if not path.exists():
        continue
    img = Image.open(path).convert("RGB")
    img.crop(box).save(out / name, quality=92)

print("Cropped", len(crops), "heroes to", out)
