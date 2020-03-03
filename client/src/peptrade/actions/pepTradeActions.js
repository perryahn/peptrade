export const startRoulette = () => ({
  type: 'START_ROULETTE',
});

export const endRoulette = () => ({
  type: 'END_ROULETTE',
});

export const rouletteTick = () => ({
  type: 'ROULETTE_TICK',
});

export const resetRoulette = () => ({
  type: 'RESET_ROULETTE',
});

export const setSpFeedFetching = (data) => ({
  type: 'SET_SP_FEED_FETCHING',
  payload: data,
});

export const setSpFeed = (data) => ({
  type: 'SET_SP_FEED',
  payload: data,
});

export const orderComplete = (data) => ({
  type: 'ORDER_COMPLETE',
  payload: data,
});

export default setSpFeed;
