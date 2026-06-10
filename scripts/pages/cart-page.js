import {getLocalStorage,setLocalStorage} from "../services/storage.mjs";
import {updateCartCount,animateCart} from "../modules/cartCounter.mjs";
import {addToCart} from "../modules/cart.mjs";
import {addToWishlist} from "../modules/wishlist.mjs";

let cart = getLocalStorage("fitness-cart");
let wishlist = getLocalStorage("fitness-wishlist");

const container = document.querySelector("#cart-items");
const wishlistContainer = document.querySelector("#wishlist-items"); 

function renderCart() {

  let total = 0;

  container.innerHTML =
    cart.map(item => {

      const subtotal =
        item.price *
        item.quantity;

      total += subtotal;

      return `
        <div class="cart-item">

          <h3>${item.name}</h3>

          <p>
            ₹${item.price}
          </p>

          <p>
            Quantity:
            ${item.quantity}
          </p>

          <p>
            Subtotal:
            ₹${subtotal}
          </p>

          <button
            class="increase"
            data-id="${item.id}">
            +
          </button>

          <button
            class="decrease"
            data-id="${item.id}">
            -
          </button>

          <button
            class="remove"
            data-id="${item.id}">
            Remove
          </button>

          <button
            class="move-to-wishlist"
            data-id="${item.id}">
            ❤️ Wishlist
          </button>

        </div>
      `;
    }).join("") +

    `
      <hr>

      <h2>
        Total: ₹${total}
      </h2>

      <button id="empty-cart">
        Empty Cart
      </button>
    `;

  attachEvents();
}

function renderWishlist() {

  wishlistContainer.innerHTML =
    wishlist.map(item => `

      <div class="wishlist-item">

        <h3>
          ${item.name}
        </h3>

        <p>
          ₹${item.price}
        </p>

        <button
          class="move-to-cart"
          data-id="${item.id}">
          Move To Cart
        </button>

        <button
          class="remove-wishlist"
          data-id="${item.id}">
          Remove
        </button>

      </div>

    `).join("");

  attachWishlistEvents();
}

function attachEvents() {

  document
    .querySelectorAll(".increase")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const item =
            cart.find(
            p =>
              String(p.id) ===
              button.dataset.id
            );

          console.log(item);

          item.quantity++;

          saveAndRender();
        }
      );
    });

  document
    .querySelectorAll(".decrease")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const item =
            cart.find(
              p =>
                String(p.id) ===
                button.dataset.id
            );

          console.log(item);

          if (
            item.quantity > 1
          ) {

            item.quantity--;

          }

          saveAndRender();
        }
      );
    });

  document
    .querySelectorAll(".remove")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          cart =
            cart.filter(
              item =>
                String(item.id) !==
                button.dataset.id
            );

          saveAndRender();
        }
      );
    });

  document
    .querySelector(
      "#empty-cart"
    )
    ?.addEventListener(
      "click",
      () => {

        cart = [];

        saveAndRender();
      }
    );

    document
  .querySelectorAll(
    ".move-to-wishlist"
  )
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const item =
          cart.find(
            product =>
              String(product.id) ===
              button.dataset.id
          );

        addToWishlist(item);

        cart =
          cart.filter(
            product =>
              String(product.id) !==
              button.dataset.id
          );

        saveAndRender();

        wishlist =
          getLocalStorage(
            "fitness-wishlist"
          );

        renderWishlist();
      }
    );
  });
}

function attachWishlistEvents() {

  document
    .querySelectorAll(
      ".move-to-cart"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const item =
            wishlist.find(
              product =>
                String(product.id) ===
                button.dataset.id
            );

            addToCart(item);

            cart =
              getLocalStorage(
                "fitness-cart"
              );
            
            wishlist =
              wishlist.filter(
                product =>
                  String(product.id) !==
                  button.dataset.id
              );
            
            renderCart();
            
            saveWishlist();
        }
      );
    });

  document
    .querySelectorAll(
      ".remove-wishlist"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          wishlist =
            wishlist.filter(
              product =>
                String(product.id) !==
                button.dataset.id
            );

          saveWishlist();
        }
      );
    });
}

function saveAndRender() {

  setLocalStorage(
    "fitness-cart",
    cart
  );

  updateCartCount();

  animateCart();

  renderCart();
}

function saveWishlist() {

  setLocalStorage(
    "fitness-wishlist",
    wishlist
  );

  renderWishlist();
}

renderCart();
renderWishlist();