import Price from '../models/Price';
import Article from '../models/Article';
import Pricelist from '../models/Pricelist';

export const findAllPrices = async () => {
  try {
    return await Price.find();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const findPriceById = async priceId => {
  try {
    return await Price.findById(priceId);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const createPrice = async priceData => {
  try {
    return await Price.create(priceData);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const priceNamer = async (articleId, priceListId, price) => {
  try {
    let articleName = await Article.findById(articleId);
    articleName = articleName.name;
    let priceListName = await Pricelist.findById(priceListId);
    priceListName = priceListName.name;
    return `${articleName} - ${priceListName} - ${price}`;
  } catch (error) {
    throw new Error(error.message);
  }
};
