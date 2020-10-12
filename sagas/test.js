import { takeLatest, put } from 'redux-saga/effects';

import { ActionType } from '../actions/test';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* setAsync() {
  yield delay(1000);

  console.log('setAsync()', ActionType.SetSuccess.toString());

  yield put({ type: ActionType.SetSuccess.toString(), payload: 'setAsync()' });
}

function* unsetAsync() {
  yield delay(1000);

  console.log('unsetAsync()');
}

export function* watchSet() {
  yield takeLatest(ActionType.Set.toString(), setAsync);
}

export function* watchUnset() {
  yield takeLatest(ActionType.Unset.toString(), unsetAsync);
}
