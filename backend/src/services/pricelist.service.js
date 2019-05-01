import Pricelist from '../models/Pricelist';

export const findPricelistById = async pricelistId => {
  try {
    return await Pricelist.findById(pricelistId);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const findAllPricelists = async () => {
  try {
    return await Pricelist.find();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const createPricelist = async pricelistData => {
  try {
    return await Pricelist.create(pricelistData);
  } catch (error) {
    throw new Error(error.message);
  }
};
