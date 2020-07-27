import { combineReducers } from 'redux';
import { canvasPageReducer } from './pages/CanvasPage/reducer';


console.log(canvasPageReducer)
const reducers = combineReducers({
  canvasPage: canvasPageReducer,
});

export default reducers;
