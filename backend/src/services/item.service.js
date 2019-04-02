import Item from '../models/Item';

export const findAllItems = async () => {
  try {
    return await Item.find();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getItemKeys = async () => {
  try {
    return Object.keys(Item.schema.obj);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const createItem = async item => {
  try {
    return await Item.create(item);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const findItemByName = async item => {
  try {
    return await Item.findOne({ name: item.name });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const findItemById = async itemId => {
  try {
    return await Item.findById(itemId);
  } catch (error) {
    throw new Error(error.message);
  }
};
