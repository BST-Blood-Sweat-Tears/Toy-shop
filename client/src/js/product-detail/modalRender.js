import options from './globalState';
import clickCount from './clickCount';

const render = () => {
  const $productOptions = document.querySelector('.product__options');

  $productOptions.innerHTML = options.arr.map(({ id, size, price }) => `
    <div id="${id}" class="product__selected">
        <p class="item__option">
          <span class="option__title">사이즈</span>
          <span class="option__selected">${size}</span>
        </p>
        <p class="item__amount">
          <button class="amount__down fas fa-minus-circle fa-lg" aria-label="down"></button>
          <input class="amount__input" type="text" value="1" />
          <button class="amount__up fas fa-plus-circle fa-lg" aria-label="up"></button>
        </p>
        <button class="fas fa-times fa-lg item__closed" aria-label="닫기"></button>
        <p class="item__price">
          <span class="price__real" value="${price}">${price}</span>
          <span class="price__unit">원</span>
        </p>
    </div>`).join('');

  clickCount();
};

export default render;