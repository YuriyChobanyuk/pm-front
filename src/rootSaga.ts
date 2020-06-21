import { all } from 'redux-saga/effects';
import { authSagaWatcher } from './shell/auth/ducks/sagas';
import { notesSagaWatcher } from './note-manager/ducks/sagas';

export default function* rootSaga() {
  yield all([authSagaWatcher(), notesSagaWatcher()]);
}
