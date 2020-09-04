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
  color: ${({ active, theme }) =>
    active ? theme.colors.secondary : theme.colors.primary};
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

  console.log({ location, url });

  return (
    <SidebarList>
      {menuOptions.map(({ title, path, icon }) => (
        <SidebarListItem
          active={location.pathname.includes(`${ADMIN_PATH}/${path}`)}
        >
          <SidebarLink to={`${url}/${path}`}>
            <SidebarIcon icon={icon} />
            {title}
          </SidebarLink>
        </SidebarListItem>
      ))}
    </SidebarList>
  );
}

export default SideNav;
