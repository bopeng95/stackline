import { LOAD_DATA, LOAD_DATA_SUCCESS, LOAD_DATA_ERROR } from './constants';

// data actions
export const loadData = () => ({
  type: LOAD_DATA,
});

export const loadDataSuccess = (payload) => ({
  type: LOAD_DATA_SUCCESS,
  payload,
});

export const loadDataError = (error) => ({
  type: LOAD_DATA_ERROR,
  error,
});
