import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { store } from './configureStore';
import { history } from './history';
import Shell from './shell/Shell';
import { Route, Redirect } from 'react-router-dom';
import NoteManager from './note-manager/NoteManager';

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="App h-100">
          <Shell>
            <Route path="/notes" component={NoteManager} />
            <Redirect to="/home" />
          </Shell>
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
