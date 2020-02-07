import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { AppRouter } from './router/AppRouter';
import store from './store';
import '../../build/app.css';

const root = document.getElementById('root');

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

const HotApp = hot(App);

ReactDOM.render(<HotApp />, root);
