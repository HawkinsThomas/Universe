import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import reducers from './reducers';


// Toggle between these two lines below to toggle logging on dev
// const middlewares = [thunk, sagaMiddleware, logger];
const middlewares = [thunk];

// Toggle between these two lines below to toggle using Google Chrome Redux Tools
const store = compose(applyMiddleware(...middlewares))(createStore)(reducers);
// const store = compose(applyMiddleware(...middlewares))(createStore)(
//   reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

export default store;
