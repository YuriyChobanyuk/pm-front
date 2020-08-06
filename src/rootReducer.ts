import { history } from './history';
import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';

import { reducer as auth } from './shell/auth/ducks/authSlice';

const rootReducer = combineReducers({
  router: connectRouter(history),
  auth,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
