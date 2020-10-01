import React, { useCallback } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { ColorVariants } from '../../../../../styles/themes/types/theme-types';
import { Button } from '../../../../styled/buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface TableControlButtonProps {
  color: ColorVariants;
  fontColor?: ColorVariants;
}

export const TableControlButton = styled(Button)<TableControlButtonProps>`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100rem;
  padding: 1rem;

  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme, color }) => theme.colors[color]}80;

  &:not(:disabled):hover {
    color: ${({ theme, fontColor }) => fontColor || theme.colors.lightgrey};
    background-color: ${({ theme, color }) => theme.colors[color]};
  }

  &:not(:disabled):focus {
    color: ${({ theme, fontColor }) => fontColor || theme.colors.lightgrey};
    background-color: ${({ theme, color }) => theme.colors[color]};
  }
`;

export interface TableButtonProps extends TableControlButtonProps {
  callback: (id: string) => any;
  icon?: IconDefinition;
  label: string;
}

interface Props extends TableButtonProps {
  id: string;
  className?: string;
  children?: React.ReactElement;
  disabled?: boolean;
}

const IconButton: React.FC<Props> = ({
  callback,
  id,
  icon,
  color,
  fontColor,
  label,
  className,
  children,
  disabled,
}) => {
  const handleTableIconClick = useCallback(() => {
    callback(id);
  }, [callback, id]);

  return (
    <TableControlButton
      onClick={handleTableIconClick}
      color={color}
      fontColor={fontColor}
      title={label}
      className={className}
      disabled={disabled}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      {children}
    </TableControlButton>
  );
};

export default IconButton;
