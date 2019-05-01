import { unitService } from '../services';

export const getAllUnits = async (req, res, next) => {
  try {
    const allUnits = await unitService.findAllUnits();
    res.json(allUnits);
  } catch (error) {
    next(error);
  }
};

export const postUnit = async (req, res, next) => {
  try {
    const savedUnit = await unitService.saveUnit({
      name: req.body.name,
      symbol: req.body.symbol
    });
    res.json(savedUnit);
  } catch (error) {
    next(error);
  }
};

export const getUnitById = async (req, res, next) => {
  try {
    const { unitId } = req.params;
    const foundUnit = await unitService.findUnitById(unitId);
    res.json(foundUnit);
  } catch (error) {
    next(error);
  }
};
