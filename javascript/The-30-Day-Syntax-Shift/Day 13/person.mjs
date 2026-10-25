// Export an object containing properties and a receiver-based method.
export const person = {
  name: "Prabhat",
  age: 20,
  greet() {
    return `Hello, ${this.name}!`;
  },
};
