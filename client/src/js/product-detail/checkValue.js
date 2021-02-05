import displayModal from './displayModal';
import totalModal from './totalModal';
import stockCheck from './stockCheck';

const checkValue = () => {
  const $optionsBtn = document.querySelector('.options__btn');

  $optionsBtn.onchange = e => {
    const value = e.target.value.split(' ');

    if (value[0] === 'All') return;
    if (!stockCheck(+value[2])) return;

    displayModal(value);
    totalModal(value[1]);
  };
};

export default checkValue;