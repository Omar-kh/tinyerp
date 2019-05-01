import express from 'express';
import * as unitController from '../controllers/unitController';

const unitRouter = express.Router();

unitRouter.get('/', unitController.getAllUnits);
unitRouter.post('/', unitController.postUnit);
unitRouter.get('/:unitId', unitController.getUnitById);

export default unitRouter;
