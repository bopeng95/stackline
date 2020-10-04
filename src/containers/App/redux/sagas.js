import { put, takeEvery } from 'redux-saga/effects';

import jsonData from 'data/Webdev_data2.json';

import { LOAD_DATA } from './constants';
import { loadDataSuccess, loadDataError } from './actions';

const delay = (s) => new Promise((res) => setTimeout(res, s * 1000));

function* getData() {
  try {
    console.log('getting data');
    // imitate a real api call with 3 seconds delay
    yield delay(3);
    yield put(loadDataSuccess(jsonData[0]));
  } catch (e) {
    yield put(loadDataError(e.message));
  }
}

export default function* appSaga() {
  yield takeEvery(LOAD_DATA, getData);
}
