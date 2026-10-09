console.log("Hello World");

import { Articles } from "./api.js";

let articles = await Articles();

const gesamt = document.querySelector("#articles-container");

function render(articleList) {
  gesamt.innerHTML = "";
  articleList.forEach((article) => {
    const link = document.createElement("a");
    const container = document.createElement("div");
    const title = document.createElement("h2");
    title.textContent = article.title;
    const content = document.createElement("p");
    content.textContent = article.body;

    container.appendChild(title);
    container.appendChild(content);
    link.appendChild(container);
    gesamt.appendChild(link);

    container.classList.add(
      "card",
      "bg-base-100",
      "shadow-xl",
      "p-6",
      "hover:shadow-2xl",
      "hover:-translate-y-1",
      "transition",
    );
    title.classList.add("card-title");
    content.classList.add("text-base-content");

    link.href = `article.html?id=${article.id}`;
    link.target = "_blank";
  });
}
render(articles);

const select = document.querySelector("#sort-select");

select.addEventListener("change", () => {
  const value = select.value;

  articles.sort((a, b) => {
    if (value === "title-asc") {
      if (a.title > b.title) {
        return 1;
      }
    }

    if (value === "title-asc") {
      if (a.title < b.title) {
        return -1;
      }
    }

    if (value === "title-desc") {
      if (a.title > b.title) {
        return -1;
      }
    }

    if (value === "title-desc") {
      if (a.title < b.title) {
        return 1;
      }
    }
    return 0;
  });
  render(articles);
});

const search = document.querySelector("#search-input");
search.addEventListener("input", () => {
  const value = search.value;
  console.log(value);
  const filter = articles.filter((article) => {
    return article.title.toLowerCase().includes(value.toLowerCase());
  });
  render(filter);
});
