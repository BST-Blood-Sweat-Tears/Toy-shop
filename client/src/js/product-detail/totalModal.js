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

export default totalModal;