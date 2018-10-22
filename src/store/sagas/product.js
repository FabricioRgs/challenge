import { put } from 'redux-saga/effects';

import { Creators as ProductActions } from 'store/ducks/product';
import NotificationActions from 'store/ducks/notification';

export function* createProductRequest(action) {
  try {
    yield put(ProductActions.createProductSuccess(action.data));
  } catch (err) {
    yield put(NotificationActions.notificationSendWarning({
      text: err,
    }));
    yield put(ProductActions.createUserError('Erro ao cadastrar o usuário!'));
  }
}
