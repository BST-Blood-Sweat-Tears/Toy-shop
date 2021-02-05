import productListTemplate from './productListTemplate';

const infiniteScrolling = ($productListContainer, products, renderItemCount) => {
  const $footer = document.querySelector('.footer');
  
  let finishScrollCount = 1;

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
}

export default infiniteScrolling;