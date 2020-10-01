import React, { useCallback, useState, useRef } from 'react';
import styled from 'styled-components';
import IconButton, { TableButtonProps } from '../IconButton';
import { faEllipsisV, faTimes } from '@fortawesome/free-solid-svg-icons';
import { fadeInAnimation } from '../../../../../styles/templates/animations';
import { useOutsideClick } from '../../../../hooks/outside-click-hook';

const TableControlContainer = styled.div`
  margin: 0 auto;
  position: relative;
  width: 1px;
  height: 1.5rem;
  font-size: 1.4rem;
`;

const TableControlList = styled.div<{ opened?: boolean; openedWidth?: number }>`
  position: absolute;
  top: 50%;
  right: -1.25rem;
  width: ${({ opened, openedWidth }) =>
    opened && openedWidth ? `${openedWidth}rem` : '2.5rem'};
  transform: translateY(-50%);
  display: flex;
  padding: 0.25rem;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 100rem;
  transition: 0.3s;
  box-shadow: ${({ theme, opened }) =>
    opened ? `0 0 3px 1px ${theme.colors.darken}` : 'none'};
`;

const AnimatedTableButton = styled(IconButton)<{
  delay?: number;
}>`
  font-size: 1.1rem;
  &:not(:last-child) {
    margin-right: 0.25rem;
  }
  animation: 0.3s ease-out both ${fadeInAnimation}
    ${({ delay }) => `${delay || 0}s`};
`;

interface Props {
  controls: TableButtonProps[];
  id: string;
}

const TableControl: React.FC<Props> = ({ controls, id }) => {
  const [opened, setOpened] = useState<boolean>(false);
  const handleOpen = useCallback(() => setOpened(true), []);
  const handleClose = useCallback(() => setOpened(false), []);
  const containerRef = useRef(null);

  useOutsideClick(containerRef, handleClose);

  const buttonWidth = 2;
  const buttonMargin = 0.25;
  const menuWidthOpened =
    (controls.length + 1) * (buttonMargin + buttonWidth) + buttonMargin;
  const menuAnimationDuration = 0.3;
  const getButtonDelay = (i: number) =>
    (menuAnimationDuration / (controls.length + 1)) * i;

  return (
    <TableControlContainer ref={containerRef}>
      <TableControlList opened={opened} openedWidth={menuWidthOpened}>
        {!opened ? (
          <IconButton
            id={`table-control-open-${id}`}
            label="Record menu"
            callback={handleOpen}
            icon={faEllipsisV}
            color="dark"
            fontColor="primary"
          />
        ) : (
          <>
            {controls?.map(({ callback, color, fontColor, icon, label }, i) => (
              <AnimatedTableButton
                key={`${label}-${id}`}
                id={`${label}-${id}`}
                label={label}
                callback={() => {
                  callback(id);
                  handleClose();
                }}
                icon={icon}
                color={color}
                fontColor={fontColor}
                delay={getButtonDelay(i)}
              />
            ))}
            <AnimatedTableButton
              id={`table-control-close-${id}`}
              label="Close menu"
              callback={handleClose}
              icon={faTimes}
              color="darken"
              fontColor="light"
              delay={getButtonDelay(controls.length)}
            />
          </>
        )}
      </TableControlList>
    </TableControlContainer>
  );
};

export default TableControl;
