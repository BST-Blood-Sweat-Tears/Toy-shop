let startPosition = 0;

const clickMove = () => {
  const $listIndicator = document.querySelector('.list__indicator');
  const $viewerList = document.querySelector('.viewer__list');
  const movePosition = [0, 636, 1272, 1908];

  $listIndicator.onclick = e => {
    if (!e.target.classList.contains('fas')) return;
    $viewerList.style.transform = 'translate(-' + movePosition[e.target.id] + 'px)';
    startPosition = movePosition[e.target.id];

    e.target.classList.add('indicator__active');
    // if(e.target.id === $listIndicator.id) $listIndicator.classList.add('indicatoractive');
  };
};

setInterval(() => {
  const $viewerList = document.querySelector('.viewer__list');
  // $viewerList.style.transform = 'translate(-636px)';
  $viewerList.style.transform = 'translate(-' + startPosition + 'px)';
  startPosition += 636;
  if (startPosition === 636 * 4) startPosition = 0;
}, 3000);

export default clickMove;