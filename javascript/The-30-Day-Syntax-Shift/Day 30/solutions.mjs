import {createInitialState,registerUser,findUserByEmail,updateProfile,addPost,toggleLike,addComment,markNotificationsRead} from "./state.mjs";
import {DATA_KEY,loadState,saveState,loadIdentity,saveIdentity} from "./storage.mjs";
import {renderFeed,renderNotifications,element} from "./render.mjs";
const get=id=>document.getElementById(id);
const status=get("status");
let state,identity=null,blocked=false;
const event=()=>({id:crypto.randomUUID(),time:new Date().toISOString()});
function tell(message){status.textContent=message;}
function active(){return state.users.find(user=>user.id===identity);}
function commit(next,message,resetProfile=false) {
  try{
    if(blocked) throw new Error("Reset invalid saved data first.");
    saveState(localStorage,next);state=next;render(resetProfile);tell(message);return true;
  }catch(error){tell(`Change not saved: ${error.message}`);return false;}
}
function signIn(id) {
  saveIdentity(sessionStorage,id);identity=id;render(true);
  get("login-password").value="";get("register-password").value="";
  tell(`Entered local demo as ${active().username}. This is not verified authentication.`);
}
function render(resetProfile=false) {
  const user=active();
  get("auth").hidden=Boolean(user);get("dashboard").hidden=!user;
  get("auth-controls").disabled=blocked;get("reset-data").hidden=!blocked;
  if(!user)return;
  get("profile-name").textContent=user.username;get("profile-email").textContent=user.email;
  get("profile-bio").textContent=user.bio||"No bio yet.";
  get("profile-picture").src="/avatar-"+user.avatar+".svg";
  get("profile-picture").alt=`Demo avatar for ${user.username}`;
  const choices=get("identity-select");choices.replaceChildren();
  for(const profile of state.users){const option=element("option",profile.username);option.value=profile.id;choices.appendChild(option);}
  choices.value=identity;
  if(resetProfile){
    get("edit-username").value=user.username;get("edit-email").value=user.email;
    get("edit-bio").value=user.bio;get("edit-avatar").value=user.avatar;
  }
  get("composer-label").textContent=`Post as ${user.username}`;
  renderFeed(state,identity,{
    like:postId=>{
      try{return commit(toggleLike(state,identity,postId,event()),"Like state saved.");}
      catch(error){tell(error.message);}
    },
    comment:(postId,text)=>{
      try{return commit(addComment(state,identity,postId,text,event()),"Comment saved.");}
      catch(error){tell(error.message);}
    },
  });
  renderNotifications(state,identity);
}
get("login-form").addEventListener("submit",e=>{
  e.preventDefault();
  try{
    if(get("login-password").value.length<4)throw new Error("Use a fictional practice passphrase of at least four characters.");
    const user=findUserByEmail(state,get("login-email").value);signIn(user.id);
  }catch(error){tell(error.message);}
});
get("register-form").addEventListener("submit",e=>{
  e.preventDefault();
  try{
    if(get("register-password").value.length<4)throw new Error("Use a fictional practice passphrase of at least four characters.");
    const next=registerUser(state,{username:get("register-username").value.trim(),
      email:get("register-email").value.trim().toLowerCase()},crypto.randomUUID());
    const id=next.users[next.users.length-1].id;
    if(commit(next,"Demo profile registered.")){
      get("register-form").reset();signIn(id);
    }
  }catch(error){tell(`Registration/login failed: ${error.message}`);}
});
get("logout").addEventListener("click",()=>{
  try{saveIdentity(sessionStorage,null);identity=null;get("post-form").reset();render();tell("Logged out of the local demo.");}
  catch(error){tell(`Logout failed: ${error.message}`);}
});
get("identity-select").addEventListener("change",()=>{
  try{signIn(get("identity-select").value);}
  catch(error){get("identity-select").value=identity;tell(error.message);}
});
get("profile-form").addEventListener("submit",e=>{
  e.preventDefault();
  try{commit(updateProfile(state,identity,{
    username:get("edit-username").value.trim(),email:get("edit-email").value.trim().toLowerCase(),
    bio:get("edit-bio").value.trim(),avatar:get("edit-avatar").value,
  }),"Profile updated and saved.",true);}catch(error){tell(`Profile update failed: ${error.message}`);}
});
get("post-form").addEventListener("submit",e=>{
  e.preventDefault();
  try{
    if(commit(addPost(state,identity,get("post-text").value,get("post-image").value,event()),"Post saved to the local feed.")){
      get("post-form").reset();get("post-text").focus();
    }
  }catch(error){tell(error.message);}
});
get("mark-read").addEventListener("click",()=>commit(markNotificationsRead(state,identity),"Your notifications marked as read."));
get("reset-data").addEventListener("click",()=>{
  try{
    const seed=createInitialState();saveState(localStorage,seed);saveIdentity(sessionStorage,null);
    state=seed;identity=null;blocked=false;render();tell("Local demo data reset.");
  }catch(error){tell(`Reset failed: ${error.message}`);}
});
try{
  state=loadState(localStorage);saveState(localStorage,state);identity=loadIdentity(sessionStorage,state);
}catch(error){
  state=createInitialState();identity=null;blocked=true;
  tell(`Saved demo data could not be loaded (${error.name}). Existing data is preserved until explicit reset.`);
}
render(true);
