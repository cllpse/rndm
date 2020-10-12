import { takeLatest, put } from 'redux-saga/effects';

import { ActionType } from '../actions/mock';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

const mockPayload = require('../assets/data/mock.json');

function* fetchAsync() {
  console.log('fetchAsync()');

  yield put({ type: ActionType.FetchWorking.toString() });

  yield delay(1000);

  console.log('mockPayload length', mockPayload.data.results.length);

  yield put({ type: ActionType.FetchComplete.toString(), payload: mockPayload.data.results });
}

export function* watchFetch() {
  console.log('watchFetch()');

  yield takeLatest(ActionType.Fetch.toString(), fetchAsync);
}
