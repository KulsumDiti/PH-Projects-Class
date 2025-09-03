const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      display(data);
    });
};
const display = (posts) => {
  const postContainer = document.getElementById("post-container");
  postContainer.innerHTML = "";
  posts.forEach((post) => {
    const postCard = document.createElement("li");
    postCard.innerText = post.title;
    postContainer.append(postCard);
  });
};
loadPost();
