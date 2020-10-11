import { all } from 'redux-saga/effects';

import { watchSet, watchUnset } from './test';

export function* root() {
  yield all([
    watchSet(),
    watchUnset(),
  ]);
}
