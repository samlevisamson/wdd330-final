import { getUserCart, saveUserCart } from "../services/userCart.mjs";
import { updateCartCount, animateCart } from "./cartCounter.mjs";

export function addToCart(product) {

  const cart = getUserCart();

  const existingItem = cart.find(item => item.id === product.id);

  if (existingItem) {

    existingItem.quantity += 1;

  } else {

    cart.push({
      ...product,
      quantity: 1
    });

  }

  saveUserCart(cart);

  updateCartCount();

  animateCart();

}