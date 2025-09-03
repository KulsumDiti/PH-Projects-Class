const apiUrl = "https://jsonplaceholder.typicode.com";

// আউটপুট দেখানোর জন্য ছোট ফাংশন
function showOutput(data) {
  document.getElementById("output").textContent = JSON.stringify(data, null, 2);
}

// GET
function getUsers() {
  fetch(`${apiUrl}/users`)
    .then((res) => res.json())
    .then((data) => showOutput(data))
    .catch((err) => showOutput({ error: err }));
}

// POST (Create)
function createPost() {
  fetch(`${apiUrl}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "My New Post",
      body: "This is created using POST",
      userId: 1,
    }),
  })
    .then((res) => res.json())
    .then((data) => showOutput(data));
}

// PUT (Update All)
function updatePost() {
  fetch(`${apiUrl}/posts/1`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: 1,
      title: "Updated Post",
      body: "Full post updated using PUT",
      userId: 1,
    }),
  })
    .then((res) => res.json())
    .then((data) => showOutput(data));
}

// PATCH (Update Part)
function patchPost() {
  fetch(`${apiUrl}/posts/1`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "Patched Title only",
    }),
  })
    .then((res) => res.json())
    .then((data) => showOutput(data));
}

// DELETE
function deletePost() {
  fetch(`${apiUrl}/posts/1`, { method: "DELETE" }).then((res) => {
    if (res.ok) {
      showOutput({ message: "Post deleted successfully!" });
    }
  });
}
