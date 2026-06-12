import { updateCartCount } from "../modules/cartCounter.mjs";

const form = document.querySelector("#login-form");
const message = document.querySelector("#login-message");

form?.addEventListener("submit", event => {

  event.preventDefault();

  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value;

  const users = JSON.parse(localStorage.getItem("fitness-users")) || [];

  const user = users.find(user => user.email === email);

  if (!user) {

    message.textContent = "Wrong User ID";

    return;

  }

  if (password !== user.password) {

    message.textContent = "Wrong Password";

    return;

  }

  localStorage.setItem("fitness-auth", "true");

  localStorage.setItem("current-user", JSON.stringify(user));

  updateCartCount();

  message.textContent = "Login Successful";

  setTimeout(() => {

    window.location.href = "/pages/profile/index.html";

  }, 1000);

});