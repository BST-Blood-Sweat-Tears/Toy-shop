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

export default displayModal;