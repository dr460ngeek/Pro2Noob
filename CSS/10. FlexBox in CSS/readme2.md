# Flexbox — Part 2

> **Mental model:**  
> `justify-content` = **arrange items along the main axis**  
> `align-items` = **arrange items along the cross axis**

The easiest way to remember this is:

```text
flex-direction: row

MAIN AXIS    →→→→→
CROSS AXIS
    ↓
```

So with the default `row`:

- `justify-content` → **horizontal**
- `align-items` → **vertical**

If you change to `column`, they effectively swap directions.

---

# 1. `justify-content`

Controls **where/how the items are distributed along the main axis**.

### `flex-start` — default

```css
justify-content: flex-start;
```

```text
|  [1] [2] [3]                 |
   ↑
   start
```

Items stay at the **start** of the main axis.

For `row` → left side.

---

### `flex-end`

```css
justify-content: flex-end;
```

```text
|                 [1] [2] [3] |
                              ↑
                             end
```

Items move to the **end** of the main axis.

For `row` → right side.

---

### `center`

```css
justify-content: center;
```

```text
|          [1] [2] [3]         |
```

Items move to the **center** of the main axis.

---

### `space-between`

```css
justify-content: space-between;
```

```text
| [1]          [2]          [3] |
```

Space is placed **between the items**.

**No space at the outer edges.**

```text
edge [1] ←space→ [2] ←space→ [3] edge
```

---

### `space-around`

```css
justify-content: space-around;
```

```text
|   [1]       [2]       [3]   |
```

Each item gets **equal space around it**.

Therefore, the space at the edges is **half** the space between items.

---

### `space-evenly`

```css
justify-content: space-evenly;
```

```text
|    [1]    [2]    [3]    |
```

All spaces are **exactly equal**.

```text
edge ←space→ [1] ←space→ [2] ←space→ [3] ←space→ edge
```

---

## 🧠 `justify-content` cheat sheet

```text
flex-start      [1][2][3]────────

flex-end        ────────[1][2][3]

center          ───[1][2][3]────

space-between   [1]────[2]────[3]

space-around    ─[1]───[2]───[3]─

space-evenly    ──[1]──[2]──[3]──
```

### Mental shortcut

> **`justify-content` = "How should I distribute my items along the main direction?"**

---

# 2. `align-items`

Controls how items are positioned along the **cross axis**.

With the default:

```css
flex-direction: row;
```

the cross axis is **vertical**.

```text
        cross axis
             ↓
             │
             │
main →→→→→→→│
```

---

### `flex-start`

```css
align-items: flex-start;
```

Items move to the **start of the cross axis**.

For a normal `row`:

```text
┌────────────────────┐
│ [1] [2] [3]        │
│                    │
│                    │
└────────────────────┘
```

Think **top**.

---

### `flex-end`

```css
align-items: flex-end;
```

```text
┌────────────────────┐
│                    │
│                    │
│ [1] [2] [3]        │
└────────────────────┘
```

Think **bottom**.

---

### `center`

```css
align-items: center;
```

```text
┌────────────────────┐
│                    │
│ [1] [2] [3]        │
│                    │
└────────────────────┘
```

Items are centered along the cross axis.

---

### `stretch` — default

```css
align-items: stretch;
```

Items stretch along the **cross axis** to fill the available space.

```text
┌────────────────────┐
│ [1]  [2]  [3]     │
│ [1]  [2]  [3]     │
│ [1]  [2]  [3]     │
└────────────────────┘
```

**Important:** `stretch` doesn't mean "inherit the parent's height."

It means the item's size in the **cross-axis dimension** expands to fill the available space, **provided that dimension isn't already explicitly set**.

---

# 🧠 The Most Important Thing to Remember

Don't memorize:

> `justify = horizontal`  
> `align = vertical`

That's **not always true**.

Instead memorize:

> **`justify-content` → main axis**  
> **`align-items` → cross axis**

Then look at `flex-direction`.

### `row`

```text
justify → horizontal →
align   → vertical   ↓
```

### `column`

```text
align   → horizontal →
justify → vertical   ↓
```

---
## DIFFERENCE BETWEEN align-item AND align-content 
The easiest way to remember it:

> **`align-items` → aligns the items inside a row/column.**  
> **`align-content` → aligns the rows/columns themselves.**

This distinction matters mainly when you have **multiple lines** of flex/grid content.

### 1. `align-items`

Controls how **individual items** are positioned along the **cross axis**.

```css
.container {
    display: flex;
    height: 300px;
    align-items: center;
}
```

Imagine:

```text
┌──────────────────────────┐
│                          │
│     [A] [B] [C]          │  ← items centered vertically
│                          │
└──────────────────────────┘
```

With a normal `flex-direction: row`:

- Main axis → horizontal →
- Cross axis → vertical ↓
- `align-items` controls the items **vertically**.

Common values:

```css
align-items: flex-start;
align-items: center;
align-items: flex-end;
align-items: stretch;
```

---

### 2. `align-content`

This becomes relevant when there are **multiple rows/lines**.

For example:

```css
.container {
    display: flex;
    flex-wrap: wrap;
    height: 500px;
    align-content: center;
}
```

Suppose the items wrap:

```text
┌──────────────────────────┐
│                          │
│                          │
│     [A] [B] [C]          │ ← row 1
│     [D] [E] [F]          │ ← row 2
│                          │
│                          │
└──────────────────────────┘
```

`align-content: center` moves the **whole group of rows** toward the center.

So:

```text
align-items
     ↓
[A] [B] [C]   ← controls items within this row
```

while:

```text
align-content
     ↓
[A] [B] [C]   ← row
[D] [E] [F]   ← row
     ↑
 controls the position of these rows as a group
```

### The critical difference

Think of it like a shelf:

```text
align-items  = position the books ON a shelf

align-content = position the SHELVES inside the cabinet
```

| Property | Controls | Works with |
|---|---|---|
| `align-items` | Items within a line | Single or multiple lines |
| `align-content` | Multiple lines as a group | **Multiple lines only** |

### One important gotcha

If you have:

```css
.container {
    display: flex;
    height: 500px;
}
```

and everything fits on **one row**, `align-content` usually won't visibly do anything.

But:

```css
.container {
    display: flex;
    flex-wrap: wrap;
    height: 500px;
    align-content: center;
}
```

Now if the items create multiple rows, `align-content` can move those rows.

**Mental shortcut:**

> **Items → `align-items`**  
> **Content/lines → `align-content`**