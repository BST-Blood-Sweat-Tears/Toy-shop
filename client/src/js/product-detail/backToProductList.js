import renderProductsMainSection from '../product/renderProductsMainSection';

const backToProductList = () => {
  const $backBtn = document.querySelector('.back-btn');
  $backBtn.addEventListener('click', () => {
    renderProductsMainSection();
  });
};

export default backToProductList;