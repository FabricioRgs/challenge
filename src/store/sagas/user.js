import { put } from 'redux-saga/effects';

import { Creators as UserActions } from '../ducks/user';
import NotificationActions from '../ducks/notification';

export function* loginUserRequest() {
  try {
    const user = {
      nome: 'Usuário',
      dsLogin: 'user',
      empresa: 'teste',
    };

    yield put(UserActions.loginUserSuccess(user));
  } catch (err) {
    console.tron.log('passou aqui');
    console.tron.log(err);
    yield put(NotificationActions.notificationSendWarning({
      text: err,
    }));
    yield put(UserActions.loginUserError('Erro ao efetuar o login!'));
  }
}
