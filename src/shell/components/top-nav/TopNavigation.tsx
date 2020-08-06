import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Nav, Navbar, Figure } from 'react-bootstrap';

import cx from 'classnames/dedupe';
import classes from './top-navigation.module.scss';
import { IUser } from '../../../interfaces/user.interface';
import AuthControl from '../auth-control/AuthControl';
import UserMenu from '../user-menu/UserMenu';

interface Props {
  user: IUser | null;
  logoutUser: () => void;
}

const TopNavigation: React.FC<Props> = ({ user, logoutUser }) => {
  const { pathname } = useLocation();

  const isHomePage = pathname.includes('home');

  const routes = ['upcoming'];

  const navbarClasses = cx(
    {
      [classes.navigationBar_home]: isHomePage,
    },
    'px-xl-4'
  );

  return (
    <Navbar
      bg={!isHomePage ? 'primary' : undefined}
      variant="dark"
      expand="lg"
      className={navbarClasses}
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="align-items-baseline order-md-1 order-sm-2"
      >
        <Navbar.Brand as={Link} to="/home">
          <Figure className={classes.brandFigure}>
            <Figure.Image
              width={32}
              height={32}
              alt="logo"
              src="pm-logo-drawing.png"
              className={classes.brandFigureImg}
            />
          </Figure>
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
      {user ? (
        <UserMenu
          user={user}
          className="order-md-2 order-sm-1"
          logoutUser={logoutUser}
          isHomePage={isHomePage}
        />
      ) : (
        <AuthControl className="order-md-2 order-sm-1" />
      )}
    </Navbar>
  );
};

export default TopNavigation;
