import React from 'react';
import { Switch, useRouteMatch, Route, Redirect } from 'react-router-dom';
import { ADD_SHOW, SHOW_DETAILS, SHOWS_LIST } from '../../../common/constants';
import ShowsList from './components/ShowsList';
import AddShow from './components/AddShow';
import ShowDetails from './components/ShowDetails';

function ShowsManagerContainer() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/${SHOWS_LIST}`} component={ShowsList} />
      <Route path={`${path}/${ADD_SHOW}`} component={AddShow} />
      <Route path={`${path}/${SHOW_DETAILS}`} component={ShowDetails} />
      <Redirect to={`${path}/${SHOWS_LIST}`} />
    </Switch>
  );
}

export default ShowsManagerContainer;
