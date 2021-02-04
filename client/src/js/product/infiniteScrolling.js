import productsTemplate from './productsTemplate';

const infiniteScrolling = (products, renderItemCount, $productListContainer) => {
  let finishScrollCount = 1;

  const handleIntersect = entries => {
    console.log('끝지점 도달!');
    if(entries[0].isIntersecting) {
      $productListContainer.innerHTML += products.map((product, i) => {
        if (renderItemCount * finishScrollCount - 1 < i && i < renderItemCount + renderItemCount * finishScrollCount) return productsTemplate(product);
      }).join('');
      ++finishScrollCount;
    }
  };

  const io = new IntersectionObserver(handleIntersect, {
    root: null,
    threshold: 0.8,
  });

  io.observe(document.querySelector('footer'));
};

export default infiniteScrolling;