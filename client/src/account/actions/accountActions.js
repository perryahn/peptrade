export const setAccount = (data) => ({
  type: 'SET_ACCOUNT',
  payload: data,
});

export const setAccountActivities = (data) => ({
  type: 'SET_ACCOUNT_ACTIVITIES',
  payload: data,
});

export const setPositions = (data) => ({
  type: 'SET_POSITIONS',
  payload: data,
});


export default setAccount;
