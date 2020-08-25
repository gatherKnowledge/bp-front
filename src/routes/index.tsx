import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { TestComponent1 } from '../components/TestComponent1';
import { TestComponent2 } from '../components/TestComponent2';

import './index.scss';

const history = createBrowserHistory();

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/1" exact component={TestComponent1} />
        <Route path="/2" component={TestComponent2} />
        <Redirect path="*" to="/1" />
      </Switch>
    </Router>
  );
}

export default Routes;
