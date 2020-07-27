import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import store from './store';
import CanvasPage from './pages/CanvasPage';


const history = createBrowserHistory();

console.log(Provider);

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={CanvasPage} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
