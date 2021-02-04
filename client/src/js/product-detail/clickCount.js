// import options from './globalState';
// import render from './modalRender';

// const clickCount = () => {
//   const $up = document.querySelector('.amount__up');
//   const $down = document.querySelector('.amount__down');
//   const $countInput = document.querySelector('.amount__input');
//   const $closed = document.querySelector('.item__closed');
//   const $price = document.querySelector('.price__real');

//   const setPrice = count => {
//     const price = $price.getAttribute('value');
//     $price.textContent = price * count;
//   };

//   const setTotalPrice = () => {

//   };

//   $up.onclick = () => {
//     let count = +($countInput.value);
//     $countInput.value = ++count;

//     options.arr = options.arr.map(option =>
//       (option.id === id ? { ...options.arr, count: count } : option));
//     render();

//     setPrice(count);
//     setTotalPrice();
//   };

//   $down.onclick = () => {
//     let count = +($countInput.value);
//     if (count < 2) return;
//     $countInput.value = --count;

//     setPrice(count);
//     setTotalPrice();
//   };

//   $closed.onclick = e => {
//     e.target.parentNode.remove();
//   };
// };

// export default clickCount;