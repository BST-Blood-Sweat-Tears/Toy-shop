import productRender from './productRender';

const imgRender = imgArr => {
  let productImg = '';
  for (let i = 0; i < imgArr.length; i++) {
    productImg += `<li class="list__item">
              <img src="${imgArr[i]}">
             </li>`;
  }
  return productImg;
};

const indicatorRender = length => {
  let indicator = '';
  for (let i = 0; i < length; i++) {
    indicator += '<li class="fas fa-circle"></li>';
  }
  return indicator;
};

const renderMaterial = (() => {
  let productImg = '';
  let indicator = '';

  return (productInfo, stockInfo) => {
    productImg = imgRender(productInfo.img_URL);
    indicator = indicatorRender(productInfo.img_URL.length);

    const renderObject = {
      pImg: productImg,
      pindicator: indicator,
      pName: productInfo.name,
      title: productInfo.title,
      description: productInfo.description,
      sPrice: stockInfo.sPrice,
      mPrice: stockInfo.mPrice,
      lPrice: stockInfo.lPrice,
      sStocks: stockInfo.s,
      mStocks: stockInfo.m,
      lStocks: stockInfo.l,
    };

    return productRender(renderObject);
  };
})();

export default renderMaterial;