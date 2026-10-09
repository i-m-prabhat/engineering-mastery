"use strict";

// Whole practice credits avoid fractional-currency rounding in this exercise.
function validateCredits(amount, allowZero = false) {
  if (!Number.isSafeInteger(amount) || amount < (allowZero ? 0 : 1)) {
    throw new RangeError(allowZero
      ? "credits must be a nonnegative safe integer"
      : "credits must be a positive safe integer");
  }
}

class Account {
  #balance;

  constructor(openingBalance = 0) {
    validateCredits(openingBalance, true);
    this.#balance = openingBalance;
  }

  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    validateCredits(amount);
    if (!Number.isSafeInteger(this.#balance + amount)) {
      throw new RangeError("balance would exceed the safe integer range");
    }
    this.#balance += amount;
    return this.#balance;
  }

  withdraw(amount) {
    validateCredits(amount);
    if (amount > this.#balance) throw new RangeError("insufficient credits");
    this.#balance -= amount;
    return this.#balance;
  }
}

module.exports = { Account };
