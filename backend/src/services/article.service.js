// import mongoose from 'mongoose';
import Article from '../models/Article';

export const findAllArticles = async () => {
  try {
    return await Article.find();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const retrieveNewArticleFields = async () => {
  try {
    const articleFields = Object.keys(Article.schema.obj);
    articleFields.splice(articleFields.indexOf('changeHistory'), 1);
    return articleFields.map(key => {
      return {
        name: key,
        value: ''
      };
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const createArticle = async article => {
  try {
    return await Article.create(article);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const findArticleByName = async article => {
  try {
    return await Article.findOne({ name: article.name });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const findArticleById = async articleId => {
  try {
    let article = await Article.findById(articleId).select('-_id -__v');
    article = await article
      .populate({ path: 'prices', select: 'name' })
      .execPopulate();
    article = article.toObject();
    return Object.keys(article).map(key => {
      return {
        name: key,
        value: article[key]
      };
    });
  } catch (error) {
    return new Error(error.message);
  }
};

// export const findArticleByUnitId = async unitId => {
//   try {
//     return await Article.find({
//       unit: new mongoose.Types.ObjectId(unitId)
//     });
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

export const updateArticleById = async (articleId, newData) => {
  try {
    const updatedArticle = await Article.findById(articleId);
    const changeDate = new Date();
    Object.keys(newData).forEach(key => {
      updatedArticle[key] = newData[key];
      if (newData[key] !== updatedArticle[key]) {
        updatedArticle.changeHistory.push({ changedProperty: key, changeDate });
      }
    });
    return await updatedArticle.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteArticleById = async articleId => {
  try {
    return await Article.findById(articleId);
  } catch (error) {
    throw new Error(error.message);
  }
};
