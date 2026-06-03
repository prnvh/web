"""Extract hero images from reference mockups (1:1 assets)."""
from pathlib import Path

from PIL import Image

root = Path(__file__).resolve().parents[1]
out = root / "public" / "images"
out.mkdir(parents=True, exist_ok=True)

# box = left, top, right, bottom — tuned to mockup screenshots
crops = {
    "home-featured.jpg": ("417c49ff-416c-49c2-a3a9-52189d6ea09c.png", (700, 250, 1050, 720)),
    "brief-hero.jpg": ("ChatGPT Image Jun 3, 2026, 01_44_56 PM (1).png", (920, 210, 1240, 530)),
    "essay-hero.jpg": ("ChatGPT Image Jun 3, 2026, 01_45_12 PM (3).png", (800, 170, 1160, 530)),
    "field-map-hero.jpg": ("ChatGPT Image Jun 3, 2026, 01_45_31 PM (4).png", (650, 190, 1180, 500)),
}

for name, (src, box) in crops.items():
    path = root / src
    if not path.exists():
        print("skip missing", src)
        continue
    img = Image.open(path).convert("RGB")
    img.crop(box).save(out / name, quality=94)
    print("wrote", name, img.crop(box).size)
