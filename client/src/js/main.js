// const axios = require('axios');

// axios.get('http://localhost:5000/api/products')
//   .then(console.log);

// import getImg from './product-detail';
import headerRender from './header';
import footerRender from './footer';
import homeRender from './home';
import getImg from './product-detail';

document.addEventListener('DOMContentLoaded', headerRender);
document.addEventListener('DOMContentLoaded', footerRender);
document.addEventListener('DOMContentLoaded', getImg);
// document.addEventListener('DOMContentLoaded', productRender);
