/* eslint-disable max-len */
import axios from "axios";
import productsTemplate from './productsTemplate';
import infiniteScrolling from './infiniteScrolling';

let characterStatus = null;
let productsByCharacter = [];

const renderProductsByCharacter = $categoryContainer => {
  const $productListContainer = document.querySelector('.product-lists-container');

  $categoryContainer.addEventListener('click', e => {
    if (e.target === e.currentTarget) return;
    characterStatus = [...e.target.closest('button').classList][1];

    axios.get('http://localhost:5000/api/products')
      .then(res => {
        productsByCharacter = res.data.filter(product => characterStatus === product.character);

        $productListContainer.innerHTML = productsByCharacter.map(product => productsTemplate(product)).join('');

        infiniteScrolling(productsByCharacter, characterStatus);
      });
  });
};

export default renderProductsByCharacter;