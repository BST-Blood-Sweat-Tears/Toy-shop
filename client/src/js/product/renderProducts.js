const axios = require('axios');
// const babel = require('@babel/polyfill');

// DOM
const $main = document.querySelector('.main');

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

const renderProductsMain = () => {
  axios.get('http://localhost:5000/api/products')
    .then(_products => {
      products = _products.data;

      $main.innerHTML = `<section class="product-container">
      <h2 class="a11y-hidden">토이</h2>
      <div class="main-banner">
        <img class="main-banner-img" src="./media/visual.png" alt="토이">
      </div>
      <div class="result-sort-container">
        <div class="result">
          <span class="result__text">총 <span class="result__number">${products.length}</span>개</span>
        </div>
      </div>
      <ul class="category-container">
        <li class="category">
          <button class="category__btn lion">
            <img class="category__img" src="./media/lion.png" alt="라이언">
            <span class="category__name">LION</span>
          </button>
        </li>
        <li class="category">
          <button class="category__btn apeach">
            <img class="category__img" src="./media/apeach.png" alt="아피치">
            <span class="category__name">APEACH</span>
          </button>
        </li>
        <li class="category">
          <button class="category__btn muzi">
            <img class="category__img" src="./media/muzi.png" alt="무지">
            <span class="category__name">MUZI</span>
          </button>
        </li>
        <li class="category">
          <button class="category__btn frodo">
            <img class="category__img" src="./media/frodo.png" alt="프로도">
            <span class="category__name">FRODO</span>
          </button>
        </li>
      </ul>
      <ul class="product-lists-container">
      </ul>
      </section>`

      const $productListContainer = document.querySelector('.product-lists-container');

      $productListContainer.innerHTML = products.map(product => getTemplete(product)).join('');
    });
};

window.addEventListener('DOMContentLoaded', renderProductsMain);

export default renderProductsMain;