import { pricelistService } from '../services';

export const getAllPricelists = async (req, res, next) => {
  try {
    const pricelists = await pricelistService.findAllPricelists();
    res.json(pricelists);
  } catch (error) {
    next(error);
  }
};

export const getPricelistById = async (req, res, next) => {
  try {
    const pricelist = await pricelistService.findPricelistById(
      req.params.pricelistId
    );
    res.json(pricelist);
  } catch (error) {
    next(error);
  }
};

export const postPricelist = async (req, res, next) => {
  try {
    const newPricelist = {
      name: req.body.name
    };
    await pricelistService.createPricelist(newPricelist);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
};
