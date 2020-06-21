import {
  getNotesAction,
  setNotesAction,
  setNotesErrorAction,
  setOneNoteAction,
} from './notesSlice';
import { call, put, takeEvery } from 'redux-saga/effects';
import notesService from '../../services/note.service';
import { addOneNoteAction } from './actions';

function* getNotesSaga(action: ReturnType<typeof getNotesAction>) {
  try {
    const notes = yield call(notesService.getNotes);

    yield put(setNotesAction(notes));
  } catch (e) {
    yield put(setNotesErrorAction(e));
  }
}

function* addNoteSaga(action: ReturnType<typeof addOneNoteAction>) {
  try {
    const note = yield call(notesService.addNote, action.payload);

    yield put(setOneNoteAction(note));
  } catch (e) {
    yield put(setNotesErrorAction(e));
  }
}

export function* notesSagaWatcher() {
  yield takeEvery(getNotesAction.type, getNotesSaga);
  yield takeEvery(addOneNoteAction.type, addNoteSaga);
}
