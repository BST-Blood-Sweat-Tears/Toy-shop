const express = require('express');
const monk = require('monk');
const Joi = require('@hapi/joi');

const db = monk(process.env.MONGO_URI);
const product = db.get('product');
const router = express.Router();

const schema = Joi.object({
  id: Joi.string().trim().required(),
  name: Joi.string().trim().required(),
  description: Joi.string().trim().required(),
});

// READ ALL
router.get('/', async (req, res, next) => {
  try {
    const items = await product.find({});
    res.json(items);
  } catch (error) {
    next(error);
  }
});

// READ One
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await product.findOne({
      _id: id,
    });
    if (!item) return next();
    res.json(item);
  } catch (error) {
    next(error);
  }
});

// Create One
router.post('/', async (req, res, next) => {
  try {
    const value = await schema.validateAsync(req.body);
    const inserted = await product.insert(value);
    res.json(inserted);
  } catch (error) {
    next(error);
  }
});

// Update one
router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const value = await schema.validateAsync(req.body);
    const item = await product.findOne({
      _id: id,
    });
    if (!item) return next();
    await product.update({
      _id: id,
    }, {
      $set: value,
    });
    res.json(value);
  } catch (error) {
    next(error);
  }
});

// Delete one
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    await product.remove({ _id: id });
    res.json({
      message: 'Success',
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;