import {
    getLocalStorage,
    setLocalStorage
  }
  from "../services/storage.mjs";
  
  export function addToWishlist(product) {
  
    const wishlist =
      getLocalStorage(
        "fitness-wishlist"
      );
  
    const exists =
      wishlist.find(
        item =>
          item.id === product.id
      );
  
    if (!exists) {
  
      wishlist.push(product);
  
      setLocalStorage(
        "fitness-wishlist",
        wishlist
      );
    }
  }