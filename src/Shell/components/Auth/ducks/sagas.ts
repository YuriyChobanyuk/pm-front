import { call, put, takeEvery } from 'redux-saga/effects';
import {
  getUserAction,
  setUserAction,
  setUserErrorAction,
  loginUserAction,
  logoutUserAction,
  refreshUserAction,
} from './actions';
import { replace } from 'connected-react-router';
import AuthService from '../../../../services/auth.service';
import { AuthResponse } from '../../../../interfaces/auth.interface';
import localStorageService from '../../../../services/localStorage.service';

function* loginUserSaga(action: ReturnType<typeof loginUserAction>) {
  try {
    // clear error and user data and set loading to true
    yield put(getUserAction());

    const { data, token }: AuthResponse = yield call(
      AuthService.loginRequest,
      action.payload
    );

    localStorageService.setAccessToken(token);

    yield put(setUserAction(data.user));

    yield put(replace('/'));
  } catch (error) {
    yield put(setUserErrorAction(error));
  }
}

function* refreshUserSaga() {
  try {
    // clear error and user data and set loading to true
    yield put(getUserAction());

    const { data, token }: AuthResponse = yield call(
      AuthService.refreshRequest
    );

    localStorageService.setAccessToken(token);

    yield put(setUserAction(data.user));
  } catch (error) {
    yield put(setUserErrorAction(error));
  }
}

function* logoutUserSaga() {
  localStorageService.deleteAccessToken();

  yield put(setUserAction(null));

  yield put(replace('/login'));
}

export function* authSagaWatcher() {
  yield takeEvery(loginUserAction.type, loginUserSaga);
  yield takeEvery(logoutUserAction.type, logoutUserSaga);
  yield takeEvery(refreshUserAction.type, refreshUserSaga);
}
