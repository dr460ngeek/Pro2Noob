# Flexbox — Part 1

> **Mental model:** `display: flex` turns an element into a **flex container**. Its direct children become **flex items**, and Flexbox controls how those items are **placed, ordered, wrapped, and spaced**.

---

## 1. `display: flex`

```css
.container {
    display: flex;
}
```

**Meaning:** Turns the container into a Flexbox.

```text
Container
┌──────────────────────────────┐
│  Item 1   Item 2   Item 3    │
└──────────────────────────────┘
```

### Mental model

Think of Flexbox as putting children on a **flexible track** where you control their direction and spacing.

---

# 2. `flex-direction`

Controls the **main direction** in which flex items are placed.

### `row` — default

```css
flex-direction: row;
```

```text
→ Item 1  Item 2  Item 3
```

**Mental model:** Go **left → right**.

---

### `row-reverse`

```css
flex-direction: row-reverse;
```

```text
Item 3  Item 2  Item 1 ←
```

**Mental model:** Go **right → left**.

---

### `column`

```css
flex-direction: column;
```

```text
Item 1
  ↓
Item 2
  ↓
Item 3
```

**Mental model:** Go **top → bottom**.

---

### `column-reverse`

```css
flex-direction: column-reverse;
```

```text
Item 3
  ↑
Item 2
  ↑
Item 1
```

**Mental model:** Go **bottom → top**.

### Quick memory

| Value            | Direction |
| ---------------- | --------- |
| `row`            | →         |
| `row-reverse`    | ←         |
| `column`         | ↓         |
| `column-reverse` | ↑         |

**Use case:** Whenever you need to change the basic layout direction of your items.

---

# 3. `flex-wrap`

Normally, Flexbox tries to keep items on **one line**.

```css
flex-wrap: wrap;
```

allows items to move to the **next line** when there isn't enough space.

```text
┌─────────────────────┐
│ Item 1  Item 2      │
│ Item 3  Item 4      │
└─────────────────────┘
```

### `wrap-reverse`

```css
flex-wrap: wrap-reverse;
```

Same idea, but new lines are created in the **opposite cross-axis direction**.

### Mental model

```text
wrap         → overflow goes to the next line
wrap-reverse → overflow goes to the opposite line
```

**Use case:** Responsive layouts where items should move onto additional lines instead of overflowing.

---

# 4. `flex-flow`

A shorthand for:

```css
flex-direction
flex-wrap
```

Instead of:

```css
flex-direction: row;
flex-wrap: wrap;
```

you can write:

```css
flex-flow: row wrap;
```

### Syntax

```css
flex-flow: <direction> <wrap>;
```

For example:

```css
flex-flow: row wrap;
```

> **Important:** The order is normally written as **direction first, wrap second**.

So prefer:

```css
flex-flow: row wrap;
```

rather than:

```css
flex-flow: wrap row;
```

Both values can be parsed, but `row wrap` is the conventional and clearer order.

---

# 5. `gap`

Creates space **between flex items**.

```css
gap: 10px;
```

```text
Item 1 ← 10px → Item 2 ← 10px → Item 3
```

### Mental model

> `gap` = **space between children**

It doesn't add spacing around the outer edge of the container.

---

## `row-gap`

Controls the gap between **rows**.

```css
row-gap: 10px;
```

```text
Item 1  Item 2

   10px

Item 3  Item 4
```

---

## `column-gap`

Controls the gap between **columns**.

```css
column-gap: 10px;
```

```text
Item 1   10px   Item 2
```

---

## `gap` shorthand

Instead of:

```css
row-gap: 10px;
column-gap: 10px;
```

use:

```css
gap: 10px;
```

Or different values:

```css
gap: 20px 10px;
```

Meaning:

```text
20px → row gap
10px → column gap
```

---

# 🧠 Part 1 — The Whole Mental Model

Think of Flexbox as a **box containing objects on a track**:

```text
display: flex
      ↓
"Put my children on a flexible track."

flex-direction
      ↓
"Which direction does the track go?"

flex-wrap
      ↓
"What happens when there isn't enough room?"

flex-flow
      ↓
"Set direction + wrapping together."

gap
      ↓
"How much space should be between the items?"
```

### The essential cheat sheet

```css
.container {
    display: flex;

    flex-direction: row;   /* direction */
    flex-wrap: wrap;       /* allow new lines */

    /* direction + wrap */
    flex-flow: row wrap;

    gap: 10px;             /* space between items */
}
```

**If you're learning Flexbox from scratch, this is enough for Part 1.** The next important concepts are `justify-content`, `align-items`, and `align-content`—that's where Flexbox's axis model really starts to matter.
