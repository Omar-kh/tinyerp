import { articleService, unitService } from '../services';

export const getAllArticles = async (req, res, next) => {
  try {
    const allArticles = await articleService.findAllArticles();
    res.json(allArticles);
  } catch (error) {
    next(error);
  }
};

export const getArticleById = async (req, res, next) => {
  const { articleId } = req.params;
  try {
    const articleFound = await articleService.findArticleById(articleId);
    res.json(articleFound);
  } catch (error) {
    next(error);
  }
};

export const postArticle = async (req, res, next) => {
  const article = { name: req.body.name, description: req.body.description };
  const articleUnit = await unitService.findUnitById(
    '5ca4b7472a1ce725512e8188'
  );
  article.unit = articleUnit;
  try {
    await articleService.createArticle(article);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
};

export const getNewArticleForm = async (req, res, next) => {
  try {
    const formFields = await articleService.retrieveNewArticleFields();
    console.log(formFields);
    res.send(formFields);
  } catch (error) {
    next(error);
  }
};

export const putArticleById = async (req, res, next) => {
  const { articleId } = req.params;
  const { newData } = req.body;
  try {
    const updatedArticle = await articleService.updateArticleById(
      articleId,
      newData
    );
    res.json(updatedArticle);
  } catch (error) {
    next(error);
  }
};

export const getArticleByName = async (req, res, next) => {
  const { article } = req.body;
  try {
    const articleFound = await articleService.findArticleByName(article);
    res.json(articleFound);
  } catch (error) {
    next(error);
  }
};
