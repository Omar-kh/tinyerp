import { itemService } from '../services';

const { createItem, findItemByName, findAllItems, getItemKeys } = itemService;

export const getAllItems = async (req, res, next) => {
  try {
    const allItems = await findAllItems();
    res.json(allItems);
  } catch (error) {
    next(error);
  }
};

export const postItem = async (req, res, next) => {
  const { item } = req.body;
  try {
    await createItem(item);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
};

export const getNewItemForm = async (req, res, next) => {
  try {
    const formFields = await getItemKeys();
    res.json(formFields);
  } catch (error) {
    next(error);
  }
};

export const getItemByName = async (req, res, next) => {
  const { item } = req.body;
  try {
    const itemFound = await findItemByName(item);
    res.json(itemFound);
  } catch (error) {
    next(error);
  }
};
