import { createSelector } from 'reselect';
import { initialState } from './reducer';

const stateSelector = (state) => state || initialState;

export const selectHeader = () =>
  createSelector(stateSelector, (state) => state.header);

export const selectData = () =>
  createSelector(stateSelector, ({ data: { loading, error, payload } }) => ({
    loading,
    error,
    item: payload,
  }));
