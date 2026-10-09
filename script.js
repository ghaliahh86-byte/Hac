const button = document.querySelector("#testButton");
const message = document.querySelector("#message");

button.addEventListener("click", () => {
  message.textContent = "It works! Your HTML, CSS, and JavaScript files are connected 🎉";
});
