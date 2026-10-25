"use strict";
const http=require("node:http"),fs=require("node:fs"),path=require("node:path");
const types={".html":"text/html",".css":"text/css",".mjs":"text/javascript"};
const allowed=new Set(["index.html","styles.css","solutions.mjs","state.mjs","storage.mjs","render.mjs"]);
const server=http.createServer((request,response)=>{
  const pathname=new URL(request.url,"http://127.0.0.1").pathname;
  const name=pathname==="/"?"index.html":pathname.slice(1);
  if(!allowed.has(name)){response.writeHead(404);response.end("Not found");return;}
  fs.readFile(path.join(__dirname,name),(error,data)=>{
    if(error){response.writeHead(500);response.end("Unable to read lesson");return;}
    response.setHeader("Content-Type",types[path.extname(name)]+"; charset=utf-8");
    response.setHeader("Cache-Control","no-store");response.end(data);
  });
});
server.on("error",error=>{console.error(error.message);process.exitCode=1;});
server.listen(8129,"127.0.0.1",()=>console.log("Day 29: http://127.0.0.1:8129 — Ctrl+C to stop."));
