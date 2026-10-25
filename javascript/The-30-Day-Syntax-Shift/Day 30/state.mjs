export const AVATARS = ["blue", "green"];
export const POST_IMAGES = ["", "study", "walk"];
const nonblank = (value,max) => typeof value==="string" && value.trim().length>0 && value.length<=max;
const validTime = value => typeof value==="string" && Number.isFinite(Date.parse(value)) && new Date(value).toISOString()===value;
const unique = values => new Set(values).size===values.length;
function validUser(user) {
  return user && nonblank(user.id,100) && typeof user.username==="string" &&
    /^[A-Za-z][A-Za-z0-9_]{2,29}$/u.test(user.username) && !/\s/u.test(user.username) &&
    nonblank(user.email,120) && !/\s/u.test(user.email) && /^[^@]+@[^@]+\.[^@]+$/u.test(user.email) &&
    typeof user.bio==="string" && user.bio.length<=200 && AVATARS.includes(user.avatar);
}
export function createInitialState() {
  return { version:1, users:[
    {id:"alex",username:"AlexDemo",email:"alex@example.test",bio:"Learning through small projects.",avatar:"blue"},
    {id:"sam",username:"SamDemo",email:"sam@example.test",bio:"Sharing progress, one day at a time.",avatar:"green"},
  ],posts:[
    {id:"seed-alex",authorId:"alex",text:"Thirty days of practice, one connected dashboard.",image:"study",
      createdAt:"2026-10-25T08:00:00.000Z",likes:[],comments:[]},
    {id:"seed-sam",authorId:"sam",text:"A clear state model makes interactions easier to understand.",image:"",
      createdAt:"2026-10-25T07:00:00.000Z",likes:[],comments:[]},
  ],notifications:[] };
}
export function validateState(value) {
  if(!value || value.version!==1 || !Array.isArray(value.users) || !value.users.length ||
    !Array.isArray(value.posts) || !Array.isArray(value.notifications)) throw new TypeError("Invalid dashboard document.");
  const users=value.users.map(user=>{
    if(!validUser(user)) throw new TypeError("Invalid profile.");
    return {id:user.id,username:user.username,email:user.email.toLowerCase(),bio:user.bio,avatar:user.avatar};
  });
  if(!unique(users.map(u=>u.id)) || !unique(users.map(u=>u.username.toLowerCase())) ||
    !unique(users.map(u=>u.email))) throw new TypeError("Duplicate profile identifiers.");
  const ids=new Set(users.map(u=>u.id));
  const commentIds=[];
  const posts=value.posts.map(post=>{
    if(!post || !nonblank(post.id,100) || !ids.has(post.authorId) || !nonblank(post.text,500) ||
      !validTime(post.createdAt) || !POST_IMAGES.includes(post.image) || !Array.isArray(post.likes) ||
      !unique(post.likes) || !post.likes.every(id=>ids.has(id)) || !Array.isArray(post.comments)) throw new TypeError("Invalid post.");
    const comments=post.comments.map(comment=>{
      if(!comment || !nonblank(comment.id,100) || !ids.has(comment.authorId) || !nonblank(comment.text,300) ||
        !validTime(comment.createdAt)) throw new TypeError("Invalid comment.");
      commentIds.push(comment.id);
      return {id:comment.id,authorId:comment.authorId,text:comment.text.trim(),createdAt:comment.createdAt};
    });
    return {id:post.id,authorId:post.authorId,text:post.text.trim(),image:post.image,
      createdAt:post.createdAt,likes:[...post.likes],comments};
  });
  if(!unique(posts.map(p=>p.id)) || !unique(commentIds)) throw new TypeError("Duplicate content IDs.");
  const notifications=value.notifications.map(item=>{
    const post=posts.find(p=>p.id===item.postId);
    if(!item || !nonblank(item.id,100) || !post || post.authorId!==item.recipientId ||
      !ids.has(item.actorId) || item.actorId===item.recipientId || !["like","comment"].includes(item.type) ||
      !validTime(item.createdAt) || typeof item.read!=="boolean") throw new TypeError("Invalid notification.");
    return {id:item.id,recipientId:item.recipientId,actorId:item.actorId,postId:item.postId,
      type:item.type,createdAt:item.createdAt,read:item.read};
  });
  if(!unique(notifications.map(n=>n.id))) throw new TypeError("Duplicate notification IDs.");
  return {version:1,users,posts,notifications};
}
function requireUser(state,id) {
  const user=state.users.find(user=>user.id===id);
  if(!user) throw new RangeError("Choose a valid demo profile.");
  return user;
}
export function registerUser(state,profile,id) {
  return validateState({...state,users:[...state.users,{...profile,id,bio:"",avatar:"blue"}]});
}
export function findUserByEmail(state,email) {
  const user=state.users.find(user=>user.email===email.trim().toLowerCase());
  if(!user) throw new RangeError("No local demo profile with that email. Register one first.");
  return user;
}
export function updateProfile(state,id,profile) {
  requireUser(state,id);
  return validateState({...state,users:state.users.map(user=>user.id===id?{...user,...profile,id}:user)});
}
export function addPost(state,userId,text,image,event) {
  requireUser(state,userId);
  if(!nonblank(text,500)) throw new TypeError("Use a nonblank post up to 500 characters.");
  return validateState({...state,posts:[{id:event.id,authorId:userId,text,image,
    createdAt:event.time,likes:[],comments:[]},...state.posts]});
}
export function toggleLike(state,userId,postId,event) {
  requireUser(state,userId);
  const post=state.posts.find(post=>post.id===postId);
  if(!post) throw new RangeError("Post not found.");
  const removing=post.likes.includes(userId);
  const posts=state.posts.map(item=>item.id!==postId?item:{...item,
    likes:removing?item.likes.filter(id=>id!==userId):[...item.likes,userId]});
  let notifications=state.notifications.filter(item=>!(item.type==="like" && item.actorId===userId && item.postId===postId));
  if(!removing && post.authorId!==userId) notifications=[{id:event.id,recipientId:post.authorId,
    actorId:userId,postId,type:"like",createdAt:event.time,read:false},...notifications];
  return validateState({...state,posts,notifications});
}
export function addComment(state,userId,postId,text,event) {
  requireUser(state,userId);
  if(!nonblank(text,300)) throw new TypeError("Use a nonblank comment up to 300 characters.");
  const post=state.posts.find(post=>post.id===postId);
  if(!post) throw new RangeError("Post not found.");
  const comment={id:event.id,authorId:userId,text:text.trim(),createdAt:event.time};
  const posts=state.posts.map(item=>item.id===postId?{...item,comments:[...item.comments,comment]}:item);
  const notifications=post.authorId===userId?state.notifications:[
    {id:"comment-"+event.id,recipientId:post.authorId,actorId:userId,postId,type:"comment",createdAt:event.time,read:false},
    ...state.notifications];
  return validateState({...state,posts,notifications});
}
export function markNotificationsRead(state,userId) {
  requireUser(state,userId);
  return {...state,notifications:state.notifications.map(item=>item.recipientId===userId?{...item,read:true}:item)};
}
