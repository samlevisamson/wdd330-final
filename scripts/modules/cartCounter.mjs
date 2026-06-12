import { getUserCart } from "../services/userCart.mjs";

export function updateCartCount() {

  const cart = getUserCart();

  const count = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const badge = document.querySelector("#cart-count");

  if (badge) {

    badge.textContent = count;

  }

}

export function animateCart() {

  const cartLink = document.querySelector("#cart-link");

  if (!cartLink) return;

  cartLink.classList.remove("cart-bounce");

  void cartLink.offsetWidth;

  cartLink.classList.add("cart-bounce");

}