import express from 'express';
import { itemController } from '../controllers';

const itemRouter = express.Router();

itemRouter.get('/items', itemController.getAllItems);

itemRouter.post('/items', itemController.postItem);

itemRouter.get('/items/new', itemController.getNewItemForm);

itemRouter.get('/items/:item_id', (req, res, next) => {
  // Send the item requested in JSON format
});

itemRouter.put('/items/:item_id', (req, res, next) => {
  // Take the new information and update the item
});

itemRouter.delete('/items/:item_id', (req, res, next) => {
  // Check if the item is referenced in another Module
  // If it is, send an error
  // Else, delete it
});

export default itemRouter;
