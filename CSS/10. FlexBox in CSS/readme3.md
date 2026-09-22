# Flexbox — Part 3

> These properties control **individual flex items**, unlike `justify-content` and `align-items`, which control the container.

---

# 1. `order`

Controls the **visual order** of flex items.

```css
.item3 {
    order: -1;
}
```

Example:

```text
HTML order:
[1] [2] [3]

order:
1 → 0
2 → 0
3 → -1

Result:
[3] [1] [2]
```

### Mental model

> **`order` = "Which item should come first?"**

Default:

```css
order: 0;
```

Smaller `order` values appear first.

```text
-2 → -1 → 0 → 1 → 2
```

### Important

`order` changes **visual order**, not the actual HTML/DOM order.

**Use case:** Changing the visual arrangement of items at different screen sizes.

### Shorthand?

**No.** `order` has no shorthand.

---

# 2. `flex-grow`

Controls how much an item can **grow when there is extra space**.

```css
.item {
    flex-grow: 1;
}
```

Example:

```text
Container has extra space:

[  Item 1  ][  Item 2  ]
       ↑
   extra space
```

If:

```css
.item1 {
    flex-grow: 1;
}

.item2 {
    flex-grow: 1;
}
```

The extra space is divided equally:

```text
[     Item 1     ][     Item 2     ]
```

If:

```css
.item1 { flex-grow: 1; }
.item2 { flex-grow: 2; }
```

Item 2 gets **twice as much of the available extra space** as Item 1.

```text
[   Item 1   ][      Item 2      ]
      1              2
```

### Mental model

> **`flex-grow` = "If there's leftover space, how much of it do I want?"**

Default:

```css
flex-grow: 0;
```

So items **do not grow by default**.

### Shorthand?

`flex-grow` is part of the `flex` shorthand:

```css
flex: <grow> <shrink> <basis>;
```

---

# 3. `flex-shrink`

Controls how much an item can **shrink when there isn't enough space**.

```css
.item {
    flex-shrink: 1;
}
```

Default:

```css
flex-shrink: 1;
```

So flex items **can shrink by default**.

Example:

```text
Container too small:

[ Item 1 ][ Item 2 ][ Item 3 ]
       ↓
Items need to shrink
```

If:

```css
.item1 { flex-shrink: 1; }
.item2 { flex-shrink: 2; }
```

Item 2 has a **higher tendency to absorb the shrinking**.

### Mental model

> **`flex-shrink` = "If there isn't enough space, how much am I willing to shrink?"**

`0` means:

```css
flex-shrink: 0;
```

**Don't shrink.**

### Shorthand?

Again, it's part of:

```css
flex: <grow> <shrink> <basis>;
```

---

# 4. `flex-basis`

Defines an item's **initial/main-axis size before free space is distributed**.

```css
.item {
    flex-basis: 200px;
}
```

For:

```css
flex-direction: row;
```

`flex-basis` roughly determines the item's **initial width**.

```text
Container
┌──────────────────────────────────┐
│ [     200px     ] [    ...    ] │
└──────────────────────────────────┘
```

For:

```css
flex-direction: column;
```

it roughly determines the item's **initial height**.

### Mental model

> **`flex-basis` = "How big should I start?"**

Common values:

```css
flex-basis: 200px;
flex-basis: 30%;
flex-basis: auto;
```

### Important distinction

```css
width: 200px;
```

sets the item's **width**.

```css
flex-basis: 200px;
```

sets its **initial size along the main axis**.

Therefore:

```text
row    → basis affects width
column → basis affects height
```

### Shorthand?

Yes. `flex-basis` is part of:

```css
flex: <grow> <shrink> <basis>;
```

---

# 5. `flex` — The Important Shorthand

The three properties:

```css
flex-grow
flex-shrink
flex-basis
```

have a shorthand:

```css
flex: grow shrink basis;
```

Example:

```css
.item {
    flex: 1 1 200px;
}
```

Equivalent to:

```css
.item {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 200px;
}
```

---

## Common shorthand forms

### `flex: 1`

```css
flex: 1;
```

Commonly used when you want items to **share available space**.

Conceptually:

```text
[      1      ][      1      ][      1      ]
```

---

### `flex: 0 0 200px`

```css
flex: 0 0 200px;
```

Means:

```text
grow   → 0     Don't grow
shrink → 0     Don't shrink
basis  → 200px Start at 200px
```

So the item is effectively kept at **200px** along the main axis.

---

### `flex: 1 1 auto`

```css
flex: 1 1 auto;
```

Means:

```text
grow   → 1
shrink → 1
basis  → auto
```

Useful when items should be flexible while considering their existing size/content.

---

# 🧠 The Four Properties Together

Think of an item going through this process:

```text
             FLEX ITEM
                 │
                 ▼
        ┌─────────────────┐
        │     ORDER       │
        │ "Where do I go?"│
        └────────┬────────┘
                 ▼
        ┌─────────────────┐
        │  FLEX-BASIS     │
        │ "How big do I   │
        │  start?"        │
        └────────┬────────┘
                 ▼
          Is there extra
              space?
           ↙           ↘
        YES             NO
         ↓               ↓
    FLEX-GROW       FLEX-SHRINK
    "How much        "How much
     do I grow?"      do I shrink?"
```

## TL;DR

| Property | Simple meaning | Default |
|---|---|---|
| `order` | **Where do I appear?** | `0` |
| `flex-basis` | **How big do I start?** | `auto` |
| `flex-grow` | **How much can I grow?** | `0` |
| `flex-shrink` | **How much can I shrink?** | `1` |
| `flex` | Shorthand for **grow + shrink + basis** | `0 1 auto` |

### One line to remember

> **`order` = position → `basis` = starting size → `grow` = extra space → `shrink` = shortage of space.**

---
---
---

# Flexbox — Part 4

## `align-self`

`align-self` lets you **override `align-items` for one specific flex item**.

### Mental model

> **`align-items` = "How should ALL my children align?"**  
> **`align-self` = "How should THIS child align?"**

---

### Example

```css
.container {
    display: flex;
    align-items: center;
}

.item3 {
    align-self: flex-start;
}
```

Result:

```text
┌─────────────────────────────┐
│ [3]                         │  ← item3 overrides
│                             │
│      [1]  [2]               │  ← others follow align-items
│                             │
└─────────────────────────────┘
```

`align-items: center` applies to everyone, but `item3` says:

> "No, put me at the start."

---

## Values

It accepts the same common alignment values:

```css
align-self: flex-start;
align-self: flex-end;
align-self: center;
align-self: stretch;
```

Also:

```css
align-self: auto;
```

`auto` means **use the parent's `align-items` value**.

### Quick mental model

```text
align-items
     ↓
ALL items
     ↓
[1] [2] [3] [4]

align-self
     ↓
ONE specific item
     ↓
[1] [2] [3] ← this one can be different
```

### Important

`align-self` works on the **flex item**, not the flex container.

```css
/* Container */
.container {
    display: flex;
    align-items: center;
}

/* Individual item */
.item {
    align-self: flex-end;
}
```

### Shorthand?

**No.** `align-self` has no shorthand.

---

### TL;DR

> **`align-items` → align ALL items**  
> **`align-self` → override alignment for ONE item**