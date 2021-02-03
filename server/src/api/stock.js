const express = require('express');
const monk = require('monk');
const Joi = require('@hapi/joi');

const db = monk(process.env.MONGO_URI);
const stockDB = db.get('stock');
const router = express.Router();

const schema = Joi.object({
  stock_id: Joi.required(),
  S: Joi.object({
    stock: Joi.required(),
    price: Joi.required()
  }).required(),
  M: Joi.object({
    stock: Joi.required(),
    price: Joi.required()
  }).required(),
  L: Joi.object({
    stock: Joi.required(),
    price: Joi.required()
  }).required(),
});

(async () => {
  const numData = await stockDB.count({}, { estimate: true });

  if (!numData) {
    const stockData = [
      {
        stock_id: 1,
        S: {
          stock: 6,
          price: 12000
        },
        M: {
          stock: 2,
          price: 15000
        },
        L: {
          stock: 0,
          price: 18000
        }
      },
      {
        stock_id: 2,
        S: {
          stock: 0,
          price: 12000
        },
        M: {
          stock: 8,
          price: 15000
        },
        L: {
          stock: 5,
          price: 18000
        }
      },
      {
        stock_id: 3,
        S: {
          stock: 9,
          price: 12000
        },
        M: {
          stock: 3,
          price: 15000
        },
        L: {
          stock: 11,
          price: 18000
        }
      },
      {
        stock_id: 4,
        S: {
          stock: 3,
          price: 12000
        },
        M: {
          stock: 10,
          price: 15000
        },
        L: {
          stock: 7,
          price: 18000
        }
      },
      {
        stock_id: 5,
        S: {
          stock: 3,
          price: 28000
        },
        M: {
          stock: 10,
          price: 31000
        },
        L: {
          stock: 7,
          price: 35000
        }
      },
      {
        stock_id: 6,
        S: {
          stock: 2,
          price: 15000
        },
        M: {
          stock: 0,
          price: 18000
        },
        L: {
          stock: 17,
          price: 21000
        }
      },
      {
        stock_id: 7,
        S: {
          stock: 8,
          price: 15000
        },
        M: {
          stock: 10,
          price: 18000
        },
        L: {
          stock: 5,
          price: 21000
        }
      },
      {
        stock_id: 8,
        S: {
          stock: 1,
          price: 36000
        },
        M: {
          stock: 5,
          price: 40000
        },
        L: {
          stock: 2,
          price: 45000
        }
      },
      {
        stock_id: 9,
        S: {
          stock: 3,
          price: 36000
        },
        M: {
          stock: 8,
          price: 40000
        },
        L: {
          stock: 0,
          price: 45000
        }
      },
      {
        stock_id: 10,
        S: {
          stock: 2,
          price: 32000
        },
        M: {
          stock: 0,
          price: 35000
        },
        L: {
          stock: 0,
          price: 38000
        }
      },
      {
        stock_id: 11,
        S: {
          stock: 0,
          price: 32000
        },
        M: {
          stock: 1,
          price: 35000
        },
        L: {
          stock: 0,
          price: 38000
        }
      },
      {
        stock_id: 12,
        S: {
          stock: 6,
          price: 12000
        },
        M: {
          stock: 2,
          price: 15000
        },
        L: {
          stock: 0,
          price: 18000
        }
      },
      {
        stock_id: 13,
        S: {
          stock: 0,
          price: 12000
        },
        M: {
          stock: 8,
          price: 15000
        },
        L: {
          stock: 5,
          price: 18000
        }
      },
      {
        stock_id: 14,
        S: {
          stock: 9,
          price: 12000
        },
        M: {
          stock: 3,
          price: 15000
        },
        L: {
          stock: 11,
          price: 18000
        }
      },
      {
        stock_id: 15,
        S: {
          stock: 3,
          price: 12000
        },
        M: {
          stock: 10,
          price: 15000
        },
        L: {
          stock: 7,
          price: 18000
        }
      },
      {
        stock_id: 16,
        S: {
          stock: 3,
          price: 28000
        },
        M: {
          stock: 10,
          price: 31000
        },
        L: {
          stock: 7,
          price: 35000
        }
      },
      {
        stock_id: 17,
        S: {
          stock: 2,
          price: 15000
        },
        M: {
          stock: 0,
          price: 18000
        },
        L: {
          stock: 17,
          price: 21000
        }
      },
      {
        stock_id: 18,
        S: {
          stock: 8,
          price: 15000
        },
        M: {
          stock: 10,
          price: 18000
        },
        L: {
          stock: 5,
          price: 21000
        }
      },
      {
        stock_id: 19,
        S: {
          stock: 1,
          price: 36000
        },
        M: {
          stock: 5,
          price: 40000
        },
        L: {
          stock: 2,
          price: 45000
        }
      },
      {
        stock_id: 20,
        S: {
          stock: 3,
          price: 36000
        },
        M: {
          stock: 8,
          price: 40000
        },
        L: {
          stock: 0,
          price: 45000
        }
      },
      {
        stock_id: 21,
        S: {
          stock: 2,
          price: 32000
        },
        M: {
          stock: 0,
          price: 35000
        },
        L: {
          stock: 0,
          price: 38000
        }
      },
      {
        stock_id: 22,
        S: {
          stock: 0,
          price: 32000
        },
        M: {
          stock: 1,
          price: 35000
        },
        L: {
          stock: 0,
          price: 38000
        }
      },
      {
        stock_id: 23,
        S: {
          stock: 0,
          price: 12000
        },
        M: {
          stock: 8,
          price: 15000
        },
        L: {
          stock: 5,
          price: 18000
        }
      },
      {
        stock_id: 24,
        S: {
          stock: 9,
          price: 12000
        },
        M: {
          stock: 3,
          price: 15000
        },
        L: {
          stock: 11,
          price: 18000
        }
      },
      {
        stock_id: 25,
        S: {
          stock: 3,
          price: 12000
        },
        M: {
          stock: 10,
          price: 15000
        },
        L: {
          stock: 7,
          price: 18000
        }
      },
      {
        stock_id: 26,
        S: {
          stock: 3,
          price: 28000
        },
        M: {
          stock: 10,
          price: 31000
        },
        L: {
          stock: 7,
          price: 35000
        }
      },
      {
        stock_id: 27,
        S: {
          stock: 2,
          price: 15000
        },
        M: {
          stock: 0,
          price: 18000
        },
        L: {
          stock: 17,
          price: 21000
        }
      },
      {
        stock_id: 28,
        S: {
          stock: 8,
          price: 15000
        },
        M: {
          stock: 10,
          price: 18000
        },
        L: {
          stock: 5,
          price: 21000
        }
      },
      {
        stock_id: 29,
        S: {
          stock: 1,
          price: 36000
        },
        M: {
          stock: 5,
          price: 40000
        },
        L: {
          stock: 2,
          price: 45000
        }
      },
      {
        stock_id: 30,
        S: {
          stock: 3,
          price: 36000
        },
        M: {
          stock: 8,
          price: 40000
        },
        L: {
          stock: 0,
          price: 45000
        }
      },
      {
        stock_id: 31,
        S: {
          stock: 2,
          price: 32000
        },
        M: {
          stock: 0,
          price: 35000
        },
        L: {
          stock: 0,
          price: 38000
        }
      },
      {
        stock_id: 32,
        S: {
          stock: 0,
          price: 32000
        },
        M: {
          stock: 1,
          price: 35000
        },
        L: {
          stock: 0,
          price: 38000
        }
      }
    ];
    stockData.forEach((stock) => stockDB.insert(stock));
  }
})();

// READ ALL
router.get('/', async (req, res, next) => {
  try {
    const items = await stockDB.find({});
    res.json(items);
  } catch (error) {
    next(error);
  }
});

// READ One
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await stockDB.findOne({
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
    const inserted = await stockDB.insert(value);
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
    const item = await stockDB.findOne({
      _id: id,
    });
    if (!item) return next();
    await stockDB.update({
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
    await stockDB.remove({});
    res.json({
      message: 'Success',
    });
  } catch (error) {
    next(error);
  }
});

// Delete one
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    await stockDB.remove({ _id: id });
    res.json({
      message: 'Success',
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;