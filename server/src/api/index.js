const express = require('express');

const emojis = require('./emojis');
const products = require('./products');
const stock = require('./stock');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/emojis', emojis);
router.use('/products', products);
router.use('/stock', stock);

module.exports = router;
