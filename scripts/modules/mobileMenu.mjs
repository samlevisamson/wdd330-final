export function setupMobileMenu() {

  const button =
    document.querySelector("#menu-button");

  const nav =
    document.querySelector("#main-nav");

  if (!button || !nav) return;

  button.addEventListener("click", () => {

    nav.classList.toggle("nav-open");

    button.classList.toggle("active");
  });
}