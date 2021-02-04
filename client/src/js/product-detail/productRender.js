import checkValue from './checkValue';
import clickMove from './clickMove';
import renderProducts from '../product/renderProducts';

const $main = document.querySelector('.main');

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
        <div class="product__options"><div>
      </div>
      <button class="back-btn">상품 일괄 보기</button>
    </section>
  `;
  checkValue();
  clickMove();
  const backToProductList = () => {
    const $backBtn = document.querySelector('.back-btn');
    $backBtn.addEventListener('click', () => {
      renderProducts();
    });
  };
  backToProductList();
};

export default productRender;