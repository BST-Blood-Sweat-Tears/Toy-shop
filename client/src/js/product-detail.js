const axios = require('axios');

const $main = document.querySelector('.main');
const displayModal = value => {
  const $product = document.querySelector('.product__info');

  let html = '';
  html += `<div class="product__selected">
            <ul class="selected__list">
              <li class="list__item">
                <p class="item__option">
                  <span class="option__title">사이즈</span>
                  <span class="option__selected">${value[0]}</span>
                </p>
                <p class="item__amount">
                  <button class="fas fa-minus-circle fa-lg" aria-label="down"></button>
                  <input type="text" value="1" />
                  <button class="fas fa-plus-circle fa-lg" aria-label="up"></button>
                </p>
                <div class="item__cont">
                  <p class="cont__price">
                    <span class="price__real"></span>
                    <span class="price__unit">${value[1]}원</span>
                  </p>
                  <button class="fas fa-times fa-lg cont__closed" aria-label="닫기"></button>
                </div>
              </li>
            </ul>
          </div>`;
  $product.insertAdjacentHTML('beforeend', html);
};

let total = 0;
const totalModal = price => {
  total += (+price);
  const $productInfo = document.querySelector('.product__selected');
  const $totalPrice = document.querySelector('.total-price__price');
  const html = `
    <div class="product__total-price">
    <span class="total-price__title">총 상품 금액</span>
    <strong class="total-price__price">${total}</strong>
    <span class="total-price__unit">원</span>
    </div> 
  `;
  if ($totalPrice) {
    $totalPrice.textContent = total;
  } else {
    $productInfo.insertAdjacentHTML('beforebegin', html);
  }
  return html;
};

const checkValue = () => {
  const $optionsBtn = document.querySelector('.options__btn');
  $optionsBtn.onchange = e => {
    const value = e.target.value.split(' ');
    if (value[0] === 'All') return;
    displayModal(value);
    totalModal(value[1]);
  };
};

let startPosition = 0;

const clickMove = () => {
  const $listIndicator = document.querySelector('.list__indicator');
  const $viewerList = document.querySelector('.viewer__list');
  const movePosition = [0, 636, 1272, 1908];

  $listIndicator.onclick = e => {
    if (!e.target.classList.contains('fas')) return;
    $viewerList.style.transform = 'translate(-' + movePosition[e.target.id] + 'px)';
    startPosition = movePosition[e.target.id];

    e.target.classList.add('indicator__active');
    // if(e.target.id === $listIndicator.id) $listIndicator.classList.add('indicatoractive');
  };
};

setInterval(() => {
  const $viewerList = document.querySelector('.viewer__list');
  // $viewerList.style.transform = 'translate(-636px)';
  $viewerList.style.transform = 'translate(-' + startPosition + 'px)';
  startPosition += 636;
  if (startPosition === 636 * 4) startPosition = 0;
}, 3000);

const productRender = renderObject => {
  $main.innerHTML = `
  <section class="product">
      <div class="product__viewer">
        <div class="viewer-container">
          <ul class="viewer__list">
            ${renderObject.pImg}
          </ul>
        </div>
        <ul class="list__indicator">
          ${renderObject.pindicator}
        </ul>
      </div>
      <div class="product__info">
        <h2>${renderObject.pName}</h2>
        <p class="product__price">
          <strong class="price__original">${renderObject.sPrice}</strong>
          <span class="price__unit">원</span>
        </p>
        <div class="product__details">
          <strong>${renderObject.title}</strong>
          <p>${renderObject.description}</p>
        </div>
        <div class="product_options">
          <select class="options__btn" name="" id="">
            <option value="All">전체</option>
            <option value="S ${renderObject.sPrice}">S (재고:${renderObject.sStocks})</option>
            <option value="M ${renderObject.mPrice}">M (재고:${renderObject.mStocks})</option>
            <option value="L ${renderObject.lPrice}">L (재고:${renderObject.lStocks})</option>
          </select>
        </div>
        <div class="product__btn-list">
          <button class="btn-list__basket">장바구니</button>
          <button class="btn-list__order">구매하기</button>
        </div>
      </div>
    </section>
  `;
  checkValue();
  clickMove();
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

const getImg = async () => {
  // TODO: id 뽑아오기
  const id = '601b5129570a396430e2c888';
  const pRes = await axios.get('http://localhost:5000/api/products');
  const sRes = await axios.get('http://localhost:5000/api/stock');

  const product = await pRes.data.find(({ _id }) => _id === id);
  const stock = await sRes.data.find(({ stock_id: stockId }) => product.stock_id === stockId);

  const productInfo = {
    img_URL: product.img_URL,
    name: product.name,
    title: product.title,
    description: product.description,
  };

  const stockInfo = {
    s: stock.S.stock,
    m: stock.M.stock,
    l: stock.L.stock,
    sPrice: stock.S.price,
    mPrice: stock.M.price,
    lPrice: stock.L.price
  };

  renderMaterial(productInfo, stockInfo);
};

export default getImg;