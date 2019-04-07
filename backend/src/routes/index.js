import express from 'express';
import articleRouter from './articleRouter';

const router = express.Router();

router.get('/home', (req, res) => {
  res.send('Hello world');
});

export { router, articleRouter };
