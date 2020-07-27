import { actionTypes } from './constants';


export const initialState = {
  isLoading: true,
}

const canvasPageReducer = (pageState = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.IS_LOADING:
      return { ...pageState, isLoading: action.isLoading };
    default:
      return pageState;
  }
};

export { canvasPageReducer };
