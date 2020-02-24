import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Main } from '../home/components/Main';

export const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/:view" render={(props) => <Main {...props} />} />
    </Switch>
  </Router>
);

export default AppRouter;
