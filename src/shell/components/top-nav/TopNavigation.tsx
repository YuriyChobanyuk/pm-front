import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

import cx from 'classnames/dedupe';
import classes from './top-navigation.module.scss';

interface Props {}

const TopNavigation: React.FC<Props> = () => {
  const { pathname } = useLocation();

  const routes = ['notes', 'upcoming'];

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/home">
        Personal Manger
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
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
    </Navbar>
  );
};

export default TopNavigation;
