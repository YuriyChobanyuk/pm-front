import { all } from 'redux-saga/effects';
import { authSagaWatcher } from './Shell/components/Auth/ducks/sagas';

export default function* rootSaga() {
  yield all([authSagaWatcher()]);
}
