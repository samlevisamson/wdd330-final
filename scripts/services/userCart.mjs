export function getUserCart() {

    const user = JSON.parse(localStorage.getItem("current-user"));
  
    if (!user) return [];
  
    const carts = JSON.parse(localStorage.getItem("fitness-carts")) || {};
  
    return carts[user.email] || [];
  
  }
  
  export function saveUserCart(cart) {
  
    const user = JSON.parse(localStorage.getItem("current-user"));
  
    if (!user) return;
  
    const carts = JSON.parse(localStorage.getItem("fitness-carts")) || {};
  
    carts[user.email] = cart;
  
    localStorage.setItem("fitness-carts", JSON.stringify(carts));
  
  }