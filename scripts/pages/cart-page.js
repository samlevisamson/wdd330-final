import {
    getLocalStorage
  }
  from "../services/storage.mjs";
  
  const cart =
    getLocalStorage("fitness-cart");
  
  const container =
    document.querySelector(
      "#cart-items"
    );
  
  container.innerHTML =
    cart.map(item => `
      <div>
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
      </div>
    `).join("");