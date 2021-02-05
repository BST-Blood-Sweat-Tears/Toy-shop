let startPosition = 0;

const clickMove = () => {
  const $listIndicator = document.querySelector('.list__indicator');
  const $viewerList = document.querySelector('.viewer__list');
  const movePosition = [0, 636, 1272, 1908];

  $listIndicator.onclick = e => {
    if (!e.target.classList.contains('fas')) return;
    $viewerList.style.transform = 'translate(-' + movePosition[e.target.id] + 'px)';
    startPosition = movePosition[e.target.id];

    [...$listIndicator.children].forEach(pager => {
      pager.classList.remove('indicator__active');
    });
    e.target.classList.add('indicator__active');
  };

  setInterval(() => {
    const $viewerList = document.querySelector('.viewer__list');
    const $listIndicator = document.querySelector('.list__indicator');
    const countList = [...$listIndicator.children];

    countList.forEach(indicator => {
      indicator.classList.remove('indicator__active');
    });

    const $elems = document.getElementsByClassName('fa-circle');
    let checkPoint = startPosition / 636;

    const elems = [...$elems];
    elems[checkPoint].classList.add('indicator__active');

    $viewerList.style.transform = 'translate(-' + startPosition + 'px)';
    startPosition += 636;
    if (startPosition === 636 * countList.length) startPosition = 0;
  }, 3000);
};

export default clickMove;