# Day 28 Notes: E-commerce Practice

## 1. Catalog, cart, and order are different data

The catalog defines fictional products and trusted prices. The cart stores only product IDs and quantities. The mock order captures a snapshot of item names, quantities, unit prices, line totals, and fictional customer details.

Keeping prices in the catalog avoids duplicating inconsistent values across cart entries.

## 2. Integer price units

Prices use whole paise, where 100 paise equals one Indian rupee. Multiply integers for line totals and sum them for the cart total. Convert to rupees only when formatting with Intl.NumberFormat.

This avoids ordinary fractional-rupee addition such as 0.1 + 0.2. The small catalog and quantity bound also keep totals safely within Number's integer range.

Tax and shipping are not modeled. The displayed practice total is the subtotal, not a real-world checkout quote.

## 3. Add versus update

Adding an existing product increases its quantity instead of creating a duplicate row. Adding a new product creates a quantity-one entry.

Quantities must be integers 1–9. At the lower bound, decrease is disabled; removal is a separate action. At the upper bound, increase is disabled, and repeated Add to Cart produces an explicit limit error.

The model enforces bounds independently from the UI.

## 4. Immutable cart operations

Each operation returns a new array, replacing only the affected entry. Invalid IDs, duplicates, and invalid quantities are rejected.

Rendering derives names, prices, quantities, and totals from the current state. There is no separate cached subtotal to become stale.

Deleting the last item reveals the empty state and disables the checkout fieldset.

## 5. Mock checkout

The form uses a fictional name, fictional address, and one dummy payment option. It never collects card details, sends an order, or makes a charge.

createMockOrder validates the cart and customer data, then builds an independent snapshot. Only after that succeeds does the UI clear the cart and show confirmation.

A previous receipt remains labeled Last mock order if shopping continues. It is a demonstration, not a persisted order record.

## 6. IDs and rendering

Product IDs connect catalog cards to cart operations. A fresh UUID identifies the mock receipt.

Product, customer, and receipt strings use textContent. Local SVG illustrations keep the practice page independent from external image services.

The cart listener delegates button clicks and then restores focus to an equivalent control when possible. At a quantity bound or after removal, it focuses the cart heading.

## 7. State lifetime

Cart and confirmation are in memory only. Reload resets them. No local storage, server database, account, or network API is used.

The Node server serves static lesson files only. The form prevents default submission, so fictional checkout details stay in the page.

## 8. Practice calculations

Notebook: ₹249.00. Timer: ₹699.00. Pen: ₹149.00.

Two notebooks cost ₹498.00. Add one timer and the total becomes ₹1,197.00. Remove the timer and the total returns to ₹498.00. Decrease the notebooks to one and it becomes ₹249.00.

These fixed examples make it easy to compare model calculations with rendered totals.

## 9. Validation and accessibility

Whitespace-only customer names/addresses are rejected even when browser required validation passes. The model bounds field lengths too.

Buttons identify both action and product, quantity bounds are visible in disabled controls, the status region reports changes, and the confirmation heading receives focus after checkout.

Responsive layouts and reduced-motion support keep the practice flow usable across screen sizes and preferences.

## Quick review

1. Why store IDs and quantities instead of full product objects in the cart?
2. Why calculate money using integer paise?
3. How does adding an existing product differ from adding a new one?
4. What happens at quantity 1 and quantity 9?
5. Why capture the receipt before clearing the cart?
6. Is any actual payment made or customer data saved?
7. What happens on reload?

Add duplicates, change quantities, remove an item, and finish a fictional order.
