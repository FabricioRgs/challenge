import { put } from 'redux-saga/effects';

import { NavigationActions } from 'react-navigation';
import { Creators as UserActions } from 'store/ducks/user';
import NotificationActions from 'store/ducks/notification';

export function* loginUserRequest() {
  try {
    const user = {
      login: 'user',
      password: '123',
    };

    yield put(UserActions.loginUserSuccess(user));
    yield put(NavigationActions.navigate({ routeName: 'home' }));
  } catch (err) {
    yield put(NotificationActions.notificationSendWarning({
      text: err,
    }));
    yield put(UserActions.loginUserError('Erro ao efetuar o login!'));
  }
}

export function* createUserRequest(action) {
  try {
    yield put(UserActions.createUserSuccess(action.userData));
  } catch (err) {
    yield put(NotificationActions.notificationSendWarning({
      text: err,
    }));
    yield put(UserActions.createUserError('Erro ao cadastrar o usuário!'));
  }
}
