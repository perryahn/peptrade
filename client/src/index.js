import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Main } from './home/components/Main';

const app = document.getElementById('root');

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" component={Main} />
    </Switch>
  </Router>
);

ReactDOM.render(<AppRouter />, app);
