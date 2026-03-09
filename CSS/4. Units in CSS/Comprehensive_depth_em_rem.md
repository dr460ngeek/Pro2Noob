* **`em` and `rem` are always font-size–based units.**
* But they can be **used on any property** (width, margin, padding, etc.).
* Their numeric value is still **calculated from font size**, not from width/height/margin.

---

# 1. `em` — Relative to Font Size (Usually Parent)

`em` is defined as:

> **1em = the computed `font-size` of the element**

However, there is one important nuance.

### When used on `font-size`

It is relative to the **parent's font-size**.

Example:

```css
div {
  font-size: 20px;
}

p {
  font-size: 2em;
}
```

Calculation:

```
2em = 2 × parent font size
2 × 20px = 40px
```

So the paragraph font becomes **40px**.

---

### When used on other properties

It becomes relative to **the element's own computed font-size**.

Example:

```css
p {
  font-size: 20px;
  margin: 2em;
}
```

Calculation:

```
2em = 2 × element font-size
2 × 20px = 40px
```

So:

```
margin = 40px
```

This applies to:

* `width`
* `height`
* `padding`
* `margin`
* `gap`
* `border-radius`
* etc.

Example:

```css
button {
  font-size: 18px;
  padding: 1em 2em;
}
```

Result:

```
padding-top/bottom = 18px
padding-left/right = 36px
```

---

# 2. `rem` — Relative to Root Font Size

`rem` always refers to:

> **the `font-size` of the root `<html>` element**

Default browser value:

```css
html {
  font-size: 16px;
}
```

Example:

```css
div {
  padding: 2rem;
}
```

Calculation:

```
2rem = 2 × root font-size
2 × 16px = 32px
```

So padding becomes:

```
32px
```

This **does not change even if parent font size changes**.

---

# 3. Example Showing the Difference

```css
html {
  font-size: 16px;
}

.parent {
  font-size: 20px;
}

.child {
  font-size: 2em;
  padding: 1em;
  margin: 1rem;
}
```

### Step-by-step calculation

Child font-size:

```
2em = 2 × parent font-size
2 × 20px = 40px
```

Padding:

```
1em = 1 × child font-size
1 × 40px = 40px
```

Margin:

```
1rem = 1 × root font-size
1 × 16px = 16px
```

Final values:

| Property  | Result |
| --------- | ------ |
| font-size | 40px   |
| padding   | 40px   |
| margin    | 16px   |

---

# 4. Key Rule to Remember

```
em  → based on font-size (parent or self depending on property)
rem → based on root font-size
```

They are **never relative to width, height, padding, margin, etc.**

Those properties **just use the value after the font-size calculation**.

---

# 5. Why Developers Prefer `rem`

`em` can cause **compounding problems**.

Example:

```
parent: 20px
child: 2em → 40px
grandchild: 2em → 80px
```

Font size keeps increasing.

With `rem`:

```
root: 16px
2rem = 32px everywhere
```

Stable scaling.

---

# 6. One-Line Mental Model

```
em  = font-size multiplier
rem = root font-size multiplier
```

---

