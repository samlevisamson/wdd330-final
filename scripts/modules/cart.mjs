import {
    getLocalStorage,
    setLocalStorage
  }
  from "../services/storage.mjs";
  
  export function addToCart(product) {
  
    const cart =
      getLocalStorage("fitness-cart");
  
    cart.push(product);
  
    setLocalStorage(
      "fitness-cart",
      cart
    );
  }