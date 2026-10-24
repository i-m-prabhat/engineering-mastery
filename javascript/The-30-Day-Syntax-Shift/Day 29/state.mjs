export function createInitialState() {
  return {
    version: 1, currentUserId: "alex",
    users: [
      { id: "alex", name: "Alex Demo", handle: "@alex", bio: "Learning a little JavaScript every day." },
      { id: "sam", name: "Sam Demo", handle: "@sam", bio: "Building small projects and sharing progress." },
    ],
    posts: [
      { id: "seed-1", authorId: "alex", content: "A useful dashboard begins with clear state and small modules.", createdAt: "2026-10-24T09:00:00.000Z" },
      { id: "seed-2", authorId: "sam", content: "Today's practice: connect each post to its author using a stable ID.", createdAt: "2026-10-24T08:00:00.000Z" },
    ],
  };
}
function text(value, maximum) {
  return typeof value === "string" && value.trim().length > 0 && value.length <= maximum;
}
export function validateState(value) {
  if (!value || value.version !== 1 || !Array.isArray(value.users) || !value.users.length || !Array.isArray(value.posts)) {
    throw new TypeError("Invalid dashboard data.");
  }
  const users = value.users.map(user => {
    if (!user || !text(user.id,100) || !text(user.name,60) || !text(user.handle,40) ||
        typeof user.bio !== "string" || user.bio.length > 200) throw new TypeError("Invalid demo profile.");
    return { id:user.id, name:user.name, handle:user.handle, bio:user.bio };
  });
  const ids = new Set(users.map(user=>user.id));
  if (ids.size !== users.length || !ids.has(value.currentUserId)) throw new TypeError("Invalid selected profile.");
  const posts = value.posts.map(post => {
    if (!post || !text(post.id,100) || !ids.has(post.authorId) || !text(post.content,500) ||
        typeof post.createdAt !== "string" || !Number.isFinite(Date.parse(post.createdAt)) ||
        new Date(post.createdAt).toISOString() !== post.createdAt) throw new TypeError("Invalid saved post.");
    return { id:post.id, authorId:post.authorId, content:post.content.trim(), createdAt:post.createdAt };
  });
  if (new Set(posts.map(post=>post.id)).size !== posts.length) throw new TypeError("Duplicate post IDs.");
  return { version:1, currentUserId:value.currentUserId, users, posts };
}
export function selectUser(state, id) {
  if (!state.users.some(user=>user.id===id)) throw new RangeError("Unknown demo profile.");
  return { ...state, currentUserId:id };
}
export function addPost(state, content, id, createdAt) {
  if (!text(content,500)) throw new TypeError("Use a nonblank post up to 500 characters.");
  if (state.posts.some(post=>post.id===id)) throw new RangeError("Post ID already exists.");
  return validateState({ ...state, posts:[
    { id, authorId:state.currentUserId, content:content.trim(), createdAt }, ...state.posts,
  ] });
}
