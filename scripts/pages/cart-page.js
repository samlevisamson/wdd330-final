import { updateCartCount, animateCart } from "../modules/cartCounter.mjs";
import { addToCart } from "../modules/cart.mjs";
import { addToWishlist } from "../modules/wishlist.mjs";
import { getUserCart, saveUserCart } from "../services/userCart.mjs";
import { getUserWishlist, saveUserWishlist } from "../services/userWishlist.mjs";

let cart = getUserCart();
let wishlist = getUserWishlist();

const container = document.querySelector("#cart-items");
const wishlistContainer = document.querySelector("#wishlist-items");

function renderCart() {

  let total = 0;

  container.innerHTML =
    cart.map(item => {

      const subtotal = item.price * item.quantity;

      total += subtotal;

      return `
        <div class="cart-item">

          <h3>${item.name}</h3>

          <p>₹${item.price}</p>

          <p>Quantity: ${item.quantity}</p>

          <p>Subtotal: ₹${subtotal}</p>

          <button class="increase" data-id="${item.id}">+</button>

          <button class="decrease" data-id="${item.id}">-</button>

          <button class="remove" data-id="${item.id}">Remove</button>

          <button class="move-to-wishlist" data-id="${item.id}">❤️ Wishlist</button>

        </div>
      `;

    }).join("") +

    `
      <hr>
      <h2>Total: ₹${total}</h2>
      <button id="empty-cart">Empty Cart</button>
    `;

  attachCartEvents();

}

function renderWishlist() {

  wishlistContainer.innerHTML =
    wishlist.map(item => `
      <div class="wishlist-item">

        <h3>${item.name}</h3>

        <p>₹${item.price}</p>

        <button class="move-to-cart" data-id="${item.id}">
          Move To Cart
        </button>

        <button class="remove-wishlist" data-id="${item.id}">
          Remove
        </button>

      </div>
    `).join("");

  attachWishlistEvents();

}

function attachCartEvents() {

  document.querySelectorAll(".increase")
    .forEach(button => {

      button.addEventListener("click", () => {

        const item = cart.find(item => String(item.id) === button.dataset.id);

        if (!item) return;

        item.quantity++;

        saveCart();

      });

    });

  document.querySelectorAll(".decrease")
    .forEach(button => {

      button.addEventListener("click", () => {

        const item = cart.find(item => String(item.id) === button.dataset.id);

        if (!item) return;

        if (item.quantity > 1) {

          item.quantity--;

        }

        saveCart();

      });

    });

  document.querySelectorAll(".remove")
    .forEach(button => {

      button.addEventListener("click", () => {

        cart = cart.filter(item => String(item.id) !== button.dataset.id);

        saveCart();

      });

    });

  document.querySelector("#empty-cart")
    ?.addEventListener("click", () => {

      cart = [];

      saveCart();

    });

  document.querySelectorAll(".move-to-wishlist")
    .forEach(button => {

      button.addEventListener("click", () => {

        const item = cart.find(item => String(item.id) === button.dataset.id);

        if (!item) return;

        addToWishlist(item);

        cart = cart.filter(item => String(item.id) !== button.dataset.id);

        wishlist = getUserWishlist();

        saveCart();

        renderWishlist();

      });

    });

}

function attachWishlistEvents() {

  document.querySelectorAll(".move-to-cart")
    .forEach(button => {

      button.addEventListener("click", () => {

        const item = wishlist.find(item => String(item.id) === button.dataset.id);

        if (!item) return;

        addToCart(item);

        wishlist = wishlist.filter(item => String(item.id) !== button.dataset.id);

        saveWishlist();

        cart = getUserCart();

        renderCart();

      });

    });

  document.querySelectorAll(".remove-wishlist")
    .forEach(button => {

      button.addEventListener("click", () => {

        wishlist = wishlist.filter(item => String(item.id) !== button.dataset.id);

        saveWishlist();

      });

    });

}

function saveCart() {

  saveUserCart(cart);

  updateCartCount();

  animateCart();

  renderCart();

}

function saveWishlist() {

  saveUserWishlist(wishlist);

  renderWishlist();

}

renderCart();
renderWishlist();