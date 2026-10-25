import { createInitialState, validateState } from "./state.mjs";
export const STORAGE_KEY = "syntax-shift-day29:dashboard";
export function loadState(storage) {
  const raw = storage.getItem(STORAGE_KEY);
  return raw === null ? createInitialState() : validateState(JSON.parse(raw));
}
export function saveState(storage, state) {
  storage.setItem(STORAGE_KEY, JSON.stringify(validateState(state)));
}
export function resetState(storage) {
  const state = createInitialState();
  saveState(storage, state); // Replace only this key, and fail if writing is blocked.
  return state;
}
