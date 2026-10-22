export function validateTask(task) {
  if (!task || typeof task !== "object" || Array.isArray(task) ||
      typeof task.id !== "string" || !task.id || task.id.length > 100 ||
      typeof task.title !== "string" || !task.title.trim() || task.title.trim().length > 100 ||
      typeof task.description !== "string" || task.description.length > 600 ||
      typeof task.completed !== "boolean") throw new TypeError("Invalid task record.");
  return { id: task.id, title: task.title.trim(), description: task.description.trim(), completed: task.completed };
}
export function parseTasks(raw) {
  if (raw === null) return [];
  const saved = JSON.parse(raw);
  if (!saved || saved.version !== 1 || !Array.isArray(saved.tasks)) throw new TypeError("Unsupported saved task data.");
  const tasks = saved.tasks.map(validateTask);
  if (new Set(tasks.map(task => task.id)).size !== tasks.length) throw new TypeError("Duplicate saved task IDs.");
  return tasks;
}
export function serializeTasks(tasks) {
  return JSON.stringify({ version: 1, tasks: tasks.map(validateTask) });
}
export function addTask(tasks, input) {
  const task = validateTask({ ...input, completed: false });
  if (tasks.some(item => item.id === task.id)) throw new RangeError("Task ID already exists.");
  return [...tasks, task];
}
function change(tasks, id, apply) {
  if (!tasks.some(task => task.id === id)) throw new RangeError("Task no longer exists.");
  return tasks.map(task => task.id === id ? validateTask(apply(task)) : task);
}
export function updateTask(tasks, id, title, description) {
  return change(tasks, id, task => ({ ...task, title, description }));
}
export function toggleTask(tasks, id) {
  return change(tasks, id, task => ({ ...task, completed: !task.completed }));
}
export function deleteTask(tasks, id) {
  if (!tasks.some(task => task.id === id)) throw new RangeError("Task no longer exists.");
  return tasks.filter(task => task.id !== id);
}
export function selectTasks(tasks, filter) {
  if (!["all", "active", "completed"].includes(filter)) throw new RangeError("Unknown task filter.");
  return tasks.filter(task => filter === "all" || (filter === "completed" ? task.completed : !task.completed));
}
