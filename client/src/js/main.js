const axios = require('axios');

axios.get('http://localhost:5000/api/products')
  .then(console.log);