# CSS Variables — Part 1

> **Mental model:** CSS variables are **named values** that you store once and reuse throughout your CSS.

Instead of:

```css
button {
    background: #2563eb;
}

header {
    background: #2563eb;
}

.card {
    border-color: #2563eb;
}
```

store the value once:

```css
:root {
    --primary-color: #2563eb;
}
```

Then reuse it:

```css
button {
    background: var(--primary-color);
}

header {
    background: var(--primary-color);
}

.card {
    border-color: var(--primary-color);
}
```

---

# 1. Creating a CSS Variable

CSS variables start with `--`.

```css
:root {
    --primary-color: blue;
    --spacing: 20px;
    --font-size: 18px;
}
```

### Mental model

```text
--primary-color
      ↓
"Store blue under this name."
```

---

# 2. Using a CSS Variable

Use:

```css
var(--variable-name)
```

Example:

```css
button {
    background-color: var(--primary-color);
}
```

### Mental model

> `--name` = **store the value**
> `var(--name)` = **use the value**

---

# 3. Why Use Variables?

Without variables:

```css
h1 {
    color: #2563eb;
}

button {
    background-color: #2563eb;
}

a {
    color: #2563eb;
}
```

If you want to change the blue, you have to find and change it everywhere.

With variables:

```css
:root {
    --primary-color: #2563eb;
}
```

Change it once:

```css
:root {
    --primary-color: red;
}
```

Everything using it changes.

### Mental model

> **One source of truth.**

---

# 4. `:root`

`:root` represents the **top-level element of the document**.

For normal HTML:

```css
:root {
    --primary-color: blue;
}
```

Variables defined here are generally available throughout the page.

### Common pattern

```css
:root {
    --primary-color: #2563eb;
    --background-color: white;
    --text-color: black;
}
```

Think:

> **`:root` = global CSS variables**

---

# 5. Variables Can Store Almost Any CSS Value

```css
:root {
    --primary-color: #2563eb;
    --text-color: #222;
    --spacing: 20px;
    --radius: 10px;
    --font-size: 1rem;
}
```

Then:

```css
.card {
    color: var(--text-color);
    padding: var(--spacing);
    border-radius: var(--radius);
}
```

---

# 6. Fallback Values

You can provide a backup value:

```css
color: var(--text-color, black);
```

Meaning:

> Use `--text-color`; if it isn't available, use `black`.

```css
color: var(--text-color, black);
```

### Mental model

```text
Is --text-color available?
        ↓
    YES → use it
    NO  → use black
```

---

# 🌙 Dark Mode with CSS Variables

This is where CSS variables become extremely useful.

Instead of changing every component individually, define your **light theme** and **dark theme** values.

---

# 7. Light Theme

```css
:root {
    --background-color: white;
    --text-color: #222;
    --card-color: #f5f5f5;
}
```

Then use them:

```css
body {
    background-color: var(--background-color);
    color: var(--text-color);
}

.card {
    background-color: var(--card-color);
}
```

---

# 8. Dark Theme

Use a class:

```css
.dark {
    --background-color: #121212;
    --text-color: white;
    --card-color: #1e1e1e;
}
```

Now:

```html
<body class="dark">
```

automatically changes every property using those variables.

```text
LIGHT
:root
 ↓
--background-color → white
--text-color       → black
--card-color       → light gray


DARK
.dark
 ↓
--background-color → #121212
--text-color       → white
--card-color       → #1e1e1e
```

### The important trick

You **don't change the components**.

```css
.card {
    background-color: var(--card-color);
    color: var(--text-color);
}
```

The variables change underneath them.

---

# 9. Complete Dark Mode Example

### HTML

```html
<body class="dark">

    <div class="card">
        <h1>Hello</h1>
        <p>This is a card.</p>
        <button>Click me</button>
    </div>

</body>
```

### CSS

```css
:root {
    /* Light theme */
    --background-color: #ffffff;
    --text-color: #222222;
    --card-color: #f5f5f5;
    --primary-color: #2563eb;
}

.dark {
    /* Dark theme */
    --background-color: #121212;
    --text-color: #ffffff;
    --card-color: #1e1e1e;
    --primary-color: #60a5fa;
}

body {
    background-color: var(--background-color);
    color: var(--text-color);
}

.card {
    background-color: var(--card-color);
}

button {
    background-color: var(--primary-color);
    color: white;
}
```

### Mental model

```text
              CSS VARIABLES
                   │
          ┌────────┴────────┐
          ↓                 ↓
       LIGHT              DARK
       :root              .dark
          │                 │
          ↓                 ↓
     different values → same CSS
                            │
                            ↓
                    Components change
                    automatically
```

---

# 10. Switching Dark Mode with JavaScript

CSS handles the **theme**. JavaScript can handle the **switch**.

### HTML

```html
<button id="theme-btn">Toggle Theme</button>
```

### CSS

```css
:root {
    --background-color: white;
    --text-color: black;
}

.dark {
    --background-color: #121212;
    --text-color: white;
}

body {
    background-color: var(--background-color);
    color: var(--text-color);
}
```

### JavaScript

```js
const button = document.querySelector("#theme-btn");

button.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
```

### What's actually happening?

```text
Click button
     ↓
JavaScript adds/removes .dark
     ↓
CSS variables change
     ↓
Components using var(...)
change automatically
```

---

# 🧠 Most Important Mental Model

Don't think:

> "Dark mode changes the background of every element."

Think:

> **"Dark mode changes the values of my design variables."**

```text
                    VARIABLES
                       │
        ┌──────────────┼──────────────┐
        ↓              ↓              ↓
    background       text           border
        │              │              │
        └──────────────┼──────────────┘
                       ↓
                  COMPONENTS
```

That's why CSS variables are excellent for **themes**.

---

# ⚡ TL;DR

| Syntax                   | Meaning                              |
| ------------------------ | ------------------------------------ |
| `--color: blue`          | Create variable                      |
| `var(--color)`           | Use variable                         |
| `:root`                  | Common place for global variables    |
| `var(--x, fallback)`     | Use fallback if variable unavailable |
| `.dark { --color: ... }` | Override variables for dark theme    |

### The pattern worth memorizing

```css
:root {
    --bg: white;
    --text: black;
}

.dark {
    --bg: #121212;
    --text: white;
}

body {
    background: var(--bg);
    color: var(--text);
}
```

**Variables = store values → `var()` = retrieve values → override variables = easy theming.**
