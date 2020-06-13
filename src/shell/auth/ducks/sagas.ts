import { loginUserAction, logoutUserAction } from './actions';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getUserAction, setUserAction, setUserErrorAction } from './authSlice';
import { replace } from 'connected-react-router';
import AuthService from '../../../services/authService';
import { AuthResponse } from '../../../interfaces/auth.interface';

function* loginUserSaga(action: ReturnType<typeof loginUserAction>) {
  try {
    yield put(getUserAction());

    const { data, token }: AuthResponse = yield call(
      AuthService.loginRequest,
      action.payload.loginCredentials
    );

    localStorage.setItem('accessToken', token);

    yield put(setUserAction(data.user));

    yield put(replace('/'));
  } catch (error) {
    yield put(setUserErrorAction(error));
  }
}

function* logoutUserSaga() {
  yield put(setUserAction(null));

  yield put(replace('/login'));
}

export function* authSagaWatcher() {
  yield takeEvery(loginUserAction.type, loginUserSaga);
  yield takeEvery(logoutUserAction.type, logoutUserSaga);
}
