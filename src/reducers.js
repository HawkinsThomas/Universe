import { combineReducers } from 'redux';
import { canvasPageReducer } from './pages/CanvasPage/reducer';


const reducers = combineReducers({
  canvasPage: canvasPageReducer,
});

export default reducers;
