import { put, select } from 'redux-saga/effects';

import { NavigationActions, StackActions } from 'react-navigation';
import { Creators as UserActions } from 'store/ducks/user';
import NotificationActions from 'store/ducks/notification';

// import Routes from 'navigation/routes';
import { getUserData } from './selectors';

export function* loginUserRequest(action) {
  try {
    const users = yield select(getUserData);
    const User = users.data.filter(user => user.login === action.userData.login && user.password === action.userData.password);

    if (User.length === 1) {
      yield put(UserActions.loginUserSuccess(User));
      yield put(StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'home' })],
      }));
    } else {
      yield put(UserActions.loginUserFailure('Login inexistente!'));
      yield put(NotificationActions.notificationSendWarning({
        text: 'Login inexistente!',
      }));
    }
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
