import renderProductsMain from './product/renderProducts';
import headerRender from './header';
import footerRender from './footer';
import homeRender from './home';
// import getImg from './product-detail';

import '../scss/main.scss';

document.addEventListener('DOMContentLoaded', headerRender);
document.addEventListener('DOMContentLoaded', footerRender);
document.addEventListener('DOMContentLoaded', renderProductsMain);
// document.addEventListener('DOMContentLoaded', getImg);