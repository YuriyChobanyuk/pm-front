import { RootState } from '../../../../rootReducer';
import { createSelector } from '@reduxjs/toolkit';

export const showsManagerStateSelector = (state: RootState) =>
  state.showsManager;

export const showsManagerDataSelector = createSelector(
  [showsManagerStateSelector],
  (showsManagerState) => showsManagerState.data
);

export const showsManagerErrorSelector = createSelector(
  [showsManagerStateSelector],
  (showsManagerState) => showsManagerState.error
);

export const showsManagerLoadingSelector = createSelector(
  [showsManagerStateSelector],
  (showsManagerState) => showsManagerState.loading
);

export const omdbSearchResultsSelector = createSelector(
  [showsManagerDataSelector],
  data => data.searchResults
)

export const omdbDetailsResultsSelector = createSelector(
  [showsManagerDataSelector],
  data => data.showsDetails
)
