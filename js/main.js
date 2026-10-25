console.log("Hello World");

import { Articles } from "./api.js";

let articles = await Articles();

const gesamt = document.querySelector("#articles-container");

function render(articleList) {
  gesamt.innerHTML = "";
  articleList.forEach((article) => {
    const container = document.createElement("div");
    const link = document.createElement("a");
    const content_container = document.createElement("div");
    const title = document.createElement("h2");
    const content = document.createElement("p");
    const btn_container = document.createElement("div");
    const btn = document.createElement("button");

    title.textContent = article.title;
    content.textContent = article.body;
    btn.textContent = "Löschen";

    content_container.appendChild(title);
    content_container.appendChild(content);
    btn_container.appendChild(btn);
    container.appendChild(link);
    container.appendChild(btn_container);
    gesamt.appendChild(container);
    link.appendChild(content_container);

    container.classList.add(
      "card",
      "bg-base-200",
      "shadow-2xl",
      "p-6",
      "hover:shadow-2xl",
      "hover:-translate-y-2",
      "h-full",
      "my-6",
    );

    title.classList.add(
      "card-title",
      "w-full",
      "justify-center",
      "text-center",
      "first-letter:uppercase",
      "first-letter:text-xl",
      "block",
    );

    content.classList.add(
      "text-base-content",
      "text-opacity-70",
      "text-justify",
      "first-letter:uppercase",
      "first-letter:text-xl",
      "my-6",
      "indent-4",
    );

    btn.classList.add(
      "btn",
      "btn-outline",
      "text-xs",
      "px-2",
      "py-1",
      "h-auto",
      "w-fit",
      "hover:shadow-2xl",
    );
    link.href = `article.html?id=${article.id}`;
    link.target = "_blank";

    btn.addEventListener("click", (event) => {
      event.preventDefault();

      const neueListe = articles.filter((item) => {
        return item.id !== article.id;
      });

      articles = neueListe;
      render(articles);
    });
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

const article_form = document.querySelector("#article-form");
const article_title = document.querySelector("#article-title");
const article_body = document.querySelector("#article-body");
const insert_btn = document.querySelector("#insert-btn");

article_form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = article_title.value;
  const body = article_body.value;

  const newArticle = {
    id: Date.now(),
    title: title,
    body: body,
  };

  articles.push(newArticle);

  render(articles);

  article_form.reset();
});

article_form.classList.add("w-full", "flex", "flex-col", "items-center");

article_form.classList.add("w-full");
insert_btn.classList.add(
  "btn",
  "btn-primary",
  "text-md",
  "px-2",
  "py-1",
  "h-auto",
  "w-fit",
  "justify-center",
  "mt-4",
);
