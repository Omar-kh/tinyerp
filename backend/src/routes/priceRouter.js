import express from 'express';
import { priceController } from '../controllers';

const priceRouter = express.Router();

priceRouter.get('/', priceController.getAllPrices);
priceRouter.post('/', priceController.postPrice);
priceRouter.get('/:priceId', priceController.getPriceById);

export default priceRouter;
