// import mongoose from 'mongoose';
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

// export const findItemByUnitId = async unitId => {
//   try {
//     return await Item.find({
//       unit: new mongoose.Types.ObjectId(unitId)
//     });
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

export const updateItemById = async (itemId, newData) => {
  try {
    const updatedItem = await Item.findById(itemId);
    const changeDate = new Date();
    Object.keys(newData).forEach(key => {
      updatedItem[key] = newData[key];
      if (newData[key] !== updatedItem[key]) {
        updatedItem.changeHistory.push({ changedProperty: key, changeDate });
      }
    });
    return await updatedItem.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteItemById = async itemId => {
  try {
    return await Item.findById(itemId);
  } catch (error) {
    throw new Error(error.message);
  }
};
