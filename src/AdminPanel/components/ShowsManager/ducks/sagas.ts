import { call, put, takeEvery } from 'redux-saga/effects';
import {
  setOmdbShowDetailsDataAction,
  getOmdbShowsSearchAction,
  setOmdbShowDetailsErrorAction,
  setOmdbShowsSearchDataAction,
  setOmdbShowsSearchErrorAction,
  getOmdbShowDetailsAction,
} from './index';
import omdbService from '../../../../services/omdb.service';
import { OmdbSearchData } from '../../../../interfaces';
import { ShowData } from '../../../../interfaces/show.interface';

function* performOmdbSearchShowsSaga(
  action: ReturnType<typeof getOmdbShowsSearchAction>
) {
  try {
    const result: OmdbSearchData[] = yield call(
      omdbService.searchOmdbShow,
      action.payload
    );

    yield put(
      setOmdbShowsSearchDataAction({
        params: action.payload,
        results: result,
      })
    );
  } catch (e) {
    yield put(
      setOmdbShowsSearchErrorAction({
        params: action.payload,
        error: e,
      })
    );
  }
}

function* performOmdbShowsDetailsSaga(
  action: ReturnType<typeof getOmdbShowDetailsAction>
) {
  try {
    const result: ShowData = yield call(
      omdbService.getOmdbShowDetails,
      action.payload
    );

    yield put(
      setOmdbShowDetailsDataAction({
        params: action.payload,
        details: result,
      })
    );
  } catch (e) {
    yield put(
      setOmdbShowDetailsErrorAction({
        params: action.payload,
        error: e,
      })
    );
  }
}

export function* showsManagerSagaWatcher() {
  yield takeEvery(getOmdbShowDetailsAction.type, performOmdbShowsDetailsSaga);
  yield takeEvery(getOmdbShowsSearchAction.type, performOmdbSearchShowsSaga);
}
