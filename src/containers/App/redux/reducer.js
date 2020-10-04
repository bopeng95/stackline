import produce from 'immer';

import { LOAD_DATA, LOAD_DATA_SUCCESS, LOAD_DATA_ERROR } from './constants';

export const initialState = {
  header: {
    // more properties if header was more complex
    title: 'Stackline',
  },
  data: {
    loading: false,
    error: false,
    payload: {},
  },
};

const reducer = (state = initialState, action) =>
  produce(state, ({ data }) => {
    switch (action.type) {
      case LOAD_DATA:
        data.loading = true;
        data.error = false;
        break;
      case LOAD_DATA_SUCCESS:
        data.loading = false;
        data.error = false;
        data.payload = action.payload;
        break;
      case LOAD_DATA_ERROR:
        data.loading = false;
        data.error = action.error;
        data.payload = null;
        break;
      default:
        break;
    }
  });

export default reducer;
