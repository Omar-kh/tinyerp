import express from 'express';
import { itemController } from '../controllers';
import Item from '../models/Item';

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('Hello world');
});

router.post('/items', itemController.postItem);

export default router;
