import renderProducts from '../product/renderProducts';

const backToProductList = () => {
  const $backBtn = document.querySelector('.back-btn');
  $backBtn.addEventListener('click', () => {
    renderProducts();
  });
};

export default backToProductList;