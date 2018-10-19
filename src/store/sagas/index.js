import { all, takeLatest } from 'redux-saga/effects';

import { Types as UserTypes } from '../ducks/user';

import { loginUserRequest } from './user';

export default function* rootSaga() {
  return yield all([takeLatest(UserTypes.LOGIN_REQUEST, loginUserRequest)]);
}
