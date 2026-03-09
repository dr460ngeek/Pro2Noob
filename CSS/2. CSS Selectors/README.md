# CSS Specificity (Beginner Documentation)

## 1. What is CSS Specificity?

**CSS specificity** is the rule browsers use to decide **which CSS style should be applied when multiple rules target the same element.**

If several selectors match the same element, the browser applies the rule with the **highest specificity**.

Think of specificity as a **priority system**.

---

# 2. Specificity Priority Levels

Each type of selector has a different priority weight.

| Selector Type      | Example                 | Specificity Value |
| ------------------ | ----------------------- | ----------------- |
| Inline style       | `<p style="color:red">` | **1000**          |
| ID selector        | `#header`               | **100**           |
| Class selector     | `.menu`                 | **10**            |
| Pseudo-class       | `:hover`, `:focus`      | **10**            |
| Attribute selector | `[type="text"]`         | **10**            |
| Element selector   | `p`, `div`, `h1`        | **1**             |
| Universal selector | `*`                     | **0**             |

Important:

* **Pseudo-classes behave like classes**
* **Universal selector (`*`) has zero specificity**

---

# 3. Specificity Format

Specificity is usually written as:

```
(ID, Class/Pseudo-class, Element)
```

Example:

```
#header .menu p
```

Breakdown:

| Selector  | Type    |
| --------- | ------- |
| `#header` | ID      |
| `.menu`   | class   |
| `p`       | element |

Specificity:

```
(1,1,1)
```

Numeric value:

```
100 + 10 + 1 = 111
```

---

# 4. Example 1 — Simple Conflict

### CSS

```css
p {
  color: blue;
}

.highlight {
  color: red;
}
```

### HTML

```html
<p class="highlight">Hello</p>
```

### Specificity

| Selector     | Specificity |
| ------------ | ----------- |
| `p`          | (0,0,1)     |
| `.highlight` | (0,1,0)     |

Comparison:

```
(0,1,0) > (0,0,1)
```

Result:

```
color: red
```

The **class selector wins**.

---

# 5. Example 2 — ID vs Class

### CSS

```css
.title {
  color: blue;
}

#mainTitle {
  color: green;
}
```

### HTML

```html
<h1 id="mainTitle" class="title">Welcome</h1>
```

### Specificity

| Selector     | Specificity |
| ------------ | ----------- |
| `.title`     | (0,1,0)     |
| `#mainTitle` | (1,0,0)     |

Comparison:

```
(1,0,0) > (0,1,0)
```

Result:

```
color: green
```

The **ID selector wins**.

---

# 6. Example 3 — Pseudo-class

### CSS

```css
button {
  background: gray;
}

button:hover {
  background: blue;
}
```

### Specificity

| Selector       | Specificity |
| -------------- | ----------- |
| `button`       | (0,0,1)     |
| `button:hover` | (0,1,1)     |

Comparison:

```
(0,1,1) > (0,0,1)
```

Result:

When hovering the button:

```
background: blue
```

Pseudo-class adds **extra specificity**.

---

# 7. Example 4 — Multiple Elements

### CSS

```css
div p {
  color: red;
}

section div p {
  color: green;
}
```

### Specificity

| Selector        | Specificity |
| --------------- | ----------- |
| `div p`         | (0,0,2)     |
| `section div p` | (0,0,3)     |

Comparison:

```
(0,0,3) > (0,0,2)
```

Result:

```
color: green
```

The selector with **more elements** wins.

---

# 8. Universal Selector

### CSS

```css
* {
  margin: 0;
}

p {
  margin: 20px;
}
```

### Specificity

| Selector | Specificity |
| -------- | ----------- |
| `*`      | (0,0,0)     |
| `p`      | (0,0,1)     |

Result:

```
margin: 20px
```

The universal selector has **no strength**.

---

# 9. Combinators Do Not Affect Specificity

These symbols only describe relationships between elements:

```
>
+
~
(space)
```

Example:

```css
div > p
```

Specificity counts only:

```
div
p
```

So specificity is:

```
(0,0,2)
```

---

# 10. If Specificity is Equal

When two selectors have **the same specificity**, the **last rule written in CSS wins**.

Example:

```css
p {
  color: red;
}

p {
  color: green;
}
```

Result:

```
green
```

Because it appears **later in the stylesheet**.

---

# 11. Quick Memory Rule

Specificity priority:

```
Inline styles
ID selectors
Class / pseudo-class / attribute selectors
Element selectors
Universal selector
```

Or simply remember:

```
ID > Class > Element
```

---

# 12. Summary

CSS specificity determines which style rule is applied when multiple rules match the same element.

Rules with **higher specificity override rules with lower specificity**.

Priority order:

```
Inline style > ID > Class/Pseudo-class > Element > Universal
```

If specificity is equal, the rule that appears **later in the CSS file wins**.

