---

# CSS Units — Complete Reference

CSS units define **how large or small an element should be** (font size, width, spacing, etc.).

They fall into **four main categories**:

1. Absolute Units (fixed)
2. Font-Relative Units
3. Viewport Units
4. Container Units

---

# 1. Absolute Units (Fixed Size)

Absolute units represent **fixed measurements**. They do **not depend on parent elements or screen size**.

| Unit | Meaning            | Conversion           | Example           |
| ---- | ------------------ | -------------------- | ----------------- |
| `px` | Pixel              | 1px = 1 screen pixel | `font-size:16px`  |
| `pt` | Point              | 1pt = 1/72 inch      | `font-size:12pt`  |
| `pc` | Pica               | 1pc = 12pt           | `margin:1pc`      |
| `cm` | Centimeter         | physical unit        | `width:5cm`       |
| `mm` | Millimeter         | physical unit        | `width:10mm`      |
| `in` | Inch               | 1in = 96px           | `width:1in`       |
| `Q`  | Quarter millimeter | 1Q = 1/4 mm          | `border-width:4Q` |

### Important

Browsers convert physical units into **pixels internally**.

Example:

```
1in = 96px
```

---

# 2. Font-Relative Units

These units depend on **font size**.

---

## `em`

Relative to the **font size of the parent element**.

Example

```
div { font-size:20px; }
p { font-size:2em; }
```

Calculation

```
2 × 20px = 40px
```

---

## `rem`

Relative to the **root `<html>` element font size**.

Default browser root size:

```
html = 16px
```

Example

```
h1 { font-size:2rem; }
```

Result

```
2 × 16px = 32px
```

---

## `ex`

Relative to the **height of the lowercase letter "x"**.

Example

```
margin-top:2ex;
```

---

## `ch`

Relative to the **width of the character "0"**.

Example

```
input { width:30ch; }
```

Meaning: fits roughly **30 characters**.

---

## `cap`

Height of **capital letters**.

Example

```
font-size:2cap;
```

---

## `ic`

Size of **CJK characters** (used for Chinese/Japanese/Korean typography).

---

## `lh`

Relative to the **line height of the element**.

Example

```
margin-top:2lh;
```

---

## `rlh`

Relative to the **root element line height**.

---

# 3. Percentage Unit

| Unit | Meaning                    |
| ---- | -------------------------- |
| `%`  | Relative to parent element |

Example

```
div { width:500px }
p { width:50% }
```

Result

```
250px
```

---

# 4. Viewport Units

Viewport units depend on the **size of the browser window**.

| Unit   | Meaning                             |
| ------ | ----------------------------------- |
| `vw`   | 1% of viewport width                |
| `vh`   | 1% of viewport height               |
| `vmin` | smaller of viewport width or height |
| `vmax` | larger of viewport width or height  |

Example

```
div { width:50vw }
```

If screen width is **1200px**

```
50vw = 600px
```

---

## Dynamic Viewport Units (Modern CSS)

Mobile browsers have **dynamic address bars**, so new viewport units were introduced.

| Unit  | Meaning                 |
| ----- | ----------------------- |
| `svw` | small viewport width    |
| `svh` | small viewport height   |
| `lvw` | large viewport width    |
| `lvh` | large viewport height   |
| `dvw` | dynamic viewport width  |
| `dvh` | dynamic viewport height |

---

# 5. Container Query Units

Used with **container queries**.

Instead of screen size, they depend on the **size of a parent container**.

| Unit    | Meaning                    |
| ------- | -------------------------- |
| `cqw`   | 1% of container width      |
| `cqh`   | 1% of container height     |
| `cqi`   | inline size of container   |
| `cqb`   | block size of container    |
| `cqmin` | smaller of width or height |
| `cqmax` | larger of width or height  |

Example

```
.card {
width:50cqw;
}
```

---

# 6. Angle Units

Used mainly in **animations and transforms**.

| Unit   | Meaning        |
| ------ | -------------- |
| `deg`  | Degrees        |
| `rad`  | Radians        |
| `grad` | Gradians       |
| `turn` | Full rotations |

Example

```
transform:rotate(45deg);
```

---

# 7. Time Units

Used in **animations and transitions**.

| Unit | Meaning      |
| ---- | ------------ |
| `s`  | Seconds      |
| `ms` | Milliseconds |

Example

```
transition:0.3s;
```

---

# 8. Frequency Units

Rarely used.

| Unit  | Meaning   |
| ----- | --------- |
| `Hz`  | Hertz     |
| `kHz` | Kilohertz |

---

# 9. Resolution Units

Used in **media queries and images**.

| Unit   | Meaning             |
| ------ | ------------------- |
| `dpi`  | dots per inch       |
| `dpcm` | dots per centimeter |
| `dppx` | dots per pixel      |

Example

```
@media (resolution:2dppx)
```

---

# 10. Flex Unit

Used in **CSS Grid**.

| Unit | Meaning                     |
| ---- | --------------------------- |
| `fr` | Fraction of available space |

Example

```
grid-template-columns:1fr 2fr;
```

Meaning:

```
1 part | 2 parts
```

---

# Quick Summary Table

| Category         | Units                             |
| ---------------- | --------------------------------- |
| Absolute         | px, pt, pc, cm, mm, in, Q         |
| Font Relative    | em, rem, ex, ch, cap, ic, lh, rlh |
| Percentage       | %                                 |
| Viewport         | vw, vh, vmin, vmax                |
| Dynamic Viewport | svw, svh, lvw, lvh, dvw, dvh      |
| Container Query  | cqw, cqh, cqi, cqb, cqmin, cqmax  |
| Angle            | deg, rad, grad, turn              |
| Time             | s, ms                             |
| Frequency        | Hz, kHz                           |
| Resolution       | dpi, dpcm, dppx                   |
| Grid             | fr                                |

---

# Practical Units Developers Use Most

In real web development, **only a few units are used frequently**.

| Purpose             | Common Units |
| ------------------- | ------------ |
| Fonts               | rem          |
| Spacing             | rem          |
| Layout width        | %            |
| Responsive layout   | vw, vh       |
| Precise UI elements | px           |
| Grid layout         | fr           |

---

# Simple Memory Rule

```
px   → fixed size
em   → parent font size
rem  → root font size
%    → parent element
vw/vh → screen size
fr   → grid space
ch   → character width
```

---