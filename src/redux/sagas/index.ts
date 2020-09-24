import { all, takeLatest } from 'redux-saga/effects';

import { requestUsers } from './user';
import { UserActionTypes } from '../reducers/user';

export const rootSaga = function* root() {
  yield all([takeLatest(UserActionTypes.REQUEST_USERS, requestUsers)]);
};
