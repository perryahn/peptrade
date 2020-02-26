import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import home from './home/reducers/homeReducer';
import account from './account/reducers/accountReducer';
import pepTrade from './peptrade/reducers/pepTradeReducer';

let middleware = [thunk];

if (process.env.ENV !== 'production') {
  middleware = [...middleware, createLogger()];
}

const reducer = combineReducers({
  home,
  account,
  pepTrade,
});

export default createStore(reducer, applyMiddleware(...middleware));
