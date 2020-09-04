import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { ValidationStatus } from './types';

export interface ValidationIconProps {
  status: ValidationStatus;
  top: number;
  left: number;
}

const IconContainer = styled.span<ValidationIconProps>`
  position: absolute;
  top: ${({ top }) => top || 0}px;
  left: ${({ left }) => left || 0}px;
  transform: translate(-50%, -50%);
  font-size: 1.2rem;
  display: ${({ status }) => (!!status ? 'inline-block' : 'none')};
  & path {
    fill: ${({ status, theme }) =>
      status === 'valid' ? theme.colors.success : theme.colors.danger};
  }
`;

interface Props {
  status?: ValidationStatus;
  top?: number;
  left?: number;
}

const ValidationTag: React.FC<Props> = ({ status, top, left }) => {
  if (!status) return null;
  const icon = status === 'valid' ? faCheckCircle : faTimesCircle;
  return (
    <IconContainer status={status} top={top || 0} left={left || 0}>
      <FontAwesomeIcon icon={icon} />
    </IconContainer>
  );
};

export default ValidationTag;
