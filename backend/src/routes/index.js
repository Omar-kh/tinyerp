import express from 'express';
import itemRouter from './itemRouter';

const router = express.Router();

router.get('/home', (req, res) => {
  res.send('Hello world');
});

export { router, itemRouter };
