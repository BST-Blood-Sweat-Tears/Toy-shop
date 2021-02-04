import getData from '../product-detail/getData';

const switchMainSection = $productListContainer => {
  $productListContainer.addEventListener('click', e => {
    getData(e.target.closest('li').id);
  });
};

export default switchMainSection;