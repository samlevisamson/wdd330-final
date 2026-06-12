import {
  getLocalStorage
} from "../services/storage.mjs";

const cart =
  getLocalStorage(
    "fitness-cart"
  ) || [];
  

console.log(cart);
console.log("checkout loaded");



// if (cart.length === 0) {

//   window.location.href =
//     "/pages/cart/index.html";
// }

const itemsContainer =
  document.querySelector("#checkout-items");

const totalContainer =
  document.querySelector("#checkout-total");

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
    (event) => {

      event.preventDefault();

      const modal =
        document.querySelector(
          "#order-modal"
        );

      modal.classList.add(
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

      localStorage.removeItem(
        "fitness-cart"
      );

      window.location.href =
        "/index.html";

    }
  );


