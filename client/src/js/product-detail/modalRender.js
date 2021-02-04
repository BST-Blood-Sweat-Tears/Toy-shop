import options from './globalState';

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

  const clickCount = () => {
    const $up = document.querySelector('.amount__up');
    const $down = document.querySelector('.amount__down');
    const $countInput = document.querySelector('.amount__input');
    const $closed = document.querySelector('.item__closed');
    const $price = document.querySelector('.price__real');

    const setPrice = count => {
      const price = $price.getAttribute('value');
      $price.textContent = price * count;
    };

    const setTotalPrice = () => {

    };

    $productOptions.onclick = () => {
      let count = +($countInput.value);
      $countInput.value = ++count;
      const id = $up.closest('.product__selected').getAttribute('id');

      options.arr = options.arr.map(option =>
        (option.id === +id ? { ...options.arr, count } : option));
      render();

      setPrice(count);
      setTotalPrice();
    };

    $down.onclick = () => {
      let count = +($countInput.value);
      if (count < 2) return;
      $countInput.value = --count;

      setPrice(count);
      setTotalPrice();
    };

    $closed.onclick = e => {
      e.target.parentNode.remove();
    };
  };

  clickCount();
};

export default render;