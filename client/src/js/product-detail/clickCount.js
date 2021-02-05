import axios from 'axios';
import options from './globalState';
import totalModal from './totalModal';

const clickCount = () => {
  const $up = document.querySelector('.amount__up');
  const $down = document.querySelector('.amount__down');
  const $countInput = document.querySelector('.amount__input');
  const $closed = document.querySelector('.item__closed');
  const $price = document.querySelector('.price__real');
  const $orderBtn = document.querySelector('.btn-list__order');

  const setPrice = (count, target) => {
    const price = $price.getAttribute('value');
    $price.textContent = price * count;
    if (target.classList.contains('amount__up')) totalModal(price);
    else {
      totalModal(-price);
    }
  };

  $up.onclick = e => {
    const optionId = e.target.closest('.product__selected').getAttribute('id');
    const option = options.arr.find(option => option.id === +optionId);

    let count = +($countInput.value);
    if ((+option.stock) <= count) return alert('재고 없음');
    $countInput.value = ++count;
    setPrice(count, e.target);
  };

  $down.onclick = e => {
    let count = +($countInput.value);
    if (count < 2) return;
    $countInput.value = --count;

    setPrice(count, e.target);
  };

  $closed.onclick = e => {
    e.target.parentNode.remove();
  };

  $orderBtn.onclick = async () => {
    const optionId = document.querySelector('.product__selected').getAttribute('id');
    const $optionSelected = document.querySelector('.option__selected');

    const size = $optionSelected.textContent;
    const res = await axios.get('http://localhost:5000/api/stock');
    const stock = await res.data.find(({ stock_id: stockId }) => +optionId === stockId);
  };
};

export default clickCount;