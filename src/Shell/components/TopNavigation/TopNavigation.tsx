import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { IUser } from '../../../interfaces';
import AuthButtons from './components/AuthButtons';
import UserMenu from './components/UserMenu';
import {
  HOME_PATH,
  LOGIN_PATH,
  LOGO_IMAGE,
  SIGN_UP_PATH,
} from '../../../common/constants';
import { routes } from './routes';
import { TopNavLink, LogoImage, TopNav, TopNavContainer, Logo } from './styles';

interface Props {
  user: IUser | null;
  logoutUser: () => void;
}

const TopNavigation: React.FC<Props> = ({ user, logoutUser }) => {
  const { pathname } = useLocation();
  console.log({ pathname });

  const isHomePage = pathname.startsWith(`/${HOME_PATH}`);
  const isAuthPage = useMemo(
    () =>
      [LOGIN_PATH, SIGN_UP_PATH].some((path) => {
        return pathname.startsWith(`/${path}`);
      }),
    [pathname]
  );

  return (
    <TopNavContainer transparent={isHomePage}>
      <TopNav>
        <ul>
          <Logo to={`/${HOME_PATH}`}>
            <LogoImage alt="logo" src={LOGO_IMAGE} />
          </Logo>

          {routes.map(({ path, label }) => (
            <TopNavLink
              key={path}
              to={`/${path}`}
              isHomePath={isHomePage}
              activeClassName="top-nav-link-active"
            >
              {label}
            </TopNavLink>
          ))}
        </ul>
      </TopNav>
      {user && (
        <UserMenu user={user} logoutUser={logoutUser} isHomePage={isHomePage} />
      )}
      {!user && !isAuthPage && <AuthButtons />}
    </TopNavContainer>
  );
};

export default TopNavigation;
