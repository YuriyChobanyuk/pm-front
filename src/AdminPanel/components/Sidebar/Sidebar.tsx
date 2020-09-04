import React from 'react';
import styled from 'styled-components';
import SideNav from './components/SideNav';

const SidebarWrapper = styled.div`
  height: 100%;
  width: 20rem;
  background-color: ${({ theme }) => theme.colors.light};
  border-right: 2px solid ${({ theme }) => theme.colors.dark};
  padding: 1.5rem;
`;

const PanelHeader = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

function Sidebar() {
  return (
    <SidebarWrapper>
      <PanelHeader>Admin panel</PanelHeader>
      <SideNav />
    </SidebarWrapper>
  );
}

export default Sidebar;
