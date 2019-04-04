import { itemService, unitService } from '../services';

const {
  createItem,
  findItemById,
  findAllItems,
  getItemKeys,
  updateItemById
} = itemService;

const { findUnitById } = unitService;

export const getAllItems = async (req, res, next) => {
  try {
    const allItems = await findAllItems();
    res.json(allItems);
  } catch (error) {
    next(error);
  }
};

export const getItemById = async (req, res, next) => {
  const { item_id } = req.params;
  try {
    const itemFound = await findItemById(item_id);
    console.log(itemFound.toJSON());
    res.json(itemFound);
  } catch (error) {
    next(error);
  }
};

export const postItem = async (req, res, next) => {
  const { item } = req.body;
  const itemUnit = await findUnitById('5ca4b7472a1ce725512e8188');
  item.unit = itemUnit;
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

export const putItemById = async (req, res, next) => {
  const { item_id } = req.params;
  const { newData } = req.body;
  try {
    const updatedItem = await updateItemById(item_id, newData);
    res.json(updatedItem);
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
