"use strict";
const { Account } = require("./account");

function runAccountDemo() {
  const first = new Account(100);
  const second = new Account(50);
  console.log("Tasks 9–10 - starting credits:", first.getBalance());
  console.log("After deposit 25:", first.deposit(25));
  console.log("After withdrawal 40:", first.withdraw(40));
  console.log("Second account unchanged:", second.getBalance());
  try {
    first.withdraw(1000);
  } catch (error) {
    console.log("Overdraft blocked:", error.name, "-", error.message);
  }
  console.log("Balance after failed withdrawal:", first.getBalance());
  console.log("Public own keys:", Object.keys(first)); // #balance is not an ordinary key.
}
module.exports = { runAccountDemo };
if (require.main === module) runAccountDemo();
