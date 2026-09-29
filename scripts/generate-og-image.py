#!/usr/bin/env python3
"""
Generate Tradient brand images into public/:

  - og-image.png          (1200x630 — Open Graph / Twitter card)
  - apple-touch-icon.png  (180x180)

Pure Pillow, no other dependencies:

    pip install pillow
    python3 scripts/generate-og-image.py

Re-run after changing the tagline, palette, or fonts. Colors mirror the
design tokens in src/index.css (--color-base, --color-signal, ...).
"""

import os

from PIL import Image, ImageDraw, ImageFont

# ---------------------------------------------------------------- palette
BASE = (5, 7, 10)
WHITE = (238, 242, 247)
FOG = (198, 205, 216)
MIST = (150, 160, 176)
SIGNAL = (60, 224, 189)
LINE = (148, 163, 184)

HERE = os.path.dirname(os.path.abspath(__file__))
PUBLIC = os.path.normpath(os.path.join(HERE, "..", "public"))

FONT_CANDIDATES = {
    "bold": [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
        "/Library/Fonts/Arial Bold.ttf",
        "C:/Windows/Fonts/arialbd.ttf",
    ],
    "regular": [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf",
        "/Library/Fonts/Arial.ttf",
        "C:/Windows/Fonts/arial.ttf",
    ],
    "mono": [
        "/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationMono-Regular.ttf",
        "/Library/Fonts/Courier New.ttf",
        "C:/Windows/Fonts/consola.ttf",
    ],
    "mono-bold": [
        "/usr/share/fonts/truetype/dejavu/DejaVuSansMono-Bold.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationMono-Bold.ttf",
        "/Library/Fonts/Courier New Bold.ttf",
        "C:/Windows/Fonts/consolab.ttf",
    ],
}


def font(kind: str, size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    for path in FONT_CANDIDATES[kind]:
        if os.path.exists(path):
            try:
                return ImageFont.truetype(path, size)
            except OSError:
                continue
    return ImageFont.load_default(size)


def tracked_width(text: str, f, tracking: float) -> float:
    return sum(f.getlength(ch) + tracking for ch in text) - (tracking if text else 0)


def draw_tracked(draw: ImageDraw.ImageDraw, xy, text: str, f, fill, tracking: float = 0):
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=f, fill=fill)
        x += f.getlength(ch) + tracking
    return x


def rounded_line(draw: ImageDraw.ImageDraw, p1, p2, fill, width: int):
    """Stroke a line with round caps."""
    draw.line([p1, p2], fill=fill, width=width)
    r = width / 2
    for p in (p1, p2):
        draw.ellipse([p[0] - r, p[1] - r, p[0] + r, p[1] + r], fill=fill)


def radial_glow(size, center, radius, color, max_alpha: int, steps: int = 60) -> Image.Image:
    layer = Image.new("RGBA", size, (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    cx, cy = center
    for i in range(steps, 0, -1):
        r = radius * i / steps
        a = int(max_alpha * (1 - i / steps) ** 2)
        d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(*color, a))
    return layer


# ---------------------------------------------------------------- og image
def og_image() -> None:
    W, H = 1200, 630
    img = Image.new("RGBA", (W, H), (*BASE, 255))
    fx = Image.new("RGBA", (W, H), (0, 0, 0, 0))  # effects layer
    d = ImageDraw.Draw(fx)

    # faint grid
    for x in range(0, W, 48):
        d.line([(x, 0), (x, H)], fill=(*LINE, 8), width=1)
    for y in range(0, H, 48):
        d.line([(0, y), (W, y)], fill=(*LINE, 8), width=1)

    # accent glow, upper right
    fx = Image.alpha_composite(fx, radial_glow((W, H), (880, 220), 420, SIGNAL, 26))
    d = ImageDraw.Draw(fx)

    # abstract agent network (upper right)
    pts = [
        (880, 120), (1000, 90), (1110, 150), (860, 230),
        (980, 210), (1120, 260), (930, 310), (1060, 320),
    ]
    edges = [
        (0, 1), (1, 2), (0, 3), (1, 4), (2, 4), (3, 4),
        (4, 5), (3, 6), (4, 7), (6, 7), (2, 5),
    ]
    for a, b in edges:
        d.line([pts[a], pts[b]], fill=(210, 220, 235, 40), width=1)
    for i, (x, y) in enumerate(pts):
        accent = i in (1, 4)
        r = 6 if accent else 4.5
        d.ellipse([x - r, y - r, x + r, y + r],
                  fill=(*SIGNAL, 235) if accent else (16, 22, 32, 255),
                  outline=(*SIGNAL, 200) if accent else (*LINE, 130), width=2)
        if accent:
            d.ellipse([x - 12, y - 12, x + 12, y + 12], outline=(*SIGNAL, 80), width=2)

    # Tradient mark (top left)
    rounded_line(d, (96, 96), (164, 96), (*WHITE, 255), 9)
    d.ellipse([158, 90, 170, 102], fill=(*SIGNAL, 255))
    rounded_line(d, (130, 96), (130, 148), (*WHITE, 235), 9)
    d.ellipse([120, 146, 140, 166], fill=(*SIGNAL, 255))
    d.ellipse([113, 139, 147, 173], outline=(*SIGNAL, 90), width=3)

    img = Image.alpha_composite(img, fx)
    d = ImageDraw.Draw(img)

    # typography
    f_kicker = font("mono-bold", 21)
    draw_tracked(d, (96, 218), "OPEN-SOURCE AI TRADING RESEARCH", f_kicker, SIGNAL, tracking=5)

    f_title = font("bold", 108)
    d.text((92, 246), "Tradient", font=f_title, fill=WHITE)

    f_tag = font("bold", 36)
    d.text((96, 392), "Autonomous Intelligence for On-Chain Markets", font=f_tag, fill=FOG)

    f_desc = font("regular", 23)
    d.text((96, 452), "AI agents that research on-chain markets, discover trading signals,",
           font=f_desc, fill=MIST)
    d.text((96, 484), "and execute crypto strategies.", font=f_desc, fill=MIST)

    # status pill (bottom left) — drawn on its own layer so alpha blends
    pill_text = "EARLY STAGE · BUILDING IN PUBLIC"
    f_pill = font("mono-bold", 18)
    pw = tracked_width(pill_text, f_pill, tracking=3)
    px0, py0, px1, py1 = 96, 540, int(96 + pw + 44), 586
    pill_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    pd = ImageDraw.Draw(pill_layer)
    pd.rounded_rectangle([px0, py0, px1, py1], radius=23,
                         fill=(*SIGNAL, 16), outline=(*SIGNAL, 110), width=2)
    img = Image.alpha_composite(img, pill_layer)
    d = ImageDraw.Draw(img)
    draw_tracked(d, (px0 + 22, py0 + 13), pill_text, f_pill, SIGNAL, tracking=3)

    img.convert("RGB").save(os.path.join(PUBLIC, "og-image.png"))


# ---------------------------------------------------------------- touch icon
def apple_touch_icon() -> None:
    S = 180
    img = Image.new("RGBA", (S, S), (*BASE, 255))
    d = ImageDraw.Draw(img)

    rounded_line(d, (50, 62), (130, 62), (*WHITE, 255), 12)
    d.ellipse([123, 55, 137, 69], fill=(*SIGNAL, 255))
    rounded_line(d, (90, 62), (90, 122), (*WHITE, 235), 12)
    d.ellipse([76, 116, 104, 144], fill=(*SIGNAL, 255))
    ring = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    rd = ImageDraw.Draw(ring)
    rd.ellipse([68, 108, 112, 152], outline=(*SIGNAL, 90), width=4)
    img = Image.alpha_composite(img, ring)

    img.convert("RGB").save(os.path.join(PUBLIC, "apple-touch-icon.png"))


if __name__ == "__main__":
    os.makedirs(PUBLIC, exist_ok=True)
    og_image()
    apple_touch_icon()
    print("Wrote public/og-image.png (1200x630) and public/apple-touch-icon.png (180x180)")
