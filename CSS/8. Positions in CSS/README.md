CSS positioning controls **how an element is placed in the layout** relative to other elements or the viewport. The five values are:

* `static`
* `relative`
* `absolute`
* `fixed`
* `sticky`

Before understanding them, keep this **core mental model** in mind:

> Every HTML element normally participates in the **document flow** (top → bottom layout).
> Some positioning modes **keep the element in the flow**, while others **remove it from the flow**.

---

# 1. `position: static` (Default Behavior)

### Mental model

Think of `static` as **normal traffic on a road**.
Every element follows the standard order of HTML.

```
Element A
Element B
Element C
```

They appear **one after another**.

### Characteristics

* Default position of all elements.
* The element **remains in normal document flow**.
* `top`, `left`, `right`, `bottom` **DO NOT work**.
* Browser decides placement based on block/inline layout.

### Example

```css
div {
  position: static;
  top: 50px; /* ignored */
}
```

The `top` value will **do nothing**.

### When it is used

You usually **don't explicitly write `static`** unless you want to reset positioning.

---

# 2. `position: relative`

### Mental model

Imagine the element **standing at its normal place**, but you **nudge it slightly**.

Important idea:

> The element **still keeps its original space reserved**.

Think of it like moving a book on a table **slightly left or right**, but the empty spot where it originally was **still exists**.

### Characteristics

* Element **remains in document flow**.
* You can use `top`, `left`, `right`, `bottom`.
* Movement happens **relative to its original position**.

### Example

```css
.box {
  position: relative;
  top: 20px;
  left: 30px;
}
```

What happens:

1. Browser places the element normally.
2. Then it shifts:

   * **20px downward**
   * **30px right**

But the **original space remains reserved**.

### Visual idea

Original layout:

```
[ BOX ]
```

After relative shift:

```
(empty space)

        [ BOX moved ]
```

---

# 3. `position: absolute`

This is where beginners usually get confused.

### Mental model

Think of `absolute` as **taking the element out of the traffic completely**.

It behaves like **a drone hovering above the layout**.

Important rule:

> Absolute elements are **removed from the document flow**.

Other elements behave **as if it does not exist**.

---

## Requirement for `absolute` to work properly

Absolute positioning **looks for the nearest positioned ancestor**.

**Positioned ancestor = any ancestor with**

```
position: relative
position: absolute
position: fixed
position: sticky
```

If none exists:

> It positions relative to the **viewport (or initial containing block)**.

---

### Example 1 (no positioned parent)

```html
<body>
  <div class="box"></div>
</body>
```

```css
.box {
  position: absolute;
  top: 0;
  right: 0;
}
```

Result:

The element moves to **top-right of the entire page**.

---

### Example 2 (with positioned parent)

```html
<div class="container">
   <div class="box"></div>
</div>
```

```css
.container {
  position: relative;
}

.box {
  position: absolute;
  top: 0;
  right: 0;
}
```

Now:

* `.box` positions **relative to `.container`**, not the page.

---

### Why we use `position: relative` on parent

Not because we want to move the parent.

But because:

> It **creates a positioning reference** for absolute children.

This is a very common pattern.

---

### Behavior summary

Absolute element:

* Removed from normal flow
* Does not reserve space
* Other elements ignore it
* Positioned relative to nearest positioned ancestor

---

### Visual Example

Normal flow:

```
Parent
 ├── Child A
 ├── Child B
 └── Child C
```

If Child B becomes absolute:

```
Parent
 ├── Child A
 └── Child C

Child B floats independently
```

---

# 4. `position: fixed`

### Mental model

Imagine **sticking something to the screen glass**.

When you scroll the page, it **does not move**.

Example: website **navbar** or **chat widget**.

---

### Characteristics

* Removed from document flow.
* Positioned **relative to the viewport**.
* Does **not move on scroll**.

### Example

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
}
```

Navbar will always remain **at the top of the screen**.

---

### Real-world examples

* floating chat button
* sticky navbar
* "back to top" button

---

# 5. `position: sticky`

### Mental model

Sticky is **half relative, half fixed**.

It behaves like:

1. **Relative initially**
2. **Fixed after reaching a scroll threshold**

---

### Example

```css
header {
  position: sticky;
  top: 0;
}
```

Behavior:

* Header scrolls normally.
* Once it reaches **top:0**, it sticks there.

---

### Visual idea

Scrolling page:

```
scrolling....

HEADER
content
content
content
```

When header hits top:

```
HEADER (stays fixed)
content scrolls under it
```

---

# Important Concept: Document Flow

Understanding this makes positioning easy.

### In Flow

Elements **take space**.

```
static
relative
sticky (initially)
```

---

### Out of Flow

Elements **do not take space**.

```
absolute
fixed
```

---

# Quick Comparison Table

| Position | In Flow  | Reference                   | Scroll behavior |
| -------- | -------- | --------------------------- | --------------- |
| static   | Yes      | normal flow                 | scrolls         |
| relative | Yes      | itself                      | scrolls         |
| absolute | No       | nearest positioned ancestor | scrolls         |
| fixed    | No       | viewport                    | does NOT scroll |
| sticky   | Yes → No | nearest scroll container    | sticks          |

---

# One Very Important Practical Pattern

This pattern appears **everywhere in real websites**.

### Parent

```css
.card {
  position: relative;
}
```

### Child

```css
.badge {
  position: absolute;
  top: 0;
  right: 0;
}
```

Result:

```
[ CARD            ]
[             BADGE ]
```

Badge sticks **to the card corner**.

---

# Final Mental Model Summary

Think of CSS positioning like **transport modes**:

| Position | Analogy                           |
| -------- | --------------------------------- |
| static   | normal traffic                    |
| relative | nudged slightly                   |
| absolute | drone hovering relative to parent |
| fixed    | sticker on screen                 |
| sticky   | magnet that sticks when reached   |

---

# Things learned

* Positions
* z-index

``` DO CHECK OUT COMMON-MISTAKES.MD ```