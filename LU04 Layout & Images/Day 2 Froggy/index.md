---
marp: true
theme: default
class: invert
paginate: true
_header: HTML Flexbox Essentials
---

# Flexbox: The Modern CSS Layout

## Made by: Luke Matheis

---

## What is Flexbox?

**Flexbox** is a one-dimensional CSS layout model designed to distribute space among items in an interface and enable
powerful alignment capabilities.

```css
.container {
    display: flex; /* Enables flex for all direct children */
}
````

-----

## Why is Flexbox Useful?

Flexbox solves common layout headaches elegantly.

* Simple Alignment : Align items easily along both the main and cross axes.
    * Perfect for vertical centering, which was historically difficult in CSS.
* Dynamic Space Distribution: Control how extra space is distributed among items
* Order Independence: Change the visual order of items *without* changing the source HTML order.
* Responsiveness: Items can automatically grow or shrink to fit the available space.

-----

## Quick Reference: Container

| Property          | Function                            | Values (Examples)         |
|:------------------|:------------------------------------|:--------------------------|
| `display`         | Activates Flexbox                   | `flex` or `inline-flex`   |
| `flex-direction`  | Sets the Main Axis                  | `row`, `column`           |
| `justify-content` | Space distribution on **Main Axis** | `center`, `space-between` |
| `align-items`     | Alignment on **Cross Axis**         | `center`, `stretch`       |
| `flex-wrap`       | Enables multi-line layout           | `wrap`, `nowrap`          |

-----

## Example Code: Centering a Box

```html

<div class="container">
    <div class="box">I am centered!</div>
</div>
```

```css
.container {
    /* 1. Make it a flex container */
    display: flex;
    /* 2. Center along the Main Axis (horizontal) */
    justify-content: center;
    /* 3. Center along the Cross Axis (vertical) */
    align-items: center;
    /* Give the container dimensions */
    height: 100vh;
}
```

-----

## Now get to work

- https://flexbox.malven.co/

---