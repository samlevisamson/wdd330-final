import { renderHeader } from "./components/header.mjs";
import { renderFooter } from "./components/footer.mjs";
import { updateCartCount } from "./modules/cartCounter.mjs";
import { setActiveNav } from "./modules/navActive.mjs";
import { setupMobileMenu } from "./modules/mobileMenu.mjs";

document.querySelector("#header").innerHTML = renderHeader();

document.querySelector("#footer").innerHTML = renderFooter();

const currentYear = document.querySelector("#currentyear");

if (currentYear) {
  currentYear.textContent =
    new Date().getFullYear();
}

const lastModified = document.querySelector("#lastModified");

if (lastModified) {
  lastModified.textContent =
    `Last Updated: ${document.lastModified}`;
}

updateCartCount();
setActiveNav();
setupMobileMenu();

const subscribeBtn =
  document.querySelector("#subscribe-btn");

const modal =
  document.querySelector("#subscribe-modal");

const closeModal =
  document.querySelector("#close-modal");

subscribeBtn?.addEventListener("click", () => {

  const email =
    document.querySelector("#newsletter-email");

  if (!email.value.trim()) {
    alert("Please enter your email address.");
    return;
  }

  modal.classList.add("show");

  email.value = "";
});

closeModal?.addEventListener("click", () => {
  modal.classList.remove("show");
});

modal?.addEventListener("click", (event) => {

  if (event.target === modal) {

    modal.classList.remove("show");

  }

});