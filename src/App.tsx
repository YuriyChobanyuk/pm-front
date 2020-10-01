import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { store } from './configureStore';
import { history } from './history';
import Shell from './Shell';
import { Route, Redirect } from 'react-router-dom';
import Landing from './Landing';
import AdminPanel from './AdminPanel';
import ShowsContainer from './Shows';
import {
  ADMIN_PATH,
  HOME_PATH,
  SHOWS_PATH,
} from './common/constants';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './styles/themes/default/default-theme';
import AdminRoute from "./Shell/components/Auth/components/AdminRoute";

function App() {

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={defaultTheme}>
          <Shell>
            <Route path={`/${HOME_PATH}`} component={Landing} />
            <AdminRoute path={`/${ADMIN_PATH}`} component={AdminPanel} />
            <Route path={`/${SHOWS_PATH}`} component={ShowsContainer} />
            <Redirect to="/home" />
          </Shell>
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
