import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import { IUser } from '../../../../../interfaces/user.interface';
import styled from 'styled-components';

interface Props {
  user: IUser;
  className?: string;
  logoutUser: () => void;
  isHomePage: boolean;
}

interface UserMenuContainerProps {
  isHomePage: boolean;
}

const UserMenuContainer = styled.div<UserMenuContainerProps>`
  display: flex;
  align-items: center;
  padding: 0.6rem 1rem;
  border: 2px solid ${({ theme }) => theme.colors.primaryLighten};
  color: ${({ theme }) => theme.colors.light};
  border-radius: 0.5rem;
  background-color: ${({ isHomePage, theme }) =>
    isHomePage ? theme.colors.transparent : theme.colors.primaryLighten};
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDarken};
    border: 2px solid ${({ theme }) => theme.colors.secondary};
  }

  &:hover img {
    transform: scale(1.3);
  }
`;

const UserName = styled.span`
  font-size: 1.2rem;
  white-space: nowrap;
  margin-right: 0.8rem;
`;

const UserAvatar = styled.img`
  display: block;
  width: 2rem;
  height: 2rem;
  border-radius: 100rem;
  transition: transform 0.2s;
`;

const UserAvatarPlaceholder = styled(FontAwesomeIcon)`
  font-size: 2rem;
  border-radius: 100rem;
`;

const UserMenu: FC<Props> = ({ user, isHomePage }) => {
  const getUserAvatar = () =>
    user.img_path ? (
      <UserAvatar src={user.img_path} alt="User avatar" />
    ) : (
      <UserAvatarPlaceholder icon={faUserCircle} />
    );

  return (
    <UserMenuContainer isHomePage={isHomePage}>
      <UserName>{user.name}</UserName>
      {getUserAvatar()}
    </UserMenuContainer>
  );
};

export default UserMenu;
