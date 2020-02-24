import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import home from './home/reducers/homeReducer';
import account from './account/reducers/accountReducer';
import pepTrade from './peptrade/reducers/pepTradeReducer';

let middleware = [thunk];

if (process.env.ENV === 'debug') {
  middleware = [...middleware, logger()];
}

const reducer = combineReducers({
  home,
  account,
  pepTrade,
});

export default createStore(reducer, applyMiddleware(...middleware));
