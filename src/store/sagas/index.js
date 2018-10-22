import { all, takeLatest } from 'redux-saga/effects';

import { Types as UserTypes } from '../ducks/user';
import { Types as ProductTypes } from '../ducks/product';

import { loginUserRequest, createUserRequest } from './user';
import { createProductRequest } from './product';

export default function* rootSaga() {
  return yield all([
    takeLatest(UserTypes.LOGIN_USER_REQUEST, loginUserRequest),
    takeLatest(UserTypes.CREATE_USER_REQUEST, createUserRequest),
    takeLatest(ProductTypes.CREATE_PRODUCT_REQUEST, createProductRequest),
  ]);
}
