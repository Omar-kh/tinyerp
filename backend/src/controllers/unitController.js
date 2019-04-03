import { saveUnit, findUnitById } from '../services/unit.service';

export const postUnit = async (req, res, next) => {
  try {
    const savedUnit = await saveUnit;
    res.json(savedUnit);
  } catch (error) {
    next(error);
  }
};

export const getUnitById = async (req, res, next) => {
  try {
    const { unit_id } = req.params;
    const foundUnit = await findUnitById(unit_id);
    res.json(foundUnit);
  } catch (error) {
    next(error);
  }
};
