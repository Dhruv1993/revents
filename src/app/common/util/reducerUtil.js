export const createReducer = (initialState, fnMap) => {
  return (state = initialState, { type, payload }) => {
    const handler = fnMap[type];
    // console.log('here');
    return handler ? handler(state, payload) : state;
  };
};
