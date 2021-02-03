const babel = require("@babel/polyfill");

const axios = require('axios');

const $main = document.querySelector('.main');

const productRender = html => {
  $main.innerHTML = `
  <section class="product">
      <div class="product__viewer">
        <ul class="viewer__list">
        ${html}
        </ul>
        <ul class="list__indicator">
          <li class="fas fa-circle"></li>
          <li class="fas fa-circle"></li>
          <li class="fas fa-circle"></li>
          <li class="fas fa-circle"></li>
        </ul>
      </div>
      <div class="product__info">
        <h2>꿀잠메가바디필로우_라이언</h2>
        <p class="product__price">
          <strong class="price__original">99,000</strong>
          <span class="price__unit">원</span>
        </p>
        <div class="product__details">
          <strong>내방의 꿀잠 요정, 메가 라이언</strong>
          <p>작고 소중한 사이즈로는 만족이 안 돼! <br />
            좋은 건 크게 보면 더 좋잖아요?</p>
        </div>
        <div class="product_options">
          <select class="options__btn" name="" id="">
            <option value="">S</option>
            <option value="">M</option>
            <option value="">L</option>
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
  let html = '';
  for (let i = 0; i < imgArr.length; i++) {
    html += `<li class="list__item">
              <img src="${imgArr[i]}">
             </li>`;
  }
  productRender(html);
};

const getImg = async () => {
  // TODO: id 뽑아오기
  const id = '601aa2f71de9c6249c8fae55';
  const res = await axios.get('http://localhost:5000/api/products');
  const product = await res.data.find(({ _id }) => _id === id);
  imgRender(product.img_URL);
};

export default getImg;