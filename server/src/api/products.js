const express = require('express');
const monk = require('monk');
const Joi = require('@hapi/joi');

const db = monk(process.env.MONGO_URI);
const productsDB = db.get('products');
const router = express.Router();

const schema = Joi.object({
  stock_id: Joi.required(),
  name: Joi.string().trim().required(),
  description: Joi.string().trim().allow(null),
  img_URL: Joi.array().required()
});

(async () => {
  const numData = await productsDB.count({}, { estimate: true });

  if (!numData) {
    const productsData = [
      {
        stock_id: 1,
        name: '윙크베이비필로우_라이언',
        description: '깜찍한 윙크 베이비필로우 타임리스 베스트셀러 베이비필로우! 이번에는 윙크하는 얼굴로 베이비필로우가 돌아왔어요',
        img_URL: [
          'https://t1.daumcdn.net/friends/prod/product/20201208112018176_8809721507247_AW_00.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20201208112018404_8809721507247_AW_01.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20201208112018494_8809721507247_AW_02.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20201208112018530_8809721507247_AW_03.jpg'
        ]
      },
      {
        stock_id: 2,
        name: '윙크베이비필로우_어피치',
        description: '깜찍한 윙크 베이비필로우 타임리스 베스트셀러 베이비필로우! 이번에는 윙크하는 얼굴로 베이비필로우가 돌아왔어요',
        img_URL: [
          'https://t1.daumcdn.net/friends/prod/product/20201208112324006_8809721507254_AW_00.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20201208112324049_8809721507254_AW_01.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20201208112324082_8809721507254_AW_02.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20201208112324160_8809721507254_AW_03.jpg'
        ]
      },
      {
        stock_id: 3,
        name: '윙크베이비필로우_무지',
        description: '깜찍한 윙크 베이비필로우 타임리스 베스트셀러 베이비필로우! 이번에는 윙크하는 얼굴로 베이비필로우가 돌아왔어요',
        img_URL: [
          'https://t1.daumcdn.net/friends/prod/product/20201208112512508_8809721507261_AW_00.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20201208112512541_8809721507261_AW_01.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20201208112513071_8809721507261_AW_02.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20201208112513104_8809721507261_AW_03.jpg'
        ]
      },
      {
        stock_id: 4,
        name: '윙크베이비필로우_프로도',
        description: '깜찍한 윙크 베이비필로우 타임리스 베스트셀러 베이비필로우! 이번에는 윙크하는 얼굴로 베이비필로우가 돌아왔어요',
        img_URL: [
          'https://t1.daumcdn.net/friends/prod/product/20201208112930174_8809721507292_AW_00.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20201208112930207_8809721507292_AW_01.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20201208112930243_8809721507292_AW_02.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20201208112931287_8809721507292_AW_03.jpg'
        ]
      },
      {
        stock_id: 5,
        name: '타이거 에디션 코스튬 인형_어피치',
        description: null,
        img_URL: [
          'https://t1.daumcdn.net/friends/prod/product/20201214190347748_8809721507667_AW_00.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20201214190347777_8809721507667_AW_01.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20201214190348023_8809721507667_AW_02.jpg'
        ]
      }
    ];
    productsData.forEach((product) => productsDB.insert(product));
  }
})();

// READ ALL
router.get('/', async (req, res, next) => {
  try {
    const items = await productsDB.find({});
    res.json(items);
  } catch (error) {
    next(error);
  }
});

// READ One
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await productsDB.findOne({
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
    const inserted = await productsDB.insert(value);
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
    const item = await productsDB.findOne({
      _id: id,
    });
    if (!item) return next();
    await productsDB.update({
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
    await productsDB.remove({ _id: id });
    res.json({
      message: 'Success',
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;