export const reducer = (state = {
  view: 'portfolio',
}, action) => {
  switch (action.type) {
    case 'SET_VIEW': {
      return {
        ...state,
        view: action.payload,
      };
    }
    default:
  }

  return state;
};

export default reducer;
