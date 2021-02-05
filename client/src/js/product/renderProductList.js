/* eslint-disable max-len */
import axios from 'axios';
import productListTemplate from './productListTemplate';

const $footer = document.querySelector('.footer');

let finishScrollCount = 1;
const renderItemCount = 12;
let products = [];

const renderProductList = characterStatus => {
  const $productListContainer = document.querySelector('.product-lists-container');
  axios.get('http://localhost:5000/api/products')
    .then(res => {
      products = characterStatus === 'all' ? res.data : res.data.filter(product => characterStatus === product.character);
      $productListContainer.innerHTML = products.filter((_, i) => i < renderItemCount).map(product => productListTemplate(product)).join('');

      // infiniteScrolling($productListContainer, products);
      const observer = new IntersectionObserver((entries, observer) => {
        if (entries[0].isIntersecting) {
          if ($productListContainer.lastChild.id === products[products.length - 1]._id) {
            observer.unobserve($footer);
            return;
          }
          $productListContainer.innerHTML += products.filter((_product, i) => renderItemCount * finishScrollCount - 1 < i && i < renderItemCount + renderItemCount * finishScrollCount).map(product => productListTemplate(product)).join('');

          finishScrollCount++;
        }
      }, {
        root: null,
        threshold: 1,
      });

      observer.observe($footer);
    });
};

export default renderProductList;