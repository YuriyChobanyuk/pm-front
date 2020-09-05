import { all } from 'redux-saga/effects';
import { authSagaWatcher } from './Shell/components/Auth/ducks';
import { showsManagerSagaWatcher } from './AdminPanel/components/ShowsManager/ducks';

export default function* rootSaga() {
  yield all([authSagaWatcher(), showsManagerSagaWatcher()]);
}
