const initState = {
  fields: [
    { name: 'name', value: '' },
    { name: 'reference', value: '' },
    { name: 'description', value: '' }
  ],
  subFields: ['dummy', 'mock value', 'example']
};

const rootReducer = (state = initState, action) => {
  if (action.type === 'DELETE_SUBFIELD') {
    const newSubFields = state.subFields.filter(subField => {
      return action.name !== subField;
    });
    return {
      ...state,
      subFields: newSubFields
    };
  }
  return state;
};

export default rootReducer;
