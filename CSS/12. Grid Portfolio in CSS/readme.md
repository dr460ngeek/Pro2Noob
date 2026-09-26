Combination of Grid and Flexbox used.
---
# 1 Learning:
---
No. **`justify-content` and `align-items` do not work meaningfully with every `display` value.**

The important thing is to think about **which layout system the element is using**.

### The simple rule

| `display`     | `justify-content`           | `align-items` |
| ------------- | --------------------------- | ------------- |
| `flex`        | ✅                           | ✅             |
| `inline-flex` | ✅                           | ✅             |
| `grid`        | ✅                           | ✅             |
| `inline-grid` | ✅                           | ✅             |
| `block`       | ⚠️ Usually no useful effect | ❌             |
| `inline`      | ❌                           | ❌             |

### Mental model

These properties are **alignment properties**, but their behavior depends on the layout model.

```text
display: flex
       ↓
Flexbox alignment
       ↓
justify-content / align-items


display: grid
       ↓
Grid alignment
       ↓
justify-content / align-items
```

With normal block layout:

```css
.container {
    display: block;
    justify-content: center;
}
```

`justify-content` won't magically center the block's children. **It isn't a general-purpose centering property.**

### One important correction

Don't memorize:

> `justify-content = horizontal`
> `align-items = vertical`

Instead:

> **`justify-content` works along the relevant main/inline axis depending on the layout model.**
> **`align-items` works along the relevant cross/block axis.**

For example, in Flexbox:

```css
flex-direction: row;
```

```text
justify-content → →
align-items     ↓
```

In Grid, there isn't the same Flexbox "main axis/cross axis" concept:

```text
justify-content → horizontal
align-content   → vertical

justify-items   → horizontal inside each cell
align-items     → vertical inside each cell
```

So **don't treat Flexbox and Grid alignment terminology as identical**, even though they share many properties.

---
# 2 Learning:
---
Yes. This is one of those CSS topics where memorizing property names will screw you later. The clean way is to understand **two questions**:

1. **Am I moving the whole group or an individual item?**
2. **Am I moving it along which axis?**

---

# `content` vs `items` in CSS

## The core mental model

Imagine a **grid/container with several boxes**:

```text
┌─────────────────────────────────────┐
│                                     │
│   ┌────┐  ┌────┐  ┌────┐           │
│   │  1 │  │  2 │  │  3 │           │
│   └────┘  └────┘  └────┘           │
│                                     │
└─────────────────────────────────────┘
```

There are two things you can move:

### `content`

Moves the **whole group/tracks**.

```text
"Where should the entire collection of items/tracks sit?"
```

### `items`

Moves the **items inside their individual space/cells**.

```text
"Where should each item sit inside its own space?"
```

That's the fundamental difference.

---

# 1. `justify-content`

> **Moves the entire content/group along the inline/main horizontal direction.**

Think:

```text
┌─────────────────────────────────────┐
│                                     │
│       [1] [2] [3]                   │
│                                     │
└─────────────────────────────────────┘
```

With:

```css
.container {
    display: grid;
    justify-content: center;
}
```

The **whole grid** moves to the center.

```text
┌─────────────────────────────────────┐
│                                     │
│        [1][2][3]                    │
│                                     │
└─────────────────────────────────────┘
```

### Mental model

> **`justify-content` → "Where should the whole content sit?"**

---

# 2. `justify-items`

> **Moves each individual item horizontally inside its own grid area.**

Example:

```css
.container {
    display: grid;
    justify-items: center;
}
```

Imagine:

```text
Grid:

┌──────────┬──────────┬──────────┐
│    1     │    2     │    3     │
│          │          │          │
└──────────┴──────────┴──────────┘
```

`justify-items: center` makes each item center **inside its own cell**:

```text
┌──────────┬──────────┬──────────┐
│    [1]   │    [2]   │    [3]   │
│          │          │          │
└──────────┴──────────┴──────────┘
```

### Mental model

> **`justify-items` → "Where should each item sit inside its own space?"**

---

# 3. `align-content`

Same concept as `justify-content`, but vertically.

> **Moves the entire content/grid along the vertical direction.**

```css
.container {
    display: grid;
    align-content: center;
}
```

```text
Before:

┌─────────────────────┐
│ [1] [2] [3]         │
│ [4] [5] [6]         │
│                     │
│                     │
└─────────────────────┘
```

After:

```text
┌─────────────────────┐
│                     │
│ [1] [2] [3]         │
│ [4] [5] [6]         │
│                     │
└─────────────────────┘
```

### Mental model

> **`align-content` → "Where should the whole content sit vertically?"**

---

# 4. `align-items`

Moves each individual item **vertically inside its own grid area**.

```css
.container {
    display: grid;
    align-items: center;
}
```

```text
┌──────────┬──────────┬──────────┐
│          │          │          │
│   [1]    │   [2]    │   [3]    │
│          │          │          │
└──────────┴──────────┴──────────┘
```

Each item is centered **inside its own cell**.

### Mental model

> **`align-items` → "Where should each item sit vertically inside its space?"**

---

# Put all four together

This is the part you should actually memorize:

```text
                 WHAT ARE YOU MOVING?
                 ┌──────────┴──────────┐
                 │                     │
              CONTENT                ITEMS
                 │                     │
          Whole grid/group       Individual items
                 │                     │
          ┌──────┴──────┐       ┌──────┴──────┐
          │             │       │             │
       justify        align  justify        align
          │             │       │             │
       horizontal     vertical horizontal    vertical
```

Therefore:

| Property          | What moves?            | Direction  |
| ----------------- | ---------------------- | ---------- |
| `justify-content` | **Whole content/grid** | Horizontal |
| `align-content`   | **Whole content/grid** | Vertical   |
| `justify-items`   | **Individual items**   | Horizontal |
| `align-items`     | **Individual items**   | Vertical   |

---

# A visual example

Suppose we have:

```css
.container {
    display: grid;
    grid-template-columns: 200px 200px;
    grid-template-rows: 150px 150px;

    width: 600px;
    height: 500px;
}
```

The grid itself is smaller than the container:

```text
Container
┌─────────────────────────────────────────┐
│                                         │
│    ┌─────────┬─────────┐                │
│    │    1    │    2    │                │
│    ├─────────┼─────────┤                │
│    │    3    │    4    │                │
│    └─────────┴─────────┘                │
│                                         │
└─────────────────────────────────────────┘
```

Now:

```css
justify-content: center;
align-content: center;
```

moves the **whole grid**:

```text
┌─────────────────────────────────────────┐
│                                         │
│         ┌─────────┬─────────┐           │
│         │    1    │    2    │           │
│         ├─────────┼─────────┤           │
│         │    3    │    4    │           │
│         └─────────┴─────────┘           │
│                                         │
└─────────────────────────────────────────┘
```

But:

```css
justify-items: center;
align-items: center;
```

keeps the **grid where it is**, while moving the individual items inside their cells:

```text
┌─────────────────────────────────────────┐
│                                         │
│    ┌─────────┬─────────┐                │
│    │    1    │    2    │                │
│    │         │         │                │
│    ├─────────┼─────────┤                │
│    │    3    │    4    │                │
│    │         │         │                │
│    └─────────┴─────────┘                │
│                                         │
└─────────────────────────────────────────┘
```

The **grid doesn't move**. The items move **within their cells**.

---

# `content` vs `items`: The easiest possible memory trick

Think of a **parking lot**.

```text
┌─────────────────────────────────┐
│                                 │
│   🚗        🚗        🚗        │
│                                 │
└─────────────────────────────────┘
```

### `content`

> **Move the entire parking arrangement.**

```text
justify-content
align-content
```

### `items`

> **Move each car inside its parking spot.**

```text
justify-items
align-items
```

---

# One more important thing: `self`

You'll encounter:

```css
justify-self
align-self
```

These are essentially:

> **"I want THIS particular item to be different."**

So:

```text
justify-items
    ↓
ALL items horizontally

justify-self
    ↓
ONE item horizontally
```

and:

```text
align-items
    ↓
ALL items vertically

align-self
    ↓
ONE item vertically
```

---

# Final cheat sheet

```text
CONTENT = WHOLE GROUP
ITEMS   = ALL INDIVIDUAL ITEMS
SELF    = ONE INDIVIDUAL ITEM
```

Then:

```text
JUSTIFY = horizontal/inline direction
ALIGN   = vertical/block direction
```

So:

```text
justify-content → whole group horizontally
align-content   → whole group vertically

justify-items   → every item horizontally
align-items     → every item vertically

justify-self    → one item horizontally
align-self      → one item vertically
```

**One caveat:** this horizontal/vertical shortcut is mainly for the common left-to-right writing mode. The more technically correct rule is that `justify-*` and `align-*` are based on the CSS layout model and writing mode. For normal English web development, the table above is the practical mental model you want.
