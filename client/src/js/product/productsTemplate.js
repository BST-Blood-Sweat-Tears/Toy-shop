const productsTemplate = product => `<li id="${product.stock_id}" class="product-list">
  <a class="product-list__link" href="./src/html/product.html">
  <div class="product-list__img-container">
  <img class="product-list__img" src="${product.img_URL[0]}" alt="${product.name}">
  </div>
  <span class="product-list__name">${product.name}</span>
  </a>
</li>`;

export default productsTemplate;