import express from 'express';
import articleRouter from './articleRouter';
import unitRouter from './unitRouter';
import priceRouter from './priceRouter';
import pricelistRouter from './pricelistRouter';

const router = express.Router();

router.get('/home', (req, res) => {
  res.send('Hello world');
});

export { router, articleRouter, unitRouter, priceRouter, pricelistRouter };
