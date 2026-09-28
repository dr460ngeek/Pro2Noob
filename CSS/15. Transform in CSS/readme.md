# CSS Transforms — Part 1

> **Mental model:** `transform` lets you **visually change an element's size, position, angle, or shape without changing the normal document layout around it.**

---

# 1. `transform: scale()`

Changes the **size** of an element.

```css
transform: scale(1.5);
```

```text
Original:        Scaled:

┌──────┐         ┌─────────┐
│      │   →     │         │
└──────┘         │         │
                 └─────────┘
```

### `scaleX()`

Changes size along the **X-axis**.

```css
transform: scaleX(1.5);
```

```text
Width ↑
Height unchanged
```

### `scaleY()`

Changes size along the **Y-axis**.

```css
transform: scaleY(2);
```

```text
Width unchanged
Height ↑
```

### `scale(x, y)`

Controls both axes:

```css
transform: scale(1.5, 2);
```

```text
X → 1.5×
Y → 2×
```

### Mental model

> **`scale` = "Make me bigger or smaller."**

```text
scale(1)   → original size
scale(2)   → 2× bigger
scale(0.5) → half size
```

---

# 2. `transform: skew()`

**Tilts/distorts** an element along an axis.

### `skewX()`

Tilts along the X-axis:

```css
transform: skewX(20deg);
```

```text
Before:          After:

┌──────┐         /──────┐
│      │   →    /       │
└──────┘       /────────┘
```

### `skewY()`

Tilts along the Y-axis:

```css
transform: skewY(20deg);
```

### `skew(x, y)`

Controls both:

```css
transform: skew(20deg, 10deg);
```

### Mental model

> **`skew` = "Tilt/distort the shape."**

---

# 3. `transform: translate()`

Moves an element from its original position.

### `translateX()`

Moves horizontally:

```css
transform: translateX(20px);
```

```text
[BOX] ─────────→ [BOX]
                20px
```

### `translateY()`

Moves vertically:

```css
transform: translateY(20px);
```

```text
[BOX]
  │
  ↓ 20px
[BOX]
```

### `translate(x, y)`

Moves along both axes:

```css
transform: translate(20px, 20px);
```

```text
X → 20px
Y → 20px
```

### Mental model

> **`translate` = "Move me."**

**Important correction:** Your original code had:

```css
transform: translate(20px 20px);
```

It should be:

```css
transform: translate(20px, 20px);
```

---

# 4. `transform: rotate()`

Rotates an element.

```css
transform: rotate(70deg);
```

```text
Before:          After:

┌──────┐             ╱───╲
│      │     →      ╱     ╲
└──────┘           ╲───────╱
```

### `rotateX()`

Rotates around the **X-axis**:

```css
transform: rotateX(30deg);
```

Creates a 3D-like rotation around the horizontal axis.

### `rotateY()`

Rotates around the **Y-axis**:

```css
transform: rotateY(30deg);
```

Creates a 3D-like rotation around the vertical axis.

### Important correction

There is **no**:

```css
transform: rotate(x, y);
```

for specifying X and Y rotation.

For separate 3D-axis rotations, use:

```css
transform: rotateX(30deg) rotateY(20deg);
```

### Mental model

> **`rotate` = "Turn me."**

---

# 5. Combining Transforms

Multiple transforms can be written in a single `transform` declaration:

```css
transform: translate(20px, 20px)
           rotate(30deg)
           scale(1.2);
```

You can combine:

```text
translate
rotate
scale
skew
```

### Mental model

> **One `transform` property → multiple transformations.**

**Important:** Don't write separate `transform` declarations expecting them to stack:

```css
/* ❌ Only the second transform effectively remains */
transform: scale(1.5);
transform: rotate(20deg);
```

Instead:

```css
/* ✅ */
transform: scale(1.5) rotate(20deg);
```

---

# 6. `transform-origin`

Controls the **point around which the transformation happens**.

Default:

```css
transform-origin: center;
```

Example:

```css
transform: rotate(20deg);
transform-origin: top left;
```

Now the element rotates around its **top-left corner** rather than its center.

```text
Default:

        ↻
      [ BOX ]
        ↑
      center


top left:

↻
┌─────────┐
│   BOX   │
└─────────┘
↑
origin
```

### Custom position

```css
transform-origin: 40% 20%;
```

```text
40% → X position
20% → Y position
```

### Mental model

> **`transform-origin` = "Where is my transformation pivot?"**

---

# ⚡ TL;DR Cheat Sheet

| Transform          | What it does                |
| ------------------ | --------------------------- |
| `scale()`          | Resize                      |
| `scaleX()`         | Resize horizontally         |
| `scaleY()`         | Resize vertically           |
| `skew()`           | Tilt/distort                |
| `skewX()`          | Tilt horizontally           |
| `skewY()`          | Tilt vertically             |
| `translate()`      | Move                        |
| `translateX()`     | Move horizontally           |
| `translateY()`     | Move vertically             |
| `rotate()`         | Rotate                      |
| `rotateX()`        | 3D rotation around X-axis   |
| `rotateY()`        | 3D rotation around Y-axis   |
| `transform-origin` | Change transformation pivot |

### The easiest memory trick

```text
scale     → SIZE
translate → POSITION
rotate    → ANGLE
skew      → SHAPE
origin    → PIVOT
```

And the corrected syntax worth remembering:

```css
transform: translate(20px, 20px);
transform: rotate(30deg) scale(1.2) translateX(20px);

transform-origin: center;
transform-origin: top left;
transform-origin: 40% 20%;
```
