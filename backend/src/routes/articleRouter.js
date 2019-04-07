import express from 'express';
import { articleController } from '../controllers';

const articleRouter = express.Router();

articleRouter.get('/', articleController.getAllArticles);

articleRouter.post('/', articleController.postArticle);

articleRouter.get('/new', articleController.getNewArticleForm);

articleRouter.get('/:articleId', articleController.getArticleById);

articleRouter.put('/:articleId', articleController.putArticleById);

articleRouter.delete('/:articleId', (req, res, next) => {
  // Check if the item is referenced in another Module
  // If it is, send an error
  // Else, delete it
});

export default articleRouter;
