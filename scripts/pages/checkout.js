import {
  getUserCart,
  saveUserCart
} from "../services/userCart.mjs";

const cart =
  getUserCart();

console.log(
  "Checkout Cart:",
  cart
);

console.log(cart);

const itemsContainer =
  document.querySelector(
    "#checkout-items"
  );

const totalContainer =
  document.querySelector(
    "#checkout-total"
  );

let total = 0;

cart.forEach(item => {

  const quantity =
    item.quantity || 1;

  const subtotal =
    item.price * quantity;

  total += subtotal;

  itemsContainer.innerHTML += `
    <p>
      ${item.name}
      × ${quantity}
      — ₹${subtotal}
    </p>
  `;

});

totalContainer.textContent =
  `Total: ₹${total}`;

/* Place Order */

document
  .querySelector("#checkout-form")
  ?.addEventListener(
    "submit",
    event => {

      event.preventDefault();

      document
        .querySelector(
          "#order-modal"
        )
        .classList.add(
          "show"
        );

    }
  );

const orderNumber =
  "FH-" + Date.now();

const orderNumberElement =
  document.querySelector(
    "#order-number"
  );

if (orderNumberElement) {

  orderNumberElement.textContent =
    `Order #: ${orderNumber}`;

}

/* Close Modal */

document
  .querySelector("#close-order")
  ?.addEventListener(
    "click",
    () => {

      saveUserCart([]);

      window.location.href =
        "/index.html";

    }
  );