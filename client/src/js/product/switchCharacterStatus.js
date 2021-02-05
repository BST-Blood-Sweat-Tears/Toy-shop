/* eslint-disable max-len */
import renderProductList from './renderProductList';
import status from './status';

const switchCharacterStatus = () => {
  const $categoryContainer = document.querySelector('.category-container');

  $categoryContainer.addEventListener('click', e => {
    if (e.target === e.currentTarget) return;

    status.characterStatus = [...e.target.closest('button').classList][1] || 'all';
    renderProductList(status.characterStatus);
  });
};

export default switchCharacterStatus;