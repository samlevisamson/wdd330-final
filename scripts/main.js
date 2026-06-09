import { renderHeader } from "./components/header.mjs";
import { renderFooter } from "./components/footer.mjs";

document.querySelector("#header").innerHTML =
  renderHeader();

document.querySelector("#footer").innerHTML =
  renderFooter();