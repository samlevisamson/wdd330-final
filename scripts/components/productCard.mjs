export function productCard(product) {
    return `
      <article class="product-card">
  
        <h3>${product.name}</h3>
  
        <p>${product.category}</p>
  
        <p>₹${product.price}</p>
  
        <button
          class="add-to-cart"
          data-id="${product.id}">
          Add to Cart
        </button>
  
      </article>
    `;
  }