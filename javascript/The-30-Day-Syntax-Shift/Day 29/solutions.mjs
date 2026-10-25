import { createInitialState, selectUser, addPost } from "./state.mjs";
import { loadState, saveState, resetState } from "./storage.mjs";
import { renderDashboard } from "./render.mjs";
const status = document.getElementById("status");
const profileSelect = document.getElementById("profile-select");
const postInput = document.getElementById("post-content");
const form = document.getElementById("post-form");
const resetButton = document.getElementById("reset-data");
let state;
let blocked = false;

function controls() {
  profileSelect.disabled = blocked;
  document.getElementById("composer-fields").disabled = blocked;
  resetButton.hidden = !blocked;
}
function commit(next,message) {
  try {
    if (blocked) return false;
    saveState(localStorage,next);
    state = next;
    renderDashboard(state);
    status.textContent = message;
    return true;
  } catch(error) {
    status.textContent = `Change not saved (${error.name}). Check browser storage and retry.`;
    return false;
  }
}
profileSelect.addEventListener("change",()=>{
  const nextId = profileSelect.value;
  if (!commit(selectUser(state,nextId),"Demo profile selected and saved.")) profileSelect.value=state.currentUserId;
});
form.addEventListener("submit",event=>{
  event.preventDefault();
  try {
    const next = addPost(state,postInput.value,crypto.randomUUID(),new Date().toISOString());
    if(commit(next,"Post published to this local demo feed.")) {
      form.reset(); postInput.focus();
      document.getElementById("character-count").textContent="0 / 500";
    }
  } catch(error) { status.textContent=error.message; }
});
postInput.addEventListener("input",()=> {
  document.getElementById("character-count").textContent=`${postInput.value.length} / 500`;
});
resetButton.addEventListener("click",()=>{
  try {
    state=resetState(localStorage);blocked=false;controls();renderDashboard(state);
    status.textContent="Demo data reset to the initial profiles and feed.";
  } catch(error) { status.textContent=`Reset failed (${error.name}). Check browser storage permissions.`; }
});
try {
  state=loadState(localStorage);
  saveState(localStorage,state);
} catch(error) {
  state=createInitialState();blocked=true;
  status.textContent=`Saved data could not be loaded (${error.name}). Showing a read-only seed preview; existing data is preserved until explicit reset.`;
}
controls();renderDashboard(state);
