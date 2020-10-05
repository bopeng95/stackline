import { put, takeEvery } from 'redux-saga/effects';

import jsonData from 'data/Webdev_data2.json';

import { LOAD_DATA } from './constants';
import { loadDataSuccess, loadDataError } from './actions';

const delay = (s) => new Promise((res) => setTimeout(res, s * 1000));

function* getData() {
  try {
    // imitate a real api call with 2 seconds delay
    console.log('retrieving data for 2 seconds (imitating real api call)');
    yield delay(2);
    yield put(loadDataSuccess(jsonData[0]));
  } catch (e) {
    // if errors occur I handle it here
    yield put(loadDataError(e.message));
  }
}

export default function* appSaga() {
  yield takeEvery(LOAD_DATA, getData);
}
