import { getUserWishlist, saveUserWishlist } from "../services/userWishlist.mjs";

export function addToWishlist(product) {

  const wishlist = getUserWishlist();

  const exists = wishlist.find(item => item.id === product.id);

  if (!exists) {

    wishlist.push(product);

    saveUserWishlist(wishlist);

  }

}