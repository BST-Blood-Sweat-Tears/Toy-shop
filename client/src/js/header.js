const $header = document.querySelector('.header');

const headerRender = () => {
  $header.innerHTML = `
    <ul class="header-menu">
      <div>
        <li><a href=""><i class="fas fa-bars icon"></i></a></li>
        <li><a href=""><i class="fas fa-home icon"></i></a></li>
      </div>
      <div>
        <li><a href=""><img src="../../media/logo.png" alt="#"></a></li>
      </div>
      <div>
        <li><a href=""><i class="fas fa-search icon"></i></li>
        <li><a href="./src/html/map.html"><i class="fas fa-map-marker-alt icon"></i></a></li>
      </div>
    </ul>
  `;
};

export default headerRender;