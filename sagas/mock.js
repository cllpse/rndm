import { takeLatest, put } from 'redux-saga/effects';

import { ActionType } from '../actions/mock';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

const mockPayload = require('../assets/data/mock.json');

function* fetchAsync() {
  console.log('fetchAsync()');

  yield put({ type: ActionType.FetchWorking.toString() });

  yield delay(1000);

  yield put({ type: ActionType.FetchComplete.toString(), payload: mockPayload.data.results });
}

export function* watchFetch() {
  console.log('watchFetch()');

  yield takeLatest(ActionType.Fetch.toString(), fetchAsync);
}

function* fetchByIdAsync(action) {
  console.log(`fetchAsync(${action.payload})`);

  yield put({ type: ActionType.FetchByIdComplete.toString(), payload: null });

  yield put({ type: ActionType.FetchWorking.toString() });

  yield delay(2000);

  yield put({ type: ActionType.FetchByIdComplete.toString(), payload: mockPayload.data.results.filter(item => item.id === action.payload) });
}

export function* watchFetchById() {
  console.log('watchFetchById()');

  yield takeLatest(ActionType.FetchById.toString(), fetchByIdAsync);
}
