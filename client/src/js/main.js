import renderProductsMain from './product/renderProducts';
import headerRender from './header';
import footerRender from './footer';
import product from './product/renderProducts';
import getImg from './product-detail';
import homeRender from './home';

import '../scss/main.scss';

document.addEventListener('DOMContentLoaded', headerRender);
document.addEventListener('DOMContentLoaded', footerRender);
// document.addEventListener('DOMContentLoaded', renderProductsMain);
document.addEventListener('DOMContentLoaded', getImg);
