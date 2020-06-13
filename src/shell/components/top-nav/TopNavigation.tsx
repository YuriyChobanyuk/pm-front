import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

import cx from 'classnames/dedupe';
import classes from './top-navigation.module.scss';
import { IUser } from '../../../interfaces/user.interface';
import AuthControl from '../auth-control/AuthControl';

interface Props {
  user: IUser | null;
}

const TopNavigation: React.FC<Props> = ({ user }) => {
  const { pathname } = useLocation();

  const routes = ['notes', 'upcoming'];

  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="px-xl-4">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="align-items-baseline order-md-1 order-sm-2"
      >
        <Navbar.Brand as={Link} to="/home">
          Personal Manger
        </Navbar.Brand>
        <Nav defaultActiveKey="/home" as="ul">
          {routes.map((route) => (
            <Nav.Item
              as="li"
              className={cx([classes.navigationLink, 'text-capitalize'], {
                active: pathname.includes(route),
              })}
              key={route}
            >
              <Nav.Link to={`/${route}`} as={Link}>
                {route}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Navbar.Collapse>
      <AuthControl user={user} className="order-md-2 order-sm-1" />
    </Navbar>
  );
};

export default TopNavigation;
