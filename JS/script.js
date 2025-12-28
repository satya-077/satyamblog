const posts = [
  {
    title: "Why I Build Projects Instead of Watching Tutorials",
    content:
      "Tutorials feel productive, but real learning happens when things break and you fix them."
  },
  {
    title: "Portfolio ≠ Resume",
    content:
      "Your portfolio should prove skill, not claim it. Code speaks louder than bullet points."
  },
  {
    title: "JavaScript Is Not Easy — And That’s Good",
    content:
      "If JS feels confusing, you're learning it correctly."
  }
];

const postsContainer = document.getElementById("posts");

posts.forEach(post => {
  const article = document.createElement("article");
  article.className = "post";
  article.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
  postsContainer.appendChild(article);
});

/* Dark Mode */
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
