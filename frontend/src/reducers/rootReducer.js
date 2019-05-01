const initState = {
  fields: [
    { name: 'name', value: '' },
    { name: 'reference', value: '' },
    { name: 'description', value: '' }
  ]
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
