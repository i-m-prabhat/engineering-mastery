import { products } from "./products.mjs";
export const MAX_QUANTITY = 9;
function productFor(id) {
  const product = products.find(item => item.id === id);
  if (!product) throw new RangeError("Unknown product.");
  return product;
}
function validateQuantity(quantity) {
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > MAX_QUANTITY) {
    throw new RangeError(`Quantity must be an integer from 1 through ${MAX_QUANTITY}.`);
  }
}
export function cartLines(cart) {
  if (!Array.isArray(cart)) throw new TypeError("Cart must be an array.");
  const ids = new Set();
  return cart.map(item => {
    if (!item || ids.has(item.id)) throw new TypeError("Invalid or duplicate cart entry.");
    ids.add(item.id);
    const product = productFor(item.id);
    validateQuantity(item.quantity);
    return { ...product, quantity: item.quantity, linePaise: product.pricePaise * item.quantity };
  });
}
export function addToCart(cart, id) {
  cartLines(cart);
  productFor(id);
  const existing = cart.find(item => item.id === id);
  if (existing) return setQuantity(cart, id, existing.quantity + 1);
  return [...cart, { id, quantity: 1 }];
}
export function setQuantity(cart, id, quantity) {
  cartLines(cart); productFor(id); validateQuantity(quantity);
  if (!cart.some(item => item.id === id)) throw new RangeError("Item is not in the cart.");
  return cart.map(item => item.id === id ? { ...item, quantity } : item);
}
export function removeFromCart(cart, id) {
  cartLines(cart);
  if (!cart.some(item => item.id === id)) throw new RangeError("Item is not in the cart.");
  return cart.filter(item => item.id !== id);
}
export function cartTotals(cart) {
  const lines = cartLines(cart);
  return {
    quantity: lines.reduce((sum, item) => sum + item.quantity, 0),
    subtotalPaise: lines.reduce((sum, item) => sum + item.linePaise, 0),
  };
}
export function createMockOrder(cart, customer, id) {
  const lines = cartLines(cart);
  if (lines.length === 0) throw new RangeError("Add at least one product before checkout.");
  if (!customer || typeof customer.name !== "string" || !customer.name.trim() || customer.name.trim().length > 80 ||
      typeof customer.address !== "string" || !customer.address.trim() || customer.address.trim().length > 240 ||
      customer.payment !== "practice") throw new TypeError("Use a fictional name, address, and practice payment.");
  if (typeof id !== "string" || !id) throw new TypeError("Order ID is required.");
  return {
    id, customer: { name: customer.name.trim(), address: customer.address.trim() },
    items: lines.map(item => ({ id: item.id, name: item.name, quantity: item.quantity,
      unitPaise: item.pricePaise, linePaise: item.linePaise })),
    totalPaise: cartTotals(cart).subtotalPaise, payment: "Practice payment — no charge",
  };
}
