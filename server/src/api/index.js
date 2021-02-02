const express = require('express');

const emojis = require('./emojis');
const product = require('./product');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/emojis', emojis);
router.use('/product', product);

module.exports = router;
