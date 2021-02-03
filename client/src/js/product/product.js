const axios = require('axios');

// DOM
const $productListContainer = document.querySelector('.product-lists-container');

let products = [];

// Functions
const getTemplete = product => `<li id="${product.id}" class="product-list">
<a class="product-list__link" href="./src/html/product.html">
<div class="product-list__img-container">
<img class="product-list__img" src="${product.img_URL[0]}" alt="">
</div>
<span class="product-list__name">${product.name}</span>
</a>
</li>`;

const render = _products => {
  products = _products.data;
  $productListContainer.innerHTML = products.map(product => getTemplete(product)).join('');
};

const product = () => {
  axios.get('http://localhost:5000/api/products')
    .then(render);
};

export default product;