# CSS Animations — Part 1

> **Mental model:**
> **Transition = "animate a change."**
> **Animation = "run a predefined sequence of changes."**

---

# 1. `@keyframes`

Defines **what an animation does**.

```css
@keyframes orbit {
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
}
```

Think of it as creating an **animation recipe**.

```text
@keyframes
    ↓
"Start here → change → end here"
```

You can use percentages for multiple stages:

```css
@keyframes shiftTheBox {

    0% {
        transform: translate(0, 0);
    }

    50% {
        transform: translate(200px, 200px);
    }

    100% {
        transform: translate(0, 0);
    }
}
```

### Mental model

> **`@keyframes` = "What should happen during the animation?"**

---

# 2. `animation-name`

Specifies **which `@keyframes` animation to use**.

```css
.box {
    animation-name: orbit;
}
```

Matches:

```css
@keyframes orbit {
    ...
}
```

### Mental model

> **`animation-name` = "Which animation recipe should I use?"**

---

# 3. `animation-duration`

Controls **how long one complete animation cycle takes**.

```css
animation-duration: 2s;
```

```text
0s ─────────────── 2s
     one cycle
```

### Mental model

> **`duration` = "How long does one cycle take?"**

---

# 4. `animation-iteration-count`

Controls **how many times the animation runs**.

```css
animation-iteration-count: 3;
```

Run 3 times.

```css
animation-iteration-count: infinite;
```

Run forever.

### Mental model

> **`iteration-count` = "How many times?"**

---

# 5. `animation-delay`

Adds a **delay before the animation starts**.

```css
animation-delay: 1s;
```

```text
0s ── 1s ───────── 3s
     ↑              ↑
   delay        animation
                 starts
```

### Mental model

> **`delay` = "Wait this long before starting."**

---

# 6. `animation-direction`

Controls the **direction in which animation cycles run**.

```css
animation-direction: normal;
```

Important values:

```css
normal
reverse
alternate
alternate-reverse
```

### Mental model

```text
normal
→ → →

reverse
← ← ←

alternate
→ → →  ← ← ←  → → →

alternate-reverse
← ← ←  → → →  ← ← ←
```

### Easiest way to remember

> **`alternate` = forward, backward, forward, backward...**

---

# 7. `animation-timing-function`

Controls **how the speed changes during the animation**.

```css
animation-timing-function: ease-in-out;
```

Common values:

```css
linear
ease
ease-in
ease-out
ease-in-out
```

### Mental model

> **Timing function = "How does the animation move between points?"**

```text
linear     → constant speed
ease-in    → starts slow
ease-out   → ends slow
ease-in-out → slow → fast → slow
```

### Important distinction

`duration` controls **how long**.

`timing-function` controls **how the movement behaves during that time**.

---

# 8. `animation-fill-mode`

Controls what styles are applied **before/after the animation**.

Important values:

```css
none
forwards
backwards
both
```

### `none`

```css
animation-fill-mode: none;
```

No animation styles are retained before/after the animation.

### `forwards`

```css
animation-fill-mode: forwards;
```

Keeps the **final keyframe's styles** after the animation ends.

```text
Animation → → → → END
                     ↓
              final state stays
```

### `backwards`

Applies the animation's **initial keyframe during the delay**.

### `both`

Combines:

```text
backwards + forwards
```

### Mental model

> **`fill-mode` = "What should happen to the animation's styles outside the actual animation?"**

---

# 9. `animation` — Shorthand

All the major animation properties can be combined:

```css
animation: orbit 4s linear 0s infinite normal;
```

The useful mental order is:

```text
name
duration
timing-function
delay
iteration-count
direction
fill-mode
```

Example:

```css
animation: orbit 4s linear 0s infinite normal forwards;
```

Equivalent to:

```css
animation-name: orbit;
animation-duration: 4s;
animation-timing-function: linear;
animation-delay: 0s;
animation-iteration-count: infinite;
animation-direction: normal;
animation-fill-mode: forwards;
```

### Mental model

> **`animation` = configure the entire animation in one line.**

---

# 10. Multiple Keyframe Stages

You don't have to use only `from` and `to`.

You can use percentages:

```css
@keyframes shiftTheBox {

    0% {
        transform: translate(0, 0);
        background-color: blue;
    }

    25% {
        transform: translate(200px, 0);
        background-color: red;
    }

    50% {
        transform: translate(200px, 200px);
        background-color: yellow;
    }

    75% {
        transform: translate(0, 200px);
        background-color: green;
    }

    100% {
        transform: translate(0, 0);
        background-color: blue;
    }
}
```

### Mental model

Think of it as **checkpoints**:

```text
0%     25%      50%      75%      100%
 ↓       ↓        ↓        ↓         ↓
Start → Point → Point → Point →   End
```

The browser automatically handles the movement between those checkpoints.

---

# 11. `0%, 100%`

You can combine percentages when they have the same styles:

```css
@keyframes shiftTheBox {

    0%, 100% {
        transform: translate(0, 0);
    }

    50% {
        transform: translate(200px, 200px);
    }
}
```

Means:

> Apply the same styles at both **0% and 100%**.

---

# 12. `nth-child()` + Animation

Your loader uses:

```css
.dot:nth-child(even) {
    animation-delay: 0.2s;
}
```

This selects the **even-numbered `.dot` elements**.

```text
dot 1 → normal
dot 2 → 0.2s delay
dot 3 → normal
dot 4 → 0.2s delay
```

This is a simple way to create **staggered animations**.

---

# 🧠 Transition vs Animation

This distinction is important.

### Transition

```css
.box {
    transition: 0.5s;
}

.box:hover {
    transform: scale(1.5);
}
```

You have:

```text
Normal state
     ↓
   change
     ↓
Hover state
```

> **Transition = animate a change caused by something.**

---

### Animation

```css
@keyframes bounce {
    ...
}

.box {
    animation: bounce 2s infinite;
}
```

You define the entire sequence:

```text
Start → Stage → Stage → End
  ↑                    ↓
  └────── repeat ──────┘
```

> **Animation = run a predefined sequence.**

---

# ⚡ TL;DR

| Property                    | Question it answers               |
| --------------------------- | --------------------------------- |
| `@keyframes`                | **What happens?**                 |
| `animation-name`            | **Which animation?**              |
| `animation-duration`        | **How long?**                     |
| `animation-iteration-count` | **How many times?**               |
| `animation-delay`           | **When does it start?**           |
| `animation-direction`       | **Which direction?**              |
| `animation-timing-function` | **How does the speed behave?**    |
| `animation-fill-mode`       | **What happens before/after?**    |
| `animation`                 | **All of the above in shorthand** |

### The one mental model to keep

```text
@keyframes
    ↓
WHAT happens
    ↓
animation-name
    ↓
WHICH animation
    ↓
duration → HOW LONG
delay → WHEN
iteration-count → HOW MANY TIMES
direction → WHICH WAY
timing-function → HOW IT MOVES
fill-mode → WHAT HAPPENS BEFORE/AFTER
```

One correction from your code: `transform: rotate(0)` is valid because `0` is dimensionless for rotation, but `rotate(0deg)` is clearer and better for learning.
