const $header = document.querySelector('.header');

const headerRender = () => {
  $header.innerHTML = `
    <ul class="header-menu">
      <div>
        <li><a href=""><img src="../../media/menu.png" alt="#"></a></li>
        <li><a href=""><img src="../../media/home.png" alt="#"></a></li>
      </div>
      <div>
        <li><a href=""><img src="../../media/logo.png" alt="#"></a></li>
      </div>
      <div>
        <li><a href=""><img src="../../media/search.png" alt="#"></a></li>
        <li><a href=""><img src="../../media/language.png" alt="#"></a></li>
      </div>
    </ul>
  `;
};

export default headerRender;