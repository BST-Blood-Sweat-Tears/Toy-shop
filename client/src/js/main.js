<<<<<<< HEAD
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
=======
import product from './product/product.js';
import '../scss/main.scss';

product();
>>>>>>> 13ae6477d7de5e193ff82350cd1ebcd5c2f85eb3
