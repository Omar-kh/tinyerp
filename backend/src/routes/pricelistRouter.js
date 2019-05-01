import express from 'express';
import { pricelistController } from '../controllers';

const pricelistRouter = express.Router();

pricelistRouter.get('/', pricelistController.getAllPricelists);
pricelistRouter.get('/:pricelistId', pricelistController.getPricelistById);
pricelistRouter.post('/', pricelistController.postPricelist);

export default pricelistRouter;
