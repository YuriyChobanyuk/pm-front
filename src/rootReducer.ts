import { history } from './history';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const rootReducer = combineReducers({
  router: connectRouter(history),
});

export default rootReducer;
