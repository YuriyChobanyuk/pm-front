import { RootState } from '../../../rootReducer';
import { createSelector } from '@reduxjs/toolkit';

export const authSelector = (state: RootState) => state.auth;
export const routerSelector = (state: RootState) => state.router;

export const userDataSelector = createSelector(
  [authSelector],
  (auth) => auth.data.user
);

export const userErrorSelector = createSelector(
  [authSelector],
  (auth) => auth.error
);

export const userLoadingSelector = createSelector(
  [authSelector],
  (auth) => auth.loading
);

export const isAuthSelector = createSelector(
  [authSelector],
  (auth) => !!auth.data.user
);
