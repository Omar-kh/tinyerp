import axios from 'axios';
import {
  GET_ARTICLE_FIELDS,
  ADD_ARTICLE_SUBFIELD,
  DELETE_ARTICLE_SUBFIELD
} from './constants';

export const requestArticle = docId => {
  return async dispatch => {
    try {
      const { data } = await axios({
        method: 'get',
        url: `http://localhost:4000/articles/${docId}`
      });
      const fields =
        docId === 'new'
          ? data
          : data.filter(field => {
              return field.name !== 'changeHistory';
            });
      dispatch({ type: GET_ARTICLE_FIELDS, payload: fields });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteArticleSubField = (subField, subFieldArr) => {
  return {
    type: DELETE_ARTICLE_SUBFIELD,
    payload: { subField, subFieldArr }
  };
};

export const addArticleSubField = () => {
  return {
    type: ADD_ARTICLE_SUBFIELD,
    payload: ''
  };
};
