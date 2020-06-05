import { all } from 'redux-saga/effects';
import { authSagaWatcher } from './auth/ducks/sagas';

export default function* rootSaga() {
  yield all([authSagaWatcher()]);
}
