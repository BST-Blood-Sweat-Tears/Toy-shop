const babel = require("@babel/polyfill");

const axios = require('axios');

const $main = document.querySelector('.main');

const productRender = (productImg, indicator, pName, sPrice, title, description) => {
  $main.innerHTML = `
  <section class="product">
      <div class="product__viewer">
        <ul class="viewer__list">
          ${productImg}
        </ul>
        <ul class="list__indicator">
          ${indicator}
        </ul>
      </div>
      <div class="product__info">
        <h2>${pName}</h2>
        <p class="product__price">
          <strong class="price__original">${sPrice}</strong>
          <span class="price__unit">원</span>
        </p>
        <div class="product__details">
          <strong>${title}</strong>
          <p>${description}</p>
        </div>
        <div class="product_options">
          <select class="options__btn" name="" id="">
            <option value="">S (재고:)</option>
            <option value="">M (재고:)</option>
            <option value="">L (재고:)</option>
          </select>
        </div>
        <div class="product__btn-list">
          <button class="btn-list__basket">장바구니</button>
          <button class="btn-list__order">구매하기</button>
        </div>
        <div class="product__total-price">
          <span class="total-price__title">총 상품 금액</span>
          <strong class="total-price__price">99,000</strong>
          <span class="total-price__unit">원</span>
        </div>
        <div class="product__selected">
          <ul class="selected__list">
            <li class="list__item">
              <p class="item__option">
                <span class="option__title">사이즈</span>
                <span class="option__selected">S</span>
              </p>
              <p class="item__amount">
                <button class="fas fa-minus-circle fa-lg" aria-label="down"></button>
                <input type="text" value="1" />
                <button class="fas fa-plus-circle fa-lg" aria-label="up"></button>
              </p>
              <div class="item__cont">
                <p class="cont__price">
                  <span class="price__real">99,000</span>
                  <span class="price__unit">원</span>
                </p>
                <button class="fas fa-times fa-lg cont__closed" aria-label="닫기"></button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  `;
};

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
  let pName = '';
  let pPrice = 0;
  let pTitle = '';
  let pDescription = '';

  return (imgArr, length, name, sPrice, title, description) => {
    productImg = imgRender(imgArr);
    indicator = indicatorRender(length);
    pName = name;
    pPrice = sPrice;
    pTitle = title;
    pDescription = description;

    return productRender(productImg, indicator, pName, pPrice, pTitle, pDescription);
  };
})();

const getImg = async () => {
  // TODO: id 뽑아오기
  const id = '601adb1750b5ad711c90dbd4';
  const pRes = await axios.get('http://localhost:5000/api/products');
  const sRes = await axios.get('http://localhost:5000/api/stock');

  const product = await pRes.data.find(({ _id }) => _id === id);
  const stock = await sRes.data.find(({ stock_id: stockId }) => product.stock_id === stockId);

  const sPrice = await stock.S.price;
  const title = await product.title;
  const description = await product.description;
  renderMaterial(product.img_URL, product.img_URL.length, product.name, sPrice, title, description);
};

export default getImg;