import axios from 'axios';
import renderMaterial from './renderMaterial';

const getData = async () => {
  // TODO: id 뽑아오기
  const id = '601adb1750b5ad711c90dbd4';
  const pRes = await axios.get('http://localhost:5000/api/products');
  const sRes = await axios.get('http://localhost:5000/api/stock');

  const product = await pRes.data.find(({ _id }) => _id === id);
  const stock = await sRes.data.find(({ stock_id: stockId }) => product.stock_id === stockId);

  const productInfo = {
    img_URL: product.img_URL,
    name: product.name,
    title: product.title,
    description: product.description,
  };

  const stockInfo = {
    s: stock.S.stock,
    m: stock.M.stock,
    l: stock.L.stock,
    sPrice: stock.S.price,
    mPrice: stock.M.price,
    lPrice: stock.L.price
  };

  renderMaterial(productInfo, stockInfo);
};

export default getData;