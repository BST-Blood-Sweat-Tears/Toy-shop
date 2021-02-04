import options from './globalState';
import render from './modalRender';

const displayModal = value => {
  const generateId = () => Math.max(...options.arr.map(option => option.id), 0) + 1;

  options.arr = [{ id: generateId(), size: value[0], count: 1, price: value[1] }, ...options.arr];

  render();
};

export default displayModal;