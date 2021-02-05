import headerRender from './header';
import footerRender from './footer';
// eslint-disable-next-line import/no-unresolved
import renderProductsMainSection from './product/renderProductsMainSection';

document.addEventListener('DOMContentLoaded', headerRender);
document.addEventListener('DOMContentLoaded', footerRender);
document.addEventListener('DOMContentLoaded', renderProductsMainSection);