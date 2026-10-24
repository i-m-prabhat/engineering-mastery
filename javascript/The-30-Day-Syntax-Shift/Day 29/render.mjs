function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = text;
  if (className) node.className = className;
  return node;
}
export function renderDashboard(state) {
  const user = state.users.find(user=>user.id===state.currentUserId);
  const choices = document.getElementById("profile-select");
  choices.replaceChildren();
  for (const profile of state.users) {
    const option = element("option",profile.name);
    option.value = profile.id;
    choices.appendChild(option);
  }
  choices.value = user.id;
  document.getElementById("profile-name").textContent = user.name;
  document.getElementById("profile-handle").textContent = user.handle;
  document.getElementById("profile-bio").textContent = user.bio;
  document.getElementById("profile-avatar").textContent = user.name.split(" ").map(part=>part[0]).slice(0,2).join("");
  document.getElementById("composer-label").textContent = `Share as ${user.name}`;
  document.getElementById("post-count").textContent = `${state.posts.length} post(s) in this local feed`;
  const feed = document.getElementById("feed");
  feed.replaceChildren();
  if (!state.posts.length) feed.appendChild(element("p","No posts yet."));
  for (const post of state.posts) {
    const author = state.users.find(user=>user.id===post.authorId);
    const card = element("article",undefined,post.authorId===user.id?"post own":"post");
    const heading = element("h3",author.name);
    const handle = element("span",author.handle,"handle");
    const timestamp = element("time",new Date(post.createdAt).toLocaleString());
    timestamp.dateTime = post.createdAt;
    heading.append(" ",handle);
    card.append(heading,timestamp,element("p",post.content,"post-content"));
    feed.appendChild(card);
  }
}
