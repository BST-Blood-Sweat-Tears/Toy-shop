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
        character: 'lion',
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
        character: 'apeach',
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
        character: 'muzi',
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
        character: 'frodo',
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
        character: 'apeach',
        img_URL: [
          'https://t1.daumcdn.net/friends/prod/product/20201214190347748_8809721507667_AW_00.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20201214190347777_8809721507667_AW_01.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20201214190348023_8809721507667_AW_02.jpg'
        ]
      },
      {
        stock_id: 6,
        name: '리틀얼굴쿠션 무지',
        description: '오구오구 리틀얼굴쿠션 귀여운 게 최고야 짜릿해 늘 새로워! 다양한 표정을 구사하게 되어 더 귀여운 리틀 프렌즈 페이스 타입 쿠션을 만나보세요.',
        character: 'muzi',
        img_URL: [
          'https://t1.daumcdn.net/friends/prod/product/20200429151739038_8809681709514_AW_00.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20200429151739080_8809681709514_AW_01.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20200429151739141_8809681709514_AW_02.jpg'
        ]
      },
      {
        stock_id: 7,
        name: '리틀얼굴쿠션 프로도',
        description: '오구오구 리틀얼굴쿠션 귀여운 게 최고야 짜릿해 늘 새로워! 다양한 표정을 구사하게 되어 더 귀여운 리틀 프렌즈 페이스 타입 쿠션을 만나보세요.',
        character: 'frodo',
        img_URL: [
          'https://t1.daumcdn.net/friends/prod/product/20200429151905119_8809681709538_AW_00.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20200429151905172_8809681709538_AW_01.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20200429151905205_8809681709538_AW_02.jpg'
        ]
      },
      {
        stock_id: 8,
        name: '페이스 말랑쿠션 라이언',
        description: '자꾸만 손이 가는 마성의 미모 자꾸만 손이 가는 마성의 미모! 왕 큰 깐달걀 스타일의 라이언 페이스 말랑쿠션이에요.', 
        character: 'lion',
        img_URL: [
          'https://t1.daumcdn.net/friends/prod/product/20200515142251217_8809681706995_AW_04.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20200515142251265_8809681706995_AW_05.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20200515142251444_8809681706995_AW_06.jpg'
        ]
      },
      {
        stock_id: 9,
        name: '페이스 말랑쿠션 어피치',
        description: '자꾸만 손이 가는 마성의 미모 자꾸만 손이 가는 마성의 미모! 왕 큰 깐달걀 스타일의 라이언 페이스 말랑쿠션이에요.',
        character: 'apeach',
        img_URL: [
          'https://t1.daumcdn.net/friends/prod/product/20200515142328554_8809681707008_AW_04.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20200515142328708_8809681707008_AW_05.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20200515142328744_8809681707008_AW_06.jpg'
        ]
      },
      {
        stock_id: 10,
        name: '베이비드리밍 러블리애착인형 라이언',
        description: '나만의 애착라이언 소중한 애착인형과 함께 즐거운 시간을 보내는 리틀라이언. 포근포근한 인형으로 만나보세요.', 
        character: 'lion',
        img_URL: [
          'https://t1.daumcdn.net/friends/prod/product/20200331164208878_8809681706858_AW_00.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20200331164208921_8809681706858_AW_01.jpg'
        ]
      },
      {
        stock_id: 11,
        name: '베이비드리밍 러블리애착인형 프로도',
        description: '나만의 애착라이언 소중한 애착인형과 함께 즐거운 시간을 보내는 리틀라이언. 포근포근한 인형으로 만나보세요.', 
        character: 'frodo',
        img_URL: [
          'https://t1.daumcdn.net/friends/prod/product/20200331164738031_8809681706896_AW_00.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20200331164738072_8809681706896_AW_01.jpg'
        ]
      },
      {
        stock_id: 12,
        name: '윙크베이비필로우_라이언',
        description: '깜찍한 윙크 베이비필로우 타임리스 베스트셀러 베이비필로우! 이번에는 윙크하는 얼굴로 베이비필로우가 돌아왔어요',
        character: 'lion',
        img_URL: [
          'https://t1.daumcdn.net/friends/prod/product/20201208112018176_8809721507247_AW_00.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20201208112018404_8809721507247_AW_01.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20201208112018494_8809721507247_AW_02.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20201208112018530_8809721507247_AW_03.jpg'
        ]
      },
      {
        stock_id: 13,
        name: '윙크베이비필로우_어피치',
        description: '깜찍한 윙크 베이비필로우 타임리스 베스트셀러 베이비필로우! 이번에는 윙크하는 얼굴로 베이비필로우가 돌아왔어요',
        character: 'apeach',
        img_URL: [
          'https://t1.daumcdn.net/friends/prod/product/20201208112324006_8809721507254_AW_00.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20201208112324049_8809721507254_AW_01.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20201208112324082_8809721507254_AW_02.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20201208112324160_8809721507254_AW_03.jpg'
        ]
      },
      {
        stock_id: 14,
        name: '윙크베이비필로우_무지',
        description: '깜찍한 윙크 베이비필로우 타임리스 베스트셀러 베이비필로우! 이번에는 윙크하는 얼굴로 베이비필로우가 돌아왔어요',
        character: 'muzi',
        img_URL: [
          'https://t1.daumcdn.net/friends/prod/product/20201208112512508_8809721507261_AW_00.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20201208112512541_8809721507261_AW_01.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20201208112513071_8809721507261_AW_02.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20201208112513104_8809721507261_AW_03.jpg'
        ]
      },
      {
        stock_id: 15,
        name: '윙크베이비필로우_프로도',
        description: '깜찍한 윙크 베이비필로우 타임리스 베스트셀러 베이비필로우! 이번에는 윙크하는 얼굴로 베이비필로우가 돌아왔어요',
        character: 'frodo',
        img_URL: [
          'https://t1.daumcdn.net/friends/prod/product/20201208112930174_8809721507292_AW_00.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20201208112930207_8809721507292_AW_01.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20201208112930243_8809721507292_AW_02.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20201208112931287_8809721507292_AW_03.jpg'
        ]
      },
      {
        stock_id: 16,
        name: '타이거 에디션 코스튬 인형_어피치',
        description: null,
        character: 'apeach',
        img_URL: [
          'https://t1.daumcdn.net/friends/prod/product/20201214190347748_8809721507667_AW_00.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20201214190347777_8809721507667_AW_01.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20201214190348023_8809721507667_AW_02.jpg'
        ]
      },
      {
        stock_id: 17,
        name: '리틀얼굴쿠션 무지',
        description: '오구오구 리틀얼굴쿠션 귀여운 게 최고야 짜릿해 늘 새로워! 다양한 표정을 구사하게 되어 더 귀여운 리틀 프렌즈 페이스 타입 쿠션을 만나보세요.',
        character: 'muzi',
        img_URL: [
          'https://t1.daumcdn.net/friends/prod/product/20200429151739038_8809681709514_AW_00.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20200429151739080_8809681709514_AW_01.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20200429151739141_8809681709514_AW_02.jpg'
        ]
      },
      {
        stock_id: 18,
        name: '리틀얼굴쿠션 프로도',
        description: '오구오구 리틀얼굴쿠션 귀여운 게 최고야 짜릿해 늘 새로워! 다양한 표정을 구사하게 되어 더 귀여운 리틀 프렌즈 페이스 타입 쿠션을 만나보세요.',
        character: 'frodo',
        img_URL: [
          'https://t1.daumcdn.net/friends/prod/product/20200429151905119_8809681709538_AW_00.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20200429151905172_8809681709538_AW_01.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20200429151905205_8809681709538_AW_02.jpg'
        ]
      },
      {
        stock_id: 19,
        name: '페이스 말랑쿠션 라이언',
        description: '자꾸만 손이 가는 마성의 미모 자꾸만 손이 가는 마성의 미모! 왕 큰 깐달걀 스타일의 라이언 페이스 말랑쿠션이에요.', 
        character: 'lion',
        img_URL: [
          'https://t1.daumcdn.net/friends/prod/product/20200515142251217_8809681706995_AW_04.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20200515142251265_8809681706995_AW_05.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20200515142251444_8809681706995_AW_06.jpg'
        ]
      },
      {
        stock_id: 20,
        name: '페이스 말랑쿠션 어피치',
        description: '자꾸만 손이 가는 마성의 미모 자꾸만 손이 가는 마성의 미모! 왕 큰 깐달걀 스타일의 라이언 페이스 말랑쿠션이에요.',
        character: 'apeach',
        img_URL: [
          'https://t1.daumcdn.net/friends/prod/product/20200515142328554_8809681707008_AW_04.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20200515142328708_8809681707008_AW_05.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20200515142328744_8809681707008_AW_06.jpg'
        ]
      },
      {
        stock_id: 21,
        name: '베이비드리밍 러블리애착인형 라이언',
        description: '나만의 애착라이언 소중한 애착인형과 함께 즐거운 시간을 보내는 리틀라이언. 포근포근한 인형으로 만나보세요.', 
        character: 'lion',
        img_URL: [
          'https://t1.daumcdn.net/friends/prod/product/20200331164208878_8809681706858_AW_00.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20200331164208921_8809681706858_AW_01.jpg'
        ]
      },
      {
        stock_id: 22,
        name: '베이비드리밍 러블리애착인형 프로도',
        description: '나만의 애착라이언 소중한 애착인형과 함께 즐거운 시간을 보내는 리틀라이언. 포근포근한 인형으로 만나보세요.', 
        character: 'frodo',
        img_URL: [
          'https://t1.daumcdn.net/friends/prod/product/20200331164738031_8809681706896_AW_00.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20200331164738072_8809681706896_AW_01.jpg'
        ]
      },
      {
        stock_id: 23,
        name: '윙크베이비필로우_어피치',
        description: '깜찍한 윙크 베이비필로우 타임리스 베스트셀러 베이비필로우! 이번에는 윙크하는 얼굴로 베이비필로우가 돌아왔어요',
        character: 'apeach',
        img_URL: [
          'https://t1.daumcdn.net/friends/prod/product/20201208112324006_8809721507254_AW_00.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20201208112324049_8809721507254_AW_01.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20201208112324082_8809721507254_AW_02.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20201208112324160_8809721507254_AW_03.jpg'
        ]
      },
      {
        stock_id: 24,
        name: '윙크베이비필로우_무지',
        description: '깜찍한 윙크 베이비필로우 타임리스 베스트셀러 베이비필로우! 이번에는 윙크하는 얼굴로 베이비필로우가 돌아왔어요',
        character: 'muzi',
        img_URL: [
          'https://t1.daumcdn.net/friends/prod/product/20201208112512508_8809721507261_AW_00.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20201208112512541_8809721507261_AW_01.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20201208112513071_8809721507261_AW_02.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20201208112513104_8809721507261_AW_03.jpg'
        ]
      },
      {
        stock_id: 25,
        name: '윙크베이비필로우_프로도',
        description: '깜찍한 윙크 베이비필로우 타임리스 베스트셀러 베이비필로우! 이번에는 윙크하는 얼굴로 베이비필로우가 돌아왔어요',
        character: 'frodo',
        img_URL: [
          'https://t1.daumcdn.net/friends/prod/product/20201208112930174_8809721507292_AW_00.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20201208112930207_8809721507292_AW_01.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20201208112930243_8809721507292_AW_02.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20201208112931287_8809721507292_AW_03.jpg'
        ]
      },
      {
        stock_id: 26,
        name: '타이거 에디션 코스튬 인형_어피치',
        description: null,
        character: 'apeach',
        img_URL: [
          'https://t1.daumcdn.net/friends/prod/product/20201214190347748_8809721507667_AW_00.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20201214190347777_8809721507667_AW_01.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20201214190348023_8809721507667_AW_02.jpg'
        ]
      },
      {
        stock_id: 27,
        name: '리틀얼굴쿠션 무지',
        description: '오구오구 리틀얼굴쿠션 귀여운 게 최고야 짜릿해 늘 새로워! 다양한 표정을 구사하게 되어 더 귀여운 리틀 프렌즈 페이스 타입 쿠션을 만나보세요.',
        character: 'muzi',
        img_URL: [
          'https://t1.daumcdn.net/friends/prod/product/20200429151739038_8809681709514_AW_00.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20200429151739080_8809681709514_AW_01.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20200429151739141_8809681709514_AW_02.jpg'
        ]
      },
      {
        stock_id: 28,
        name: '리틀얼굴쿠션 프로도',
        description: '오구오구 리틀얼굴쿠션 귀여운 게 최고야 짜릿해 늘 새로워! 다양한 표정을 구사하게 되어 더 귀여운 리틀 프렌즈 페이스 타입 쿠션을 만나보세요.',
        character: 'frodo',
        img_URL: [
          'https://t1.daumcdn.net/friends/prod/product/20200429151905119_8809681709538_AW_00.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20200429151905172_8809681709538_AW_01.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20200429151905205_8809681709538_AW_02.jpg'
        ]
      },
      {
        stock_id: 29,
        name: '페이스 말랑쿠션 라이언',
        description: '자꾸만 손이 가는 마성의 미모 자꾸만 손이 가는 마성의 미모! 왕 큰 깐달걀 스타일의 라이언 페이스 말랑쿠션이에요.', 
        character: 'lion',
        img_URL: [
          'https://t1.daumcdn.net/friends/prod/product/20200515142251217_8809681706995_AW_04.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20200515142251265_8809681706995_AW_05.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20200515142251444_8809681706995_AW_06.jpg'
        ]
      },
      {
        stock_id: 30,
        name: '페이스 말랑쿠션 어피치',
        description: '자꾸만 손이 가는 마성의 미모 자꾸만 손이 가는 마성의 미모! 왕 큰 깐달걀 스타일의 라이언 페이스 말랑쿠션이에요.',
        character: 'apeach',
        img_URL: [
          'https://t1.daumcdn.net/friends/prod/product/20200515142328554_8809681707008_AW_04.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20200515142328708_8809681707008_AW_05.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20200515142328744_8809681707008_AW_06.jpg'
        ]
      },
      {
        stock_id: 31,
        name: '베이비드리밍 러블리애착인형 라이언',
        description: '나만의 애착라이언 소중한 애착인형과 함께 즐거운 시간을 보내는 리틀라이언. 포근포근한 인형으로 만나보세요.', 
        character: 'lion',
        img_URL: [
          'https://t1.daumcdn.net/friends/prod/product/20200331164208878_8809681706858_AW_00.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20200331164208921_8809681706858_AW_01.jpg'
        ]
      },
      {
        stock_id: 32,
        name: '베이비드리밍 러블리애착인형 프로도',
        description: '나만의 애착라이언 소중한 애착인형과 함께 즐거운 시간을 보내는 리틀라이언. 포근포근한 인형으로 만나보세요.', 
        character: 'frodo',
        img_URL: [
          'https://t1.daumcdn.net/friends/prod/product/20200331164738031_8809681706896_AW_00.jpg',
          'https://t1.daumcdn.net/friends/prod/product/20200331164738072_8809681706896_AW_01.jpg'
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

// DELETE ALL
router.delete('/', async (req, res, next) => {
  try {
    await productsDB.remove({});
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
    await productsDB.remove({ _id: id });
    res.json({
      message: 'Success',
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;