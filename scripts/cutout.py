import sys
from PIL import Image

input_path = "sid/src/assets/portrait.jpeg"
output_path = "sid/src/assets/portrait-cutout.png"

try:
    import rembg
    print("Using rembg for studio-quality alpha cutout...")
    with open(input_path, "rb") as f:
        input_data = f.read()
    output_data = rembg.remove(input_data)
    with open(output_path, "wb") as f:
        f.write(output_data)
    print(f"Successfully generated cutout via rembg at {output_path}")
except Exception as e:
    print("rembg error or not ready:", e)
    print("Falling back to high-precision exterior flood-fill...")
    im = Image.open(input_path).convert("RGBA")
    w, h = im.size
    pixels = im.load()

    from collections import deque

    visited = set()
    queue = deque()

    # Seed from borders (top, left, right borders)
    for x in range(w):
        r, g, b, a = pixels[x, 0]
        if r > 235 and g > 235 and b > 235:
            queue.append((x, 0))
            visited.add((x, 0))
        r, g, b, a = pixels[x, 1]
        if r > 235 and g > 235 and b > 235:
            queue.append((x, 1))
            visited.add((x, 1))

    for y in range(h):
        r, g, b, a = pixels[0, y]
        if r > 235 and g > 235 and b > 235:
            queue.append((0, y))
            visited.add((0, y))
        r, g, b, a = pixels[w - 1, y]
        if r > 235 and g > 235 and b > 235:
            queue.append((w - 1, y))
            visited.add((w - 1, y))

    while queue:
        cx, cy = queue.popleft()
        for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            nx, ny = cx + dx, cy + dy
            if 0 <= nx < w and 0 <= ny < h and (nx, ny) not in visited:
                r, g, b, a = pixels[nx, ny]
                # If pixel is near-white background
                if r > 228 and g > 228 and b > 228 and max(r, g, b) - min(r, g, b) < 18:
                    visited.add((nx, ny))
                    queue.append((nx, ny))

    for x, y in visited:
        pixels[x, y] = (0, 0, 0, 0)

    im.save(output_path, "PNG")
    print(f"Successfully generated flood-fill cutout at {output_path}")
