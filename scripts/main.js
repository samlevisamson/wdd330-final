import { renderHeader } from "./components/header.mjs";
import { renderFooter } from "./components/footer.mjs";
import { updateCartCount } from "./modules/cartCounter.mjs";
import { setActiveNav } from "./modules/navActive.mjs";
import { setupMobileMenu } from "./modules/mobileMenu.mjs";

document.querySelector("#header").innerHTML =
  renderHeader();

document.querySelector("#footer").innerHTML =
  renderFooter();

updateCartCount();

const menuButton = document.querySelector("#menu-button");
const nav = document.querySelector("#main-nav");

menuButton?.addEventListener(
  "click",
  () => {
    nav.classList.toggle("nav-open");
  }
);

setActiveNav();
setupMobileMenu();