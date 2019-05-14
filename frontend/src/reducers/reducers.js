import {
  GET_ARTICLE_FIELDS,
  ADD_ARTICLE_SUBFIELD,
  DELETE_ARTICLE_SUBFIELD
} from '../actions/constants';

const initState = {
  fields: [
    { name: 'name', value: '' },
    { name: 'reference', value: '' },
    { name: 'description', value: '' }
  ],
  subFields: ['dummy', 'mock value', 'example']
};

export const articleReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ARTICLE_FIELDS:
      return {
        ...state,
        fields: action.payload
      };
    case ADD_ARTICLE_SUBFIELD:
      return {
        ...state,
        subFields: [...state.subFields, '']
      };
    case DELETE_ARTICLE_SUBFIELD:
      const updatedFields = state.fields.filter(field => {
        return field.name !== action.payload.subFieldArr;
      });
      const updatedSubFields = state.fields.find(field => {
        return field.name === action.payload.subFieldArr;
      });
      updatedSubFields.value = updatedSubFields.value.filter(elem => {
        return elem !== action.payload.subField;
      });
      return {
        ...state,
        fields: [...updatedFields, updatedSubFields]
      };
    default:
      return state;
  }
};
