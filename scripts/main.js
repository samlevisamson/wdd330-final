import { renderHeader } from "./components/header.mjs";
import { renderFooter } from "./components/footer.mjs";
import { updateCartCount } from "./modules/cartCounter.mjs";
import { setActiveNav } from "./modules/navActive.mjs";

document.querySelector("#header").innerHTML =
  renderHeader();

document.querySelector("#footer").innerHTML =
  renderFooter();

updateCartCount();
setActiveNav();