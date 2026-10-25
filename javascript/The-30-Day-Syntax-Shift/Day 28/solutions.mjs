import { products } from "./products.mjs";
import { addToCart, setQuantity, removeFromCart, cartLines, cartTotals, createMockOrder } from "./cart-model.mjs";
const formatter = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" });
const money = paise => formatter.format(paise / 100);
const status = document.getElementById("status");
const list = document.getElementById("cart-items");
const checkout = document.getElementById("checkout-form");
let cart = [];

function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = text;
  if (className) node.className = className;
  return node;
}
function button(text, label, action, id) {
  const node = element("button", text);
  node.type = "button";
  node.setAttribute("aria-label", label);
  node.dataset.action = action;
  node.dataset.id = id;
  return node;
}
// Tasks 3–4: render catalog objects rather than duplicating product HTML.
const grid = document.getElementById("products");
for (const product of products) {
  const card = element("article", undefined, "product");
  const image = element("img");
  image.src = product.image; image.alt = `Illustration of ${product.name}`;
  image.width = 240; image.height = 180;
  const add = button("Add to Cart", `Add ${product.name} to cart`, "add", product.id);
  add.addEventListener("click", () => {
    try {
      cart = addToCart(cart, product.id);
      renderCart();
      status.textContent = `${product.name} added to cart.`;
    } catch (error) { status.textContent = error.message; }
  });
  card.append(image, element("h3", product.name), element("p", product.description),
    element("p", money(product.pricePaise), "price"), add);
  grid.appendChild(card);
}
// Tasks 5–8: quantity, removal, counts, and totals derive from current cart state.
function renderCart() {
  const lines = cartLines(cart);
  const totals = cartTotals(cart);
  document.getElementById("cart-count").textContent = `${totals.quantity} item(s) · ${lines.length} product(s)`;
  document.getElementById("cart-empty").hidden = lines.length !== 0;
  document.getElementById("subtotal").textContent = `Total: ${money(totals.subtotalPaise)}`;
  document.getElementById("checkout-fields").disabled = lines.length === 0;
  list.replaceChildren();
  for (const item of lines) {
    const row = element("li", undefined, "cart-item");
    row.append(element("strong", item.name), element("p", `${money(item.pricePaise)} each · ${money(item.linePaise)} total`));
    const controls = element("div", undefined, "quantity");
    const minus = button("−", `Decrease ${item.name} quantity`, "minus", item.id);
    minus.disabled = item.quantity === 1;
    const plus = button("+", `Increase ${item.name} quantity`, "plus", item.id);
    plus.disabled = item.quantity === 9;
    const count = element("span", `Quantity: ${item.quantity}`);
    controls.append(minus, count, plus, button("Remove", `Remove ${item.name}`, "remove", item.id));
    row.appendChild(controls); list.appendChild(row);
  }
}
list.addEventListener("click", event => {
  if (!(event.target instanceof Element)) return;
  const control = event.target.closest("button[data-action]");
  if (!control || !list.contains(control)) return;
  const { id, action } = control.dataset;
  try {
    const current = cart.find(item => item.id === id);
    if (!current) return;
    cart = action === "remove" ? removeFromCart(cart, id)
      : setQuantity(cart, id, current.quantity + (action === "plus" ? 1 : -1));
    renderCart();
    status.textContent = action === "remove" ? "Product removed." : "Quantity updated.";
    const replacement = [...list.querySelectorAll("button")].find(node =>
      node.dataset.id === id && node.dataset.action === action && !node.disabled);
    (replacement || document.getElementById("cart-heading")).focus();
  } catch (error) { status.textContent = error.message; }
});
// Tasks 9–10: simulate an order locally; never submit actual payment details.
checkout.addEventListener("submit", event => {
  event.preventDefault();
  try {
    const order = createMockOrder(cart, {
      name: document.getElementById("customer-name").value,
      address: document.getElementById("address").value,
      payment: document.getElementById("payment").value,
    }, crypto.randomUUID());
    const details = document.getElementById("order-details");
    details.replaceChildren(element("p", `Mock order ${order.id}`),
      element("p", `For ${order.customer.name} · ${order.customer.address}`));
    const items = element("ul");
    for (const item of order.items) items.appendChild(element("li", `${item.name} × ${item.quantity}: ${money(item.linePaise)}`));
    details.append(items, element("p", `Order total: ${money(order.totalPaise)}`, "total"),
      element("p", order.payment));
    document.getElementById("confirmation").hidden = false;
    cart = []; checkout.reset(); renderCart();
    status.textContent = "Mock order confirmed. No charge was made; your cart is now empty.";
    document.getElementById("order-heading").setAttribute("tabindex", "-1");
    document.getElementById("order-heading").focus();
  } catch (error) { status.textContent = error.message; }
});
renderCart();
