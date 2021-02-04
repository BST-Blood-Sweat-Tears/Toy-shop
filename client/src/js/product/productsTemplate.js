const productsTemplate = product => `<li id="${product._id}" class="product-list">
  <button class="product-list__link">
  <div class="product-list__img-container">
  <img class="product-list__img" src="${product.img_URL[0]}" alt="${product.name}">
  </div>
  <span class="product-list__name">${product.name}</span>
  </button>
</li>`;

export default productsTemplate;