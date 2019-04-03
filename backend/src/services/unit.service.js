import Unit from '../models/Unit';

export const findUnitById = async unitId => {
  try {
    return await Unit.findById(unitId);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const saveUnit = async unitData => {
  try {
    return await Unit.save(unitData);
  } catch (error) {
    throw new Error(error.message);
  }
};
