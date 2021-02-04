const express = require('express');
const monk = require('monk');
const Joi = require('@hapi/joi');

const db = monk(process.env.MONGO_URI);
const renderStatusDB = db.get('renderStatus');
const router = express.Router();

const schema = Joi.object({
  html: Joi.string().trim().required()
});

(async () => {
  const numData = await renderStatusDB.count({}, { estimate: true });

  if (!numData) {
    const productsData = [{ html: null }];
    productsData.forEach((product) => renderStatusDB.insert(product));
  }
})();

// READ ALL
router.get('/', async (req, res, next) => {
  try {
    const items = await renderStatusDB.find({});
    res.json(items);
  } catch (error) {
    next(error);
  }
});

// Update one
router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const value = await schema.validateAsync(req.body);
    const item = await renderStatusDB.findOne({
      _id: id,
    });
    if (!item) return next();
    await renderStatusDB.update({
      _id: id,
    }, {
      $set: value,
    });
    res.json(value);
  } catch (error) {
    next(error);
  }
});

// DELETE ALL
router.delete('/', async (req, res, next) => {
  try {
    await renderStatusDB.remove({});
    res.json({
      message: 'Success',
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;