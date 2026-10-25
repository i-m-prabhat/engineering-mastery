"use strict";
const joinForm = document.getElementById("join-form");
const username = document.getElementById("username");
const joinButton = document.getElementById("join");
const leaveButton = document.getElementById("leave");
const messageForm = document.getElementById("message-form");
const messageInput = document.getElementById("message");
const sendButton = document.getElementById("send");
const status = document.getElementById("status");
const online = document.getElementById("online");
const messages = document.getElementById("messages");
let socket;
let ownId;
let connectionTimer;

function controls(joined, connecting = false) {
  username.disabled = joined || connecting;
  joinButton.disabled = joined || connecting;
  leaveButton.disabled = !joined && !connecting;
  messageInput.disabled = !joined;
  sendButton.disabled = !joined;
}
function addMessage(data) {
  const item = document.createElement("li");
  if (data.type === "system") {
    item.className = "system";
    item.textContent = data.message;
  } else {
    item.className = data.senderId === ownId ? "message own" : "message";
    const label = document.createElement("strong");
    label.textContent = data.senderId === ownId ? `${data.name} (you)` : data.name;
    const time = document.createElement("time");
    time.dateTime = data.time;
    time.textContent = new Date(data.time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const text = document.createElement("p");
    text.textContent = data.text; // Treat chat text as text, never HTML.
    item.append(label, time, text);
  }
  messages.appendChild(item);
  while (messages.children.length > 200) messages.firstElementChild.remove();
  messages.scrollTop = messages.scrollHeight;
}
joinForm.addEventListener("submit", event => {
  event.preventDefault();
  if (socket && socket.readyState < WebSocket.CLOSING) return;
  const name = username.value.trim();
  if (name.length < 2 || name.length > 24) {
    status.textContent = "Enter a display name with 2–24 characters."; return;
  }
  ownId = undefined;
  const connection = new WebSocket(`${location.protocol === "https:" ? "wss:" : "ws:"}//${location.host}/chat`);
  socket = connection;
  controls(false, true);
  status.textContent = "Connecting…";
  connectionTimer = setTimeout(() => {
    if (socket === connection && !ownId) {
      connection.close();
      status.textContent = "Connection timed out. Try joining again.";
    }
  }, 8000);
  connection.addEventListener("open", () => {
    if (socket !== connection) return;
    connection.send(JSON.stringify({ type: "join", name }));
    status.textContent = "Connected; joining room…";
  });
  connection.addEventListener("message", event => {
    if (socket !== connection) return;
    let data;
    try { data = JSON.parse(event.data); }
    catch { status.textContent = "Received an unreadable server message."; return; }
    console.log("Received message:", data);
    if (data.type === "joined") {
      clearTimeout(connectionTimer);
      ownId = data.id;
      controls(true);
      status.textContent = `Connected as ${data.name}.`;
      messageInput.focus();
    } else if (data.type === "presence") {
      online.textContent = `Online: ${data.count}`;
    } else if (data.type === "error") {
      status.textContent = data.message;
      if (!ownId) connection.close();
    } else if (data.type === "chat" || data.type === "system") addMessage(data);
  });
  connection.addEventListener("error", () => {
    if (socket === connection) status.textContent = "Connection error. Check the local server and rejoin.";
  });
  connection.addEventListener("close", () => {
    if (socket !== connection) return;
    clearTimeout(connectionTimer);
    ownId = undefined;
    controls(false);
    online.textContent = "Online: 0";
    status.textContent = "Disconnected. You can join again.";
  });
});
messageForm.addEventListener("submit", event => {
  event.preventDefault();
  const text = messageInput.value.trim();
  if (!text) { status.textContent = "Enter a nonblank message."; return; }
  if (!ownId || socket?.readyState !== WebSocket.OPEN) {
    status.textContent = "Join the chat before sending."; return;
  }
  socket.send(JSON.stringify({ type: "chat", text }));
  messageInput.value = "";
  status.textContent = "Message sent.";
  messageInput.focus();
});
leaveButton.addEventListener("click", () => socket?.close(1000, "Left room"));
