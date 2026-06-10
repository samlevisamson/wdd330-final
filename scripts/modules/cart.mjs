import {
  getLocalStorage,
  setLocalStorage
}
from "../services/storage.mjs";

import {
  updateCartCount,
  animateCart
}
from "./cartCounter.mjs";

export function addToCart(product) {

  const cart =
    getLocalStorage("fitness-cart");

  const existingItem =
    cart.find(
      item => item.id === product.id
    );

  if (existingItem) {

    existingItem.quantity += 1;

  } else {

    cart.push({
      ...product,
      quantity: 1
    });
  }

  setLocalStorage(
    "fitness-cart",
    cart
  );

  updateCartCount();

  animateCart();
}