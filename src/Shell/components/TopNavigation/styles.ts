import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { getUnderlineAnimation } from '../../../styles/templates/animations';

interface TopNavContainerProps {
  transparent: boolean;
}

export const TopNavContainer = styled.div<TopNavContainerProps>`
  position: ${({ transparent }) => (transparent ? 'absolute' : 'relative')};
  z-index: 100;
  width: 100%;
  height: ${({ theme }) => theme.constants.TOP_NAV_HEIGHT};
  background-color: ${({ transparent, theme }) =>
    transparent ? theme.colors.transparent : theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 3rem;
`;

export const TopNav = styled.nav`
  & ul {
    display: flex;
  }

  & li {
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
`;

interface TopNavLinkProps {
  transparent: boolean;
}

export const TopNavLink = styled(NavLink)<TopNavLinkProps>`
  display: block;
  text-decoration: none;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.lightgrey};
  text-transform: capitalize;
  padding: 0.8rem 1.2rem;
  transition: 0.25s;
  border-radius: 0.25rem;
  white-space: nowrap;
  background-color: ${({ transparent, theme }) => {
    return transparent ? theme.colors.transparent : theme.colors.primary;
  }};

  &.top-nav-link-active {
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.primaryDarken};
  }

  &:not(:last-child) {
    margin-right: 0.75rem;
  }

  ${getUnderlineAnimation('secondary')};
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.light};
  font-size: 1.2rem;
  text-decoration: none;
  margin-right: 2rem;
`;

export const LogoImage = styled.img`
  display: block;
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 1rem;
`;
