import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from './store';
import theme from './theme';
import CanvasPage from './pages/CanvasPage';


const history = createBrowserHistory();


const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={CanvasPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  </Provider>
);

export default App;
