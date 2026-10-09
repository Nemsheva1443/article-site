export const API_BASE_URL =
  "https://jsonplaceholder.typicode.com/posts?_limit=6";

export const Articles = async () => {
  const response = await fetch(API_BASE_URL);
  const data = await response.json();
  console.log(data);
  return data;
};

export const User = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
  const user_id = await response.json();
  console.log(user_id);
  return user_id;
};
