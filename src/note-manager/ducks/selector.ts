import { RootState } from './../../rootReducer';
import { createSelector } from '@reduxjs/toolkit';

export const notesStateSelector = (state: RootState) => state.note;

export const getAllNotesSelector = createSelector(
  [notesStateSelector],
  (notesState) => notesState.data.notes
);

export const getNotesLoadingSelector = createSelector(
  [notesStateSelector],
  (notesState) => notesState.loading
);

export const getNotesErrorSelector = createSelector(
  [notesStateSelector],
  (notesState) => notesState.error
);
