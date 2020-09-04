import React, { FC } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { LinkButton } from '../../../../../common/styled/buttons';
import { NavLink } from 'react-router-dom';
import { SIGN_UP_PATH, LOGIN_PATH } from '../../../../../common/constants';

const AuthButtonsContainer = styled.div`
  display: flex;
  align-items: center;

  & svg {
    margin-left: 0.5rem;
  }
`;

const Separator = styled.span`
  margin: 0 0.5rem;
  color: ${({ theme }) => theme.colors.light};
  display: ${({ hidden }) => (hidden ? 'none' : 'inline')};
`;

const LoginButton = styled(LinkButton)`
  background-color: ${({ color, theme }) => theme.colors[color]};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryLighten};
  }
`;

const AuthButtons: FC = () => {
  return (
    <AuthButtonsContainer>
      <LoginButton
        color="secondary"
        as={NavLink}
        to={`/${LOGIN_PATH}`}
      >
        Login
        <FontAwesomeIcon icon={faDoorOpen} />
      </LoginButton>
      <Separator>Or</Separator>
      <LinkButton
        color="info"
        as={NavLink}
        to={`/${SIGN_UP_PATH}`}
      >
        Sign up
        <FontAwesomeIcon icon={faSignInAlt} />
      </LinkButton>
    </AuthButtonsContainer>
  );
};

export default AuthButtons;
