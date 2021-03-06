export const reducer = (state = {
  spFeed: [],
  fetching: false,
  startedRoulette: false,
  rouletteDone: false,
  ticks: 20,
  interval: 50,
  currIdx: 0,
  order: null,
}, action) => {
  switch (action.type) {
    case 'START_ROULETTE': {
      return {
        ...state,
        startedRoulette: true,
      };
    }
    case 'ROULETTE_TICK': {
      const { spFeed, ticks, interval } = state;

      return {
        ...state,
        ticks: ticks - 1,
        interval: Math.min(700, interval
          + (ticks < 5 ? 200 : (
            Math.max(0, 25 - ticks / 2)
          ))),
        currIdx: Math.floor(Math.random() * (spFeed.length - 1)),
        rouletteDone: ticks - 1 <= 0,
      };
    }
    case 'RESET_ROULETTE': {
      return {
        ...state,
        startedRoulette: false,
        rouletteDone: false,
        ticks: 20,
        currIdx: 0,
        interval: 50,
        order: null,
      };
    }
    case 'SET_VIEW': {
      if (action.payload === 'peptrade') {
        return {
          ...state,
          startedRoulette: false,
          rouletteDone: false,
          ticks: 20,
          currIdx: 0,
          interval: 50,
          order: null,
        };
      }

      return state;
    }
    case 'ORDER_COMPLETE': {
      return {
        ...state,
        order: action.payload,
      };
    }
    case 'SET_SP_FEED_FETCHING': {
      return {
        ...state,
        fetching: action.payload,
      };
    }
    case 'SET_SP_FEED': {
      return {
        ...state,
        spFeed: action.payload,
      };
    }
    default:
  }

  return state;
};

export default reducer;
