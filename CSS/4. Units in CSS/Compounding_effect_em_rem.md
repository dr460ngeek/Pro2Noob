Below are **three important `em` behaviors** that frequently confuse developers. Understanding these prevents many layout bugs.

---

# 1. `em` Cascading (Compounding Effect)

When `em` is used on **`font-size`**, it compounds through nested elements.

Example:

```css
.parent {
  font-size: 20px;
}

.child {
  font-size: 2em;
}

.grandchild {
  font-size: 2em;
}
```

### Calculation

Parent:

```
20px
```

Child:

```
2em = 2 × parent font-size
2 × 20px = 40px
```

Grandchild:

```
2em = 2 × child font-size
2 × 40px = 80px
```

### Result

| Element    | Font Size |
| ---------- | --------- |
| parent     | 20px      |
| child      | 40px      |
| grandchild | 80px      |

This is why `em` can **grow unexpectedly in deeply nested layouts**.

---

# 2. `em` Uses the Element's Own Font Size for Other Properties

When `em` is used in properties like:

* padding
* margin
* width
* height
* gap

It is calculated using **the element’s own computed font size**, not the parent.

Example:

```css
.card {
  font-size: 20px;
  padding: 2em;
}
```

### Calculation

```
2em = 2 × element font-size
2 × 20px = 40px
```

Result:

| Property  | Value |
| --------- | ----- |
| font-size | 20px  |
| padding   | 40px  |

This means **spacing scales automatically with text size**.

---

# 3. Changing Font Size Changes All `em` Measurements

If an element uses `em` for layout spacing, **changing the font size changes everything**.

Example:

```css
button {
  font-size: 16px;
  padding: 1em 2em;
}
```

### Initial calculation

```
padding-top/bottom = 16px
padding-left/right = 32px
```

Now increase font size:

```css
button {
  font-size: 24px;
}
```

New calculation:

```
padding-top/bottom = 24px
padding-left/right = 48px
```

So **padding scales automatically with the text**.

This is why `em` is sometimes used for **buttons and components**.

---

# Practical Example

```css
.card {
  font-size: 18px;
  padding: 1.5em;
  border-radius: 0.5em;
}
```

Calculation:

```
padding = 1.5 × 18px = 27px
border-radius = 0.5 × 18px = 9px
```

If you later change:

```css
.card {
  font-size: 22px;
}
```

Everything scales proportionally.

---

# Key Difference Between `em` and `rem`

| Unit  | Relative To                   | Cascades? |
| ----- | ----------------------------- | --------- |
| `em`  | font-size of element / parent | Yes       |
| `rem` | root `<html>` font-size       | No        |

---

# Practical Rule Used by Developers

Most frontend developers follow this pattern:

| Purpose               | Unit  |
| --------------------- | ----- |
| Global font sizes     | `rem` |
| Layout spacing        | `rem` |
| Component scaling     | `em`  |
| Precise pixel control | `px`  |

---

# One Simple Mental Model

```
em  = scales with the element
rem = scales with the page
px  = fixed
```

---