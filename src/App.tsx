import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { store } from './configureStore';
import { history } from './history';

import TopBar from './navigation/top-bar/TopBar';

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="App">
          <TopBar />
          <div>status</div>
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
