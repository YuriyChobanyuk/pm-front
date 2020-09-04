import React from 'react';
import Sidebar from './components/Sidebar';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import {
  ADMIN_DASHBOARD_PATH,
  ADMIN_SHOWS_PATH,
  ADMIN_USERS_PATH,
} from '../common/constants';
import ShowsManagerContainer from './components/Show';
import DashboardContainer from './components/Dashboard';
import UsersManagerContainer from './components/Users';
import styled from 'styled-components';

const PageWrapper = styled.div`
  height: calc(100% - ${({ theme }) => theme.constants.TOP_NAV_HEIGHT});
  display: flex;
`;

const Content = styled.div`
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.light};
  flex: 1 1 auto;
`;

function AdminPanel() {
  const routeMatch = useRouteMatch();
  console.log(routeMatch);
  const { path } = routeMatch;
  return (
    <PageWrapper>
      <Sidebar />
      <Content>
        admin panel
        <Switch>
          <Route
            path={`${path}/${ADMIN_SHOWS_PATH}`}
            component={ShowsManagerContainer}
          />
          <Route
            path={`${path}/${ADMIN_DASHBOARD_PATH}`}
            component={DashboardContainer}
          />
          <Route
            path={`${path}/${ADMIN_USERS_PATH}`}
            component={UsersManagerContainer}
          />
        </Switch>
      </Content>
    </PageWrapper>
  );
}

export default AdminPanel;
