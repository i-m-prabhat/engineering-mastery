import lodash from "lodash";
import axios from "axios";
import http from "node:http";
import { pathToFileURL } from "node:url";

export function uniqueValues(values) {
  return lodash.uniq(values);
}

export async function readPost(url) {
  // proxy:false keeps the local fixture request on loopback.
  const response = await axios.get(url, { timeout: 5000, proxy: false });
  return response.data;
}

export async function runThirdPartyDemo({ live = false } = {}) {
  console.log("Task 6 - Lodash unique:", uniqueValues([1, 2, 2, 3, 1]));
  let server;
  let url = "https://jsonplaceholder.typicode.com/posts/1";
  try {
    if (!live) {
      server = http.createServer((request, response) => {
        response.setHeader("Content-Type", "application/json");
        if (request.url !== "/posts/1") {
          response.writeHead(404);
          response.end(JSON.stringify({ error: "Not found" }));
          return;
        }
        response.end(JSON.stringify({ id: 1, title: "Local module practice post" }));
      });
      await new Promise((resolve, reject) => {
        server.once("error", reject);
        server.listen(0, "127.0.0.1", resolve);
      });
      url = `http://127.0.0.1:${server.address().port}/posts/1`;
    }
    console.log("Task 7 - request mode:", live ? "public API" : "local HTTP fixture");
    console.log("Task 7 - Axios data:", await readPost(url));
    if (!live) {
      try {
        await readPost(url.replace("/posts/1", "/missing"));
      } catch (error) {
        if (!axios.isAxiosError(error) || error.response?.status !== 404) throw error;
        console.log("Expected Axios HTTP error:", error.response.status);
      }
    }
  } finally {
    if (server?.listening) {
      await new Promise((resolve, reject) => {
        server.close(error => error ? reject(error) : resolve());
      });
    }
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  runThirdPartyDemo({ live: process.argv.includes("--live") })
    .catch(error => { console.error(error.message); process.exitCode = 1; });
}
