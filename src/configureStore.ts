import { history } from './history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from './rootReducer';

function configureStore() {
  const store = createStore(
    rootReducer, // root reducer with router state
    compose(applyMiddleware(routerMiddleware(history)))
  );

  return store;
}

export const store = configureStore();
