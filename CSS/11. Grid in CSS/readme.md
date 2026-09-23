# CSS Grid — Part 1

> **Mental model:**  
> **Grid = rows + columns.**  
> The **parent creates the grid**, while **children can be placed inside specific grid cells/lines**.

---

# 1. `display: grid`

```css
.container {
    display: grid;
}
```

Turns the element into a **Grid container**.

```text
┌───────┬───────┬───────┐
│   1   │   2   │   3   │
├───────┼───────┼───────┤
│   4   │   5   │   6   │
└───────┴───────┴───────┘
```

### Mental model

> **`display: grid` = "Create a grid for my children."**

---

# 2. `grid-template-columns`

Controls the **number and size of columns**.

```css
grid-template-columns: 200px 200px 200px;
```

Creates **3 columns**, each `200px` wide.

```text
      200px     200px     200px
       ↓          ↓          ↓
┌──────────┬──────────┬──────────┐
│          │          │          │
└──────────┴──────────┴──────────┘
```

### Mental model

> **`grid-template-columns` = "How many columns, and how wide?"**

You can use different units:

```css
grid-template-columns: 200px 1fr 2fr;
```

---

# 3. `grid-template-rows`

Controls the **number and size of rows**.

```css
grid-template-rows: 100px 200px 250px;
```

Creates 3 explicitly sized rows.

```text
┌──────────────┐
│    100px     │
├──────────────┤
│    200px     │
├──────────────┤
│    250px     │
└──────────────┘
```

### Mental model

> **`grid-template-rows` = "How many rows, and how tall?"**

---

# 4. `grid-auto-rows`

Controls the size of **automatically created rows**.

```css
grid-auto-rows: 150px;
```

### Mental model

> **`grid-template-rows` = rows I explicitly define**  
> **`grid-auto-rows` = rows Grid creates automatically**

Example:

```css
grid-template-rows: 100px 200px;
grid-auto-rows: 150px;
```

If more rows are needed:

```text
Row 1 → 100px
Row 2 → 200px
Row 3 → 150px  ← automatic
Row 4 → 150px  ← automatic
```

---

# 5. `gap`

Creates space **between grid items**.

```css
gap: 10px;
```

You can also control them separately:

```css
row-gap: 18px;
column-gap: 6px;
```

### Mental model

> **`gap` = space between grid cells/items**

```text
      column gap
        ↓
┌──────┐  ┌──────┐
│      │  │      │
└──────┘  └──────┘
    ↑
 row gap is between rows
```

### Shorthand

```css
gap: 18px 6px;
```

means:

```text
18px → row-gap
 6px → column-gap
```

---

# 6. `justify-content`

Controls the **entire grid's position along the horizontal axis** when there is extra space.

```css
justify-content: center;
```

```text
┌───────────────────────────────┐
│     ┌────┬────┬────┐          │
│     │    │    │    │          │
│     └────┴────┴────┘          │
└───────────────────────────────┘
             ↑
        entire grid
```

### Mental model

> **`justify-content` = "Where should the whole grid sit?"**

This is different from `justify-items`, which controls the **items inside their cells**.

---

# 7. `align-content`

Controls the **entire grid's position along the vertical axis** when there is extra space.

```css
align-content: center;
```

```text
┌───────────────────────────────┐
│                               │
│     ┌────┬────┬────┐          │
│     │    │    │    │          │
│     └────┴────┴────┘          │
│                               │
└───────────────────────────────┘
```

### Mental model

> **`align-content` = "Where should the whole grid sit vertically?"**

---

# Grid Child Properties

These are applied to **individual grid items**.

---

# 8. `justify-self`

Controls an item's position **horizontally inside its own grid cell**.

```css
.box {
    justify-self: center;
}
```

Common values:

```css
justify-self: start;
justify-self: center;
justify-self: end;
justify-self: stretch;
```

Default:

```css
justify-self: stretch;
```

### Mental model

> **`justify-self` = "Where should THIS item sit horizontally inside its cell?"**

---

# 9. `align-self`

Controls an item's position **vertically inside its own grid cell**.

```css
.box {
    align-self: center;
}
```

Common values:

```css
align-self: start;
align-self: center;
align-self: end;
align-self: stretch;
```

Default:

```css
align-self: stretch;
```

### Mental model

> **`align-self` = "Where should THIS item sit vertically inside its cell?"**

---

# 10. Grid Lines & `grid-column`

This is one of the **most important Grid concepts**.

Grid doesn't number cells directly. It numbers the **grid lines**.

For 3 columns:

```text
       1         2         3         4
       ↓         ↓         ↓         ↓
       │         │         │         │
       ├─────────┼─────────┼─────────┤
       │   C1    │   C2    │   C3    │
       ├─────────┼─────────┼─────────┤
```

Notice:

> **3 columns → 4 grid lines**

Hence the `n + 1` rule.

---

## `grid-column`

```css
grid-column: 1 / 4;
```

Means:

> Start at grid line **1**, end at grid line **4**.

So the item spans all 3 columns.

```text
1         2         3         4
│─────────│─────────│─────────│
└──────────── ITEM ────────────┘
```

### Longhand

```css
grid-column-start: 1;
grid-column-end: 4;
```

### Shorthand

```css
grid-column: 1 / 4;
```

---

# 11. `grid-row`

Same concept, but for rows.

```css
grid-row: 1 / 4;
```

Means:

> Start at row line 1 and end at row line 4.

### Longhand

```css
grid-row-start: 1;
grid-row-end: 4;
```

### Shorthand

```css
grid-row: 1 / 4;
```

---

# 12. `span`

`span` lets you say **how many rows/columns to occupy**, instead of calculating the ending line yourself.

```css
grid-column: 1 / span 3;
```

Means:

> Start at line 1 and **occupy 3 columns**.

```text
1         2         3         4
│─────────│─────────│─────────│
└──────────── 3 columns ──────┘
```

Similarly:

```css
grid-row: 1 / span 3;
```

means the item occupies **3 rows**.

### Mental model

> **`span` = "Start here and occupy N tracks."**

This is often easier to understand than manually calculating the ending line.

---

# 13. `grid-area`

Shorthand for:

```text
grid-row-start
grid-column-start
grid-row-end
grid-column-end
```

Syntax:

```css
grid-area: row-start / column-start / row-end / column-end;
```

Example:

```css
grid-area: 1 / 2 / 3 / 4;
```

Means:

```text
row start    = 1
column start = 2
row end      = 3
column end   = 4
```

### Mental model

> **`grid-area` = "Define all four boundaries of this item in one line."**

---

# 🧠 The Grid Mental Model

Think of Grid as a **building**:

```text
        COLUMN LINES
        1    2    3    4
        ↓    ↓    ↓    ↓
     ┌────┬────┬────┐
  1  │    │    │    │
     ├────┼────┼────┤
  2  │    │    │    │
     ├────┼────┼────┤
  3  │    │    │    │
     └────┴────┴────┘
        ↑    ↑    ↑
       cells / tracks
```

### Parent controls the grid

```text
display: grid
       ↓
columns
rows
gaps
whole-grid positioning
```

### Child controls its location

```text
grid-column
grid-row
grid-area
justify-self
align-self
```

---

# ⚡ TL;DR Cheat Sheet

| Property | Meaning |
|---|---|
| `display: grid` | Turn on Grid |
| `grid-template-columns` | Define columns |
| `grid-template-rows` | Define rows |
| `grid-auto-rows` | Size automatically created rows |
| `gap` | Space between items |
| `justify-content` | Position **whole grid** horizontally |
| `align-content` | Position **whole grid** vertically |
| `justify-self` | Position **one item** horizontally in its cell |
| `align-self` | Position **one item** vertically in its cell |
| `grid-column` | Place item across columns |
| `grid-row` | Place item across rows |
| `span` | Occupy N rows/columns |
| `grid-area` | Set row + column boundaries at once |

### The 4 levels to remember

```text
GRID CONTAINER
│
├── Structure → grid-template-columns / rows
├── Spacing   → gap
├── Position  → justify-content / align-content
│
└── GRID ITEM
    ├── Position inside cell → justify-self / align-self
    └── Location in grid     → grid-column / grid-row / grid-area
```

**One correction to your class notes:** `justify-content` and `align-content` aren't "Flexbox properties that also happen to work in Grid." They're alignment properties from CSS Box Alignment that both Flexbox and Grid use, although their behavior depends on the layout model.