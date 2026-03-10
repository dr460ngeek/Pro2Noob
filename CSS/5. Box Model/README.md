## CSS `box-sizing`

`box-sizing` controls **how width and height of an element are calculated**.

Two main values:

* `content-box` (default)
* `border-box`

---

# 1. `content-box`

**Definition**

The declared `width` and `height` apply **only to the content area**.
Padding and border are **added outside**, increasing the total element size.

**Formula**

```
Total Width  = width + padding-left + padding-right + border-left + border-right
Total Height = height + padding-top + padding-bottom + border-top + border-bottom
```

**Example**

```css
.box {
  width: 300px;
  padding: 50px;
  border: 10px solid black;
  box-sizing: content-box;
}
```

**Calculation**

```
width = 300px

padding-left  = 50px
padding-right = 50px
total padding = 100px

border-left  = 10px
border-right = 10px
total border = 20px
```

```
Total width = 300 + 100 + 20
            = 420px
```

```
Content width = 300px
Total element width = 420px
```

---

# 2. `border-box`

**Definition**

The declared `width` and `height` include **content + padding + border**.
Padding and border **reduce the content area instead of increasing total size**.

**Formula**

```
Content Width  = width − padding-left − padding-right − border-left − border-right
Content Height = height − padding-top − padding-bottom − border-top − border-bottom
```

**Example**

```css
.box {
  width: 300px;
  padding: 50px;
  border: 10px solid black;
  box-sizing: border-box;
}
```

**Calculation**

```
width = 300px

total padding = 100px
total border  = 20px
```

```
Content width = 300 − 100 − 20
              = 180px
```

```
Total element width = 300px
Content width = 180px
```

---

# Quick Comparison

| Property              | `content-box`        | `border-box`               |
| --------------------- | -------------------- | -------------------------- |
| Width applies to      | Content only         | Content + padding + border |
| Padding effect        | Increases total size | Reduces content area       |
| Border effect         | Increases total size | Reduces content area       |
| Layout predictability | Harder               | Easier                     |

---

# Industry Practice

Most projects use a global reset:

```css
* {
  box-sizing: border-box;
}
```

because it makes layout calculations **more predictable**.
