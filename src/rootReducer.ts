import { history } from './history';
import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';

import authReducer from './Shell/components/Auth/ducks';

const rootReducer = combineReducers({
  router: connectRouter(history),
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
