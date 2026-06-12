export function getUserWishlist() {

    const user = JSON.parse(localStorage.getItem("current-user"));
  
    if (!user) return [];
  
    const wishlists = JSON.parse(localStorage.getItem("fitness-wishlists")) || {};
  
    return wishlists[user.email] || [];
  
  }
  
  export function saveUserWishlist(wishlist) {
  
    const user = JSON.parse(localStorage.getItem("current-user"));
  
    if (!user) return;
  
    const wishlists = JSON.parse(localStorage.getItem("fitness-wishlists")) || {};
  
    wishlists[user.email] = wishlist;
  
    localStorage.setItem("fitness-wishlists", JSON.stringify(wishlists));
  
  }