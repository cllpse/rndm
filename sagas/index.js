import { all } from 'redux-saga/effects';

import { watchSet, watchUnset } from './test';

import { watchFetch, watchFetchById } from './mock';

export function* sagas() {
  yield all([
    watchSet(),
    watchUnset(),
    watchFetch(),
    watchFetchById(),
  ]);
}
