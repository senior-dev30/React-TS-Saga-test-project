import { call, put } from 'redux-saga/effects';

import UserActions from '../reducers/user';
import { createApi } from '../services/api';

export function* requestUsers() {
  const api = createApi();
  const response = yield call(api.getUsers);
  const { data } = response;
  if (response.ok) {
    yield put(UserActions.successUsers(data));
  } else {
    yield put(UserActions.failureUsers(data));
  }
}
