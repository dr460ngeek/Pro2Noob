
# CSS `display` Types — Mental Models

The `display` property controls **how an element behaves in the layout flow**.

The four foundational values every developer must understand:

```
block
inline
inline-block
none
```

The easiest way to understand them is with **mental models**.

---

# 1. `display: block`

## Mental Model

Think of a **block element as a full-width row or section**.

It behaves like a **rectangle that claims an entire horizontal line**.

Nothing else can sit beside it unless layout systems like flex/grid are used.

```
|--------------------------|
|        block element     |
|--------------------------|
```

Every block element starts on a **new line**.

---

## Behaviour

* Takes **full available width**
* Starts on **a new line**
* Allows **width and height**
* Allows **all margins and padding**

---

## Example

```css
div {
  display: block;
}
```

```html
<div>Box 1</div>
<div>Box 2</div>
```

Result:

```
Box 1
Box 2
```

They stack vertically.

---

## Examples of Block Elements

```
div
p
h1–h6
section
article
header
footer
ul
ol
li
```

---

# 2. `display: inline`

## Mental Model

Think of an **inline element as a word inside a sentence**.

It flows **within text**, not as a structural layout box.

```
This is a sentence with a [span] inside it.
```

Inline elements **do not break the line**.

---

## Behaviour

* Does **not start a new line**
* Width is determined by **content**
* **width and height are ignored**
* **vertical margins ignored**
* horizontal margins work

---

## Example

```css
span {
  display: inline;
}
```

```html
Hello <span>world</span> today
```

Result:

```
Hello world today
```

Everything stays on the same line.

---

## Examples of Inline Elements

```
span
a
strong
em
label
small
```

---

# 3. `display: inline-block`

## Mental Model

Think of an **inline-block element as a word that behaves like a box**.

It **flows inline with text** but **keeps block-like box properties**.

```
[word][word][word]
```

Each word is actually a **box with width and height**.

---

## Behaviour

* Stays **in the same line**
* Allows **width and height**
* Allows **padding and margins**
* Multiple elements can sit **side by side**

---

## Example

```css
.box {
  display: inline-block;
  width: 100px;
  height: 100px;
}
```

```html
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
```

Result:

```
[box][box][box]
```

Boxes appear **next to each other**.

---

## When Developers Use It

Before Flexbox existed, `inline-block` was widely used for:

* navigation menus
* image grids
* horizontal layouts

Today it's used mainly for **small UI elements**.

---

# 4. `display: none`

## Mental Model

Think of `display: none` as **removing the element from reality**.

The browser behaves **as if the element never existed**.

```
Element removed from layout
```

No space is reserved.

---

## Behaviour

* Element **not rendered**
* Element **takes no space**
* Removed from **layout flow**
* Hidden from **screen visually**

---

## Example

```css
.hidden {
  display: none;
}
```

```html
<div>Box 1</div>
<div class="hidden">Box 2</div>
<div>Box 3</div>
```

Result:

```
Box 1
Box 3
```

Box 2 disappears completely.

---

# Visual Comparison

```
BLOCK

[Box]
[Box]
[Box]

INLINE

text text text text

INLINE-BLOCK

[Box][Box][Box]

NONE

(removed completely)
```

---

# Quick Behaviour Table

| Property        | block | inline          | inline-block | none |
| --------------- | ----- | --------------- | ------------ | ---- |
| New line        | ✔     | ✖               | ✖            | —    |
| width/height    | ✔     | ✖               | ✔            | —    |
| margin          | ✔     | horizontal only | ✔            | —    |
| padding         | ✔     | partial         | ✔            | —    |
| layout presence | ✔     | ✔               | ✔            | ✖    |

---

# One-Line Mental Summary

```
block        → full-width layout section
inline       → behaves like a word in text
inline-block → box that flows inline
none         → element removed from layout
```
