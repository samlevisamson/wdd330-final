import { getEquipment }
  from "../modules/equipment.mjs";

import { productCard }
  from "../components/productCard.mjs";

import { addToCart }
from "../modules/cart.mjs";

import {
  addToWishlist
}
from "../modules/wishlist.mjs";

function addCartListeners(products) {

  const buttons = document.querySelectorAll(".add-to-cart");

  buttons.forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const id =
          Number(
            button.dataset.id
          );

        const product =
          products.find(
            item => item.id === id
          );

        addToCart(product);

        alert(
          `${product.name} added to cart`
        );
      }
    );
  });
}

function addWishlistListeners(products) {

  const buttons =
    document.querySelectorAll(
      ".add-to-wishlist"
    );

  buttons.forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const id =
          Number(
            button.dataset.id
          );

        const product =
          products.find(
            item =>
              item.id === id
          );

        addToWishlist(
          product
        );

        alert(
          `${product.name}
          added to wishlist`
        );
      }
    );
  });
}

async function loadEquipment() {

  const equipment =
    await getEquipment();

  const container =
    document.querySelector("#equipment-list");

  container.innerHTML =
    equipment.map(productCard).join("");

  addCartListeners(equipment);

  addWishlistListeners(
    equipment
  );
}

loadEquipment();