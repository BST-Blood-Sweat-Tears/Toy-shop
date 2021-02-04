/* eslint-disable max-len */
import productsTemplate from './productsTemplate';

const $footer = document.querySelector('.footer');

let finishScrollCount = 1;
const renderItemCount = 12;

const infiniteScrolling = (products, characterStatus) => {
  const $productListContainer = document.querySelector('.product-lists-container');

  const handleIntersect = (entries, observer) => {
    console.log(characterStatus)
    if ($productListContainer.lastChild.id === products[products.length - 1]._id) observer.unobserve($footer);

    if (entries[0].isIntersecting) {
      setTimeout(() => {
        $productListContainer.innerHTML += products.map((product, i) => {
          if (renderItemCount * finishScrollCount - 1 < i && i < renderItemCount + renderItemCount * finishScrollCount) {
            return productsTemplate(product);
          }
        }).join('');

        finishScrollCount++;
      }, 100);
    };
  }

  const observer = new IntersectionObserver(handleIntersect, {
    root: null,
    threshold: 1,
  });

  observer.observe($footer);
};

export default infiniteScrolling;