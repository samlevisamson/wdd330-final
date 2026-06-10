export function productCard(product) {
    return `
      <article class="product-card">
  
        <h3>${product.name}</h3>
  
        <p>${product.category}</p>
  
        <p>₹${product.price}</p>
  
        <div class="product-actions">

        <button
          class="add-to-cart"
          data-id="${product.id}">
          Add to Cart
        </button>

        <button
          class="add-to-wishlist"
          data-id="${product.id}">
          ❤️
        </button>

      </div>
  
      </article>
    `;
  }