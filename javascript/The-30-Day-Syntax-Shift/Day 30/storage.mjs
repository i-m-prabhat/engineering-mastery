import {createInitialState,validateState} from "./state.mjs";
export const DATA_KEY="syntax-shift-day30:dashboard";
export const SESSION_KEY="syntax-shift-day30:identity";
export function loadState(storage) {
  const raw=storage.getItem(DATA_KEY);
  return raw===null?createInitialState():validateState(JSON.parse(raw));
}
export function saveState(storage,state) {
  storage.setItem(DATA_KEY,JSON.stringify(validateState(state)));
}
export function loadIdentity(storage,state) {
  const id=storage.getItem(SESSION_KEY);
  if(id===null) return null;
  if(state.users.some(user=>user.id===id)) return id;
  storage.removeItem(SESSION_KEY);return null;
}
export function saveIdentity(storage,id) {
  if(id===null) storage.removeItem(SESSION_KEY);
  else storage.setItem(SESSION_KEY,id);
}
