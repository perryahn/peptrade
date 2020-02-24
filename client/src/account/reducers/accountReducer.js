export const reducer = (state = {
  account: {},
  accountActivities: [],
  positions: [],
}, action) => {
  switch (action.type) {
    case 'SET_ACCOUNT': {
      return {
        ...state,
        account: action.payload,
      };
    }
    case 'SET_ACCOUNT_ACTIVITIES': {
      return {
        ...state,
        accountActivities: action.payload,
      };
    }
    case 'SET_POSITIONS': {
      return {
        ...state,
        positions: action.payload,
      };
    }

    default:
  }

  return state;
};

export default reducer;
