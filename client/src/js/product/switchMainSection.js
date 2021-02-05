import getData from '../product-detail/getData';

const switchMainSection = () => {
  const $productListContainer = document.querySelector('.product-lists-container');

  $productListContainer.addEventListener('click', e => {
    getData(e.target.closest('li').id);
  });
};

export default switchMainSection;