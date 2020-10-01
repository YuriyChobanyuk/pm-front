import React, { SyntheticEvent } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import {ADD_SHOW, ADMIN_PATH, ADMIN_SHOWS_PATH, SHOWS_PATH} from '../../../../../common/constants';

const AddShowButtonContainer = styled(Link)`
  height: 3rem;
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: 2px solid ${({ theme }) => theme.colors.primaryLighten}83;
  background-color: ${({ theme }) => theme.colors.secondaryLighten}83;
  border-radius: 100rem;
  transition: 0.3s;
  cursor: pointer;

  & > svg {
    width: 1.5rem !important;
    height: 1.5rem;

    path {
      fill: ${({ theme }) => theme.colors.primaryLighten}83;
      transition: 0.3s;
    }
  }

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.primaryLighten};
    background-color: ${({ theme }) => theme.colors.secondaryLighten};
    transform: scale(1.05);

    path {
      fill: ${({ theme }) => theme.colors.primaryLighten};
    }
  }
`;

const AddShowButton: React.FC = () => {
  return (
    <AddShowButtonContainer to={`/${ADMIN_PATH}/${ADMIN_SHOWS_PATH}/${ADD_SHOW}`} replace>
      <FontAwesomeIcon icon={faPlus} />
    </AddShowButtonContainer>
  );
};

export default AddShowButton;
