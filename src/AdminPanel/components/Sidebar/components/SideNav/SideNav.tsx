import React from 'react';
import { menuOptions } from './sidebar-nav';
import { ADMIN_PATH } from '../../../../../common/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

const SidebarList = styled.ul`
  display: flex;
  flex-direction: column;
`;

interface SidebarListItemProps {
  active: boolean;
}

const SidebarListItem = styled.li<SidebarListItemProps>`
  border-radius: 0.25rem;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.primaryLighten : theme.colors.grey};
  transition: 0.2s background-color;
  text-transform: capitalize;
  color: ${({ active, theme }) =>
    active ? theme.colors.light : theme.colors.primary};
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

const SidebarLink = styled(Link)`
  display: block;
  padding: 0.6rem 0.5rem;
  color: inherit;
  text-decoration: none;
`;

const SidebarIcon = styled(FontAwesomeIcon)`
  margin-right: 1rem;
  margin-left: 0.5rem;
`;

function SideNav() {
  const location = useLocation();
  const { url } = useRouteMatch();

  return (
    <SidebarList>
      {menuOptions.map(({ label, path, icon }) => (
        <SidebarListItem
          active={location.pathname.includes(`${ADMIN_PATH}/${path}`)}
          key={path}
        >
          <SidebarLink to={`${url}/${path}`}>
            <SidebarIcon icon={icon} />
            {label}
          </SidebarLink>
        </SidebarListItem>
      ))}
    </SidebarList>
  );
}

export default SideNav;
