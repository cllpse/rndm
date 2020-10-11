import { takeLatest, put } from 'redux-saga/effects';

import { TestActionType } from '../actions/test';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* setAsync() {
  yield delay(1000);
  console.log('setAsync()', TestActionType.SetSuccess.toString());
  yield put({ type: TestActionType.SetSuccess.toString(), payload: 'setAsync()' });
}

function* unsetAsync() {
  yield delay(1000);
  console.log('unsetAsync()');
}

export function* watchSet() {
  console.log('ffs', TestActionType.Set.toString());
  yield takeLatest(TestActionType.Set.toString(), setAsync);
}

export function* watchUnset() {
  yield takeLatest(TestActionType.Unset.toString(), unsetAsync);
}
