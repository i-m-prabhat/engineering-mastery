// Named exports: import these by their exported names.
export const DEFAULT_FACTOR = 1;
export function add(first, second) {
  return first + second;
}
export function subtract(first, second) {
  return first - second;
}
export function multiply(first, second = DEFAULT_FACTOR) {
  return first * second;
}
