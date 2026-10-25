# Day 28: Project 5 - E-commerce Website

**Status:** Practice store and learning notes added.

## Goal

Render data-driven products, maintain cart state, and simulate checkout. Use fictional checkout data and a dummy payment choice for this exercise.

## Environment

Node.js 22 or newer for the static server and a modern browser. No packages or internet connection are required.

## Tasks / Activities

1. Plan HTML for a product grid and shopping cart.
2. Style the product cards and cart.
3. Define product objects in an array or JSON file with name, price, description, and image URL; no database is required.
4. Generate product cards from that data.
5. Add an Add to Cart button to each card.
6. Display cart item names, prices, and quantities; update on additions.
7. Increase and decrease quantities with explicit bounds.
8. Remove items and update the cart.
9. Create a mock checkout form for fictional name/address and a dummy payment choice.
10. Simulate checkout and show order details and confirmation.

## Feature Requests

- [x] Product listing.
- [x] Add-to-cart behavior.
- [x] Quantity updates and removal.
- [x] Mock checkout and order confirmation.

## Check Your Work

Add the same item twice, update quantities, remove it, and verify totals. Complete a fictional order and inspect the empty-cart state.

## Solution Files

- [index.html](index.html): product grid, shopping cart, mock checkout, and confirmation.
- [products.mjs](products.mjs): fictional catalog and integer-paise prices.
- [cart-model.mjs](cart-model.mjs): validated immutable cart operations and order snapshots.
- [solutions.mjs](solutions.mjs): catalog rendering, cart controls, and mock checkout.
- [styles.css](styles.css): responsive layout and accessible focus states.
- [notebook.svg](notebook.svg), [timer.svg](timer.svg), and [pen.svg](pen.svg): original local product illustrations.
- [server.cjs](server.cjs): dependency-free static server.
- [notes.md](notes.md): data flow, money handling, validation, and review questions.

## Run the App

Use Node.js 22 or newer and a modern browser. No packages or internet connection are required.
From the repository root:

```sh
node "javascript/The-30-Day-Syntax-Shift/Day 28/server.cjs"
```

Open http://127.0.0.1:8128. Ctrl+C stops the server.

Try these flows:

1. Add the notebook twice: one cart row, quantity 2, total ₹498.00.
2. Add the timer: total ₹1,197.00.
3. Remove the timer, then decrease the notebook to quantity 1: total ₹249.00.
4. Increase an item to 9 and check the disabled bound; quantity cannot fall below 1.
5. Enter fictional name/address, choose practice payment, and place the mock order.
6. Confirm receipt details and the empty cart; checkout is disabled until more items are added.

Expected highlights:

- Cards display names, descriptions, local images, and prices.
- Repeated additions update an existing row rather than duplicating it.
- Cart totals derive from trusted catalog prices and integer paise.
- Whitespace-only checkout fields fail validation.
- Confirmation snapshots the order before clearing the cart.
- No real payment, external submission, or persistent customer record exists.

Cart and receipt reset on reload. Tax and shipping are not modeled.
Use invented checkout information only. No additional .gitignore is needed.

[Back to the 30-day roadmap](../README.md)
