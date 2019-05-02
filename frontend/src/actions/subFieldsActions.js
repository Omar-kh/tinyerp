export const deleteSubField = subField => {
  return {
    type: 'DELETE_SUBFIELD',
    name: subField
  };
};
