import { all, takeLatest } from 'redux-saga/effects';

import { Types as UserTypes } from '../ducks/user';

import { loginUserRequest, createUserRequest } from './user';

export default function* rootSaga() {
  return yield all([
    takeLatest(UserTypes.LOGIN_USER_REQUEST, loginUserRequest),
    takeLatest(UserTypes.CREATE_USER_REQUEST, createUserRequest),
  ]);
}
