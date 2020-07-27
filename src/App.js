import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import CanvasPage from './pages/CanvasPage';

const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={CanvasPage} />
    </Switch>
  </Router>
);

export default App;
