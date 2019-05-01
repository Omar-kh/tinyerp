import Unit from '../models/Unit';

export const findAllUnits = async () => {
  try {
    return await Unit.find();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const findUnitById = async unitId => {
  try {
    return await Unit.findById(unitId);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const saveUnit = async unitData => {
  try {
    return await Unit.create(unitData);
  } catch (error) {
    throw new Error(error.message);
  }
};
