import headerRender from './header';
import footerRender from './footer';
// import renderProductsMain from './product/renderProducts';
import getData from './product-detail/getData';

document.addEventListener('DOMContentLoaded', headerRender);
document.addEventListener('DOMContentLoaded', footerRender);
// document.addEventListener('DOMContentLoaded', renderProductsMain);
document.addEventListener('DOMContentLoaded', getData);
