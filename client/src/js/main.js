// const axios = require('axios');

// axios.get('http://localhost:5000/api/products')
//   .then(console.log);

// import getImg from './product-detail';
import renderProducts from './product/renderProducts';
import headerRender from './header';
import footerRender from './footer';
import product from './product/renderProducts';
import getImg from './product-detail';

import '../scss/main.scss';

document.addEventListener('DOMContentLoaded', headerRender);
document.addEventListener('DOMContentLoaded', footerRender);
document.addEventListener('DOMContentLoaded', getImg);
// document.addEventListener('DOMContentLoaded', product);
// document.addEventListener('DOMContentLoaded', renderProducts);
