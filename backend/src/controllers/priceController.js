import { priceService } from '../services';

export const getAllPrices = async (req, res, next) => {
  try {
    const prices = await priceService.findAllPrices();
    res.json(prices);
  } catch (error) {
    next(error);
  }
};

export const getPriceById = async (req, res, next) => {
  try {
    const { priceId } = req.params;
    const price = await priceService.findPriceById(priceId);
    res.json(price);
  } catch (error) {
    next(error);
  }
};

export const postPrice = async (req, res, next) => {
  try {
    const { priceArticleId, priceListId, priceNumber } = req.body;
    console.log(priceArticleId, priceListId, priceNumber);
    const priceName = await priceService.priceNamer(
      priceArticleId,
      priceListId,
      priceNumber
    );
    console.log(priceName);
    const newPrice = {
      name: priceName,
      article: priceArticleId,
      priceList: priceListId,
      value: priceNumber
    };
    console.log(newPrice);
    await priceService.createPrice(newPrice);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
};
