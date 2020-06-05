import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { store } from './configureStore';
import { history } from './history';
import { Shell } from './shell/Shell';
import { Switch, Route } from 'react-router-dom';
import Auth from './auth/Auth';

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="App">
          <nav className="uk-navbar-container" uk-navbar>
            <div className="uk-navbar-left">
              <ul className="uk-navbar-nav">
                <li className="uk-active">
                  <a href="">active</a>
                </li>
                <li className="uk-parent">
                  <a href="">parent</a>
                </li>
                <li>
                  <a href="">about</a>
                </li>
              </ul>
            </div>
          </nav>
          <Shell>
            <Switch>
              <Route path="/auth" component={Auth} />
            </Switch>
          </Shell>
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
