import { history } from './history';
import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';

import { reducer as auth } from './shell/auth/ducks/authSlice';
import { reducer as note } from './note-manager/ducks/notesSlice';

const rootReducer = combineReducers({
  router: connectRouter(history),
  auth,
  note,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
