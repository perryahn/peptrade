import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Main } from '../home/components/Main';

export const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" component={Main} />
    </Switch>
  </Router>
);

export default AppRouter;