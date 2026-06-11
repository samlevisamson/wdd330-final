const cart =
  JSON.parse(
    localStorage.getItem("cart")
  ) || [];

if (cart.length === 0) {

  window.location.href =
    "/pages/cart/index.html";
}

const itemsContainer =
  document.querySelector("#checkout-items");

const totalContainer =
  document.querySelector("#checkout-total");

let total = 0;

cart.forEach(item => {

  const subtotal =
    item.price * item.quantity;

  total += subtotal;

  itemsContainer.innerHTML += `
    <p>
      ${item.name}
      × ${item.quantity}
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

document.querySelector(
  "#order-number"
).textContent =
  `Order #: ${orderNumber}`;

/* Close Modal */

document
  .querySelector("#close-order")
  ?.addEventListener(
    "click",
    () => {

      localStorage.removeItem(
        "cart"
      );

      window.location.href =
        "/index.html";

    }
  );