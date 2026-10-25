export function element(tag,text,className) {
  const node=document.createElement(tag);
  if(text!==undefined) node.textContent=text;
  if(className) node.className=className;
  return node;
}
export function renderFeed(state,userId,actions) {
  const feed=document.getElementById("feed");feed.replaceChildren();
  for(const post of state.posts) {
    const author=state.users.find(user=>user.id===post.authorId);
    const card=element("article",undefined,post.authorId===userId?"post own":"post");
    const head=element("div",undefined,"post-header");
    const avatar=element("img");avatar.src="/avatar-"+author.avatar+".svg";avatar.alt="";avatar.className="mini-avatar";
    const date=element("time",new Date(post.createdAt).toLocaleString());date.dateTime=post.createdAt;
    head.append(avatar,element("h3",author.username),date);
    card.append(head,element("p",post.text,"post-text"));
    if(post.image) {
      const image=element("img");image.src="/"+post.image+".svg";image.alt=post.image==="study"?"Illustration of a study desk":"Illustration of a walking path";
      image.className="post-image";card.appendChild(image);
    }
    const row=element("div",undefined,"interaction-row");
    const like=element("button",post.likes.includes(userId)?"Unlike":"Like","secondary");
    like.type="button";like.setAttribute("aria-pressed",String(post.likes.includes(userId)));
    like.setAttribute("aria-label",`${post.likes.includes(userId)?"Unlike":"Like"} post by ${author.username}: ${post.text.slice(0,35)}`);
    like.dataset.postId=post.id;
    like.addEventListener("click",()=>{
      if(actions.like(post.id)){
        const replacement=[...feed.querySelectorAll("button[data-post-id]")].find(button=>button.dataset.postId===post.id);
        replacement?.focus();
      }
    });
    row.append(like,element("span",`${post.likes.length} like(s) · ${post.comments.length} comment(s)`));
    card.appendChild(row);
    const comments=element("ul",undefined,"comments");
    for(const comment of post.comments) {
      const commenter=state.users.find(user=>user.id===comment.authorId);
      comments.appendChild(element("li",`${commenter.username}: ${comment.text}`));
    }
    card.appendChild(comments);
    const form=element("form",undefined,"comment-form");
    const input=element("input");input.maxLength=300;input.placeholder="Write a comment…";
    input.setAttribute("aria-label",`Comment on ${author.username}'s post: ${post.text.slice(0,35)}`);
    input.dataset.commentPostId=post.id;
    const submit=element("button","Comment");submit.type="submit";
    form.append(input,submit);
    form.addEventListener("submit",event=>{
      event.preventDefault();
      if(actions.comment(post.id,input.value)){
        const replacement=[...feed.querySelectorAll("input[data-comment-post-id]")].find(field=>field.dataset.commentPostId===post.id);
        replacement?.focus();
      }
    });
    card.appendChild(form);feed.appendChild(card);
  }
}
export function renderNotifications(state,userId) {
  const items=state.notifications.filter(item=>item.recipientId===userId);
  const unread=items.filter(item=>!item.read).length;
  document.getElementById("notification-count").textContent=`${unread} unread · ${items.length} total`;
  const list=document.getElementById("notifications");list.replaceChildren();
  if(!items.length) list.appendChild(element("li","No likes or comments on your posts yet."));
  for(const item of items) {
    const actor=state.users.find(user=>user.id===item.actorId);
    const post=state.posts.find(post=>post.id===item.postId);
    list.appendChild(element("li",`${actor.username} ${item.type==="like"?"liked":"commented on"} your post “${post.text.slice(0,50)}”.`,item.read?"read":"unread"));
  }
  document.getElementById("mark-read").disabled=unread===0;
}
