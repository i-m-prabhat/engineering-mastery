"use strict";

// Timer-backed promises simulate work without blocking the event loop.
function delay(value, milliseconds = 50) {
  return new Promise(resolve => setTimeout(() => resolve(value), milliseconds));
}
function rejectAfter(message, milliseconds = 50) {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(message)), milliseconds);
  });
}
module.exports = { delay, rejectAfter };
