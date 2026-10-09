import { User } from "./api.js";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const article = await User(id);

document.querySelector("#title").textContent = article.title;
document.querySelector("#body").textContent = article.body;
