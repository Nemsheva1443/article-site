import { API_BASE_URL } from "./js/api.js";

let articles = [];
async function Articles() {
  const response = await fetch(API_BASE_URL);
  const data = await response.json();
  document.createElement;
  return data;
}

articles = await Articles();
