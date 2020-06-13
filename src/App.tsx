import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { store } from './configureStore';
import { history } from './history';
import { Shell } from './shell/Shell';
import { Route } from 'react-router-dom';
import Auth from './shell/auth/Auth';
import NoteManager from './note-manager/NoteManager';

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="App h-100">
          <Shell>
            <Route path="/auth" component={Auth} />
            <Route path="/notes" component={NoteManager} />
          </Shell>
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
