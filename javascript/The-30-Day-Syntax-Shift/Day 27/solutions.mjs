import { parseTasks, serializeTasks, addTask, updateTask, toggleTask, deleteTask, selectTasks } from "./task-model.mjs";

const storageKey = "syntax-shift-day27:tasks";
const form = document.getElementById("task-form");
const title = document.getElementById("title");
const description = document.getElementById("description");
const filter = document.getElementById("filter");
const list = document.getElementById("task-list");
const status = document.getElementById("status");
const reset = document.getElementById("reset-storage");
let tasks = [];
let editingId = null;
let blocked = false;

function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = text;
  if (className) node.className = className;
  return node;
}
function finishEdit() {
  editingId = null;
  form.reset();
  document.getElementById("form-heading").textContent = "Add a task";
  document.getElementById("save-task").textContent = "Add task";
  document.getElementById("cancel-edit").hidden = true;
}
function render() {
  const active = tasks.filter(task => !task.completed).length;
  document.getElementById("counts").textContent = `${active} remaining · ${tasks.length} total`;
  const visible = selectTasks(tasks, filter.value);
  document.getElementById("empty").textContent = visible.length ? "" :
    tasks.length ? `No ${filter.value} tasks to show.` : "Your list is empty. Add your first task.";
  list.replaceChildren();
  for (const task of visible) {
    const item = element("li", undefined, task.completed ? "task completed" : "task");
    const toggleLabel = element("label", undefined, "toggle-label");
    const checkbox = element("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.setAttribute("aria-label", `Mark ${task.title} ${task.completed ? "active" : "completed"}`);
    checkbox.addEventListener("change", () => {
      if (commit(toggleTask(tasks, task.id), "Task status saved.")) {
        const replacement = [...list.querySelectorAll('input[type="checkbox"]')].find(input => input.dataset.taskId === task.id);
        (replacement || filter).focus();
      }
    });
    checkbox.dataset.taskId = task.id;
    toggleLabel.append(checkbox, element("span", task.title, "task-title"));
    item.append(toggleLabel);
    if (task.description) item.append(element("p", task.description, "task-description"));
    item.append(element("p", task.completed ? "Completed" : "Active", "task-state"));
    const actions = element("div", undefined, "row");
    const edit = element("button", "Edit", "secondary");
    edit.type = "button"; edit.setAttribute("aria-label", `Edit ${task.title}`);
    edit.addEventListener("click", () => {
      editingId = task.id;
      title.value = task.title; description.value = task.description;
      document.getElementById("form-heading").textContent = "Edit task";
      document.getElementById("save-task").textContent = "Save changes";
      document.getElementById("cancel-edit").hidden = false;
      status.textContent = "Editing task. Save changes or cancel.";
      title.focus();
    });
    const remove = element("button", "Delete", "secondary");
    remove.type = "button"; remove.setAttribute("aria-label", `Delete ${task.title}`);
    remove.addEventListener("click", () => {
      if (commit(deleteTask(tasks, task.id), "Task deleted.")) {
        if (editingId === task.id) finishEdit();
        title.focus();
      }
    });
    actions.append(edit, remove); item.append(actions); list.appendChild(item);
  }
}
function commit(nextTasks, message) {
  if (blocked) return false;
  try {
    // Save first: a failed write does not silently commit an unsaved edit.
    localStorage.setItem(storageKey, serializeTasks(nextTasks));
    tasks = nextTasks;
    render();
    status.textContent = message;
    return true;
  } catch (error) {
    status.textContent = `Change not saved (${error.name}). Check browser storage and retry.`;
    render();
    return false;
  }
}
form.addEventListener("submit", event => {
  event.preventDefault();
  try {
    const next = editingId
      ? updateTask(tasks, editingId, title.value, description.value)
      : addTask(tasks, { id: crypto.randomUUID(), title: title.value, description: description.value });
    if (commit(next, editingId ? "Task changes saved." : "Task added.")) finishEdit();
  } catch {
    status.textContent = "Use a nonblank title up to 100 characters and a description up to 600 characters.";
  }
});
document.getElementById("cancel-edit").addEventListener("click", () => {
  finishEdit(); status.textContent = "Edit cancelled."; title.focus();
});
filter.addEventListener("change", render);
reset.addEventListener("click", () => {
  try {
    localStorage.removeItem(storageKey);
    tasks = []; blocked = false; reset.hidden = true;
    document.getElementById("task-fields").disabled = false;
    finishEdit(); render(); status.textContent = "Invalid saved task data reset. You can start a new list.";
  } catch (error) { status.textContent = `Reset failed (${error.name}). Check browser storage permissions.`; }
});
try {
  tasks = parseTasks(localStorage.getItem(storageKey));
} catch (error) {
  blocked = true; reset.hidden = false;
  document.getElementById("task-fields").disabled = true;
  status.textContent = `Saved tasks could not be loaded (${error.name}). Existing data is preserved; reset it explicitly to start over.`;
}
render();
