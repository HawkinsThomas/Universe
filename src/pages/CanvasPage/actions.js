import { actionTypes } from './constants';

export const setLoading = (isLoading) => ({
  type: actionTypes.IS_LOADING,
  isLoading,
});
