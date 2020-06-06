import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { store } from './configureStore';
import { history } from './history';
import { Shell } from './shell/Shell';
import { Switch, Route, Redirect } from 'react-router-dom';
import Auth from './auth/Auth';

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="App">
          <Shell>
            <Switch>
              <Route path="/auth" component={Auth} />
              <Redirect to="/home" />
            </Switch>
          </Shell>
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
