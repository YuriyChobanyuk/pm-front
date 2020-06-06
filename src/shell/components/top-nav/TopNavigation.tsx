import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import cx from 'classnames/dedupe';

interface Props {}

const TopNavigation: React.FC<Props> = () => {
  const { pathname } = useLocation();

  const routes = ['notes', 'upcoming'];

  return (
    <nav>
      <Link to="/home">Personal Manager</Link>
      <ul className="container mx-auto px-4">
        {routes.map((route) => (
          <li
            className={cx(['my-link'], {
              active: pathname.includes(route),
            })}
            key={route}
          >
            <Link to={`/${route}`}>{route}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TopNavigation;
