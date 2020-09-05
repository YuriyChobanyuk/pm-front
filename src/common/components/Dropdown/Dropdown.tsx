import React, {
  useState,
  useRef,
  useCallback,
  FocusEvent,
  KeyboardEvent,
} from 'react';
import styled, { css } from 'styled-components';
import {
  InputBorder,
  InputDefault,
  InputFocusShadow,
} from '../../../styles/templates/inputs';
import { getValidationColor } from '../../../utils';
import { ValidationStatus } from '../ValidationTag';
import { useOutsideClick } from '../../hooks/outside-click-hook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { DefaultInputLabel } from '../Input/styles';

const DropdownHeader = styled.div<{ active: boolean }>`
  ${InputDefault};
  cursor: pointer;
  position: relative;

  ${({ active }) =>
    active &&
    `border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: none;`}
`;

interface DropdownContainerProps {
  maxWidth?: string;
  margin?: string;
  status?: ValidationStatus;
  width?: string;
}

const DropdownContainer = styled.div<DropdownContainerProps>`
  position: relative;
  max-width: ${({ maxWidth }) => maxWidth || '24rem'};
  margin: ${({ margin }) => margin || '0'};
  width: ${({ width }) => width || 'auto'};

  &:focus {
    outline: none;
    ${DropdownHeader} {
      ${InputFocusShadow};
    }
  }
`;

const DropdownIcon = styled(FontAwesomeIcon)<{ active: boolean }>`
  position: absolute;
  right: 1.3rem;
  top: 50%;
  transform: translateY(-50%);
  transition: transform 0.3s;

  path {
    fill: ${({ theme }) => theme.colors.primary};
  }

  ${({ active }) =>
    active &&
    `
    transform: translateY(-50%)  rotate(180deg);
  `}
`;

const listContainerActiveStyles = css<{
  status?: ValidationStatus;
}>`
  height: auto;
  ${InputBorder};
  border-top: none;
  padding-bottom: 1.3rem;
  box-shadow: 0 1px 1px 3px
    ${({ status, theme }) => theme.colors[getValidationColor(status)]}80;
  &::before {
    position: absolute;
    top: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    content: '';
    background-color: ${({ theme }) => theme.colors.dark};
  }
`;

const DropdownListContainer = styled.div<{
  active: boolean;
  status?: ValidationStatus;
}>`
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 0;
  transform: translateY(100%);
  max-height: 11.3rem;
  z-index: 1000;

  border-bottom-right-radius: 1.3rem;
  border-bottom-left-radius: 1.3rem;
  ${({ active }) => active && listContainerActiveStyles};
  background-color: ${({ theme }) => theme.colors.lightcyan};
`;

const ListItemsContainer = styled.ul<{ active: boolean }>`
  overflow-y: auto;
  max-height: 10rem;
  display: ${({ active }) => (active ? 'block' : 'none')};
`;

const ListItem = styled.li`
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  transition: background-color 0.25s, color 0.25s;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.light};
  &:hover {
    background-color: ${({ theme }) => theme.colors.info};
    color: ${({ theme }) => theme.colors.lightgrey};
  }
`;

const DropdownPlaceholder = styled.span`
  color: ${({ theme }) => theme.colors.dark};
`;

export interface ItemType {
  id: string;
  label: string;
}

interface Props {
  items: ItemType[];
  onChange: (item: ItemType) => any;
  selectedItem: ItemType | null;
  id: string;
  margin?: string;
  label?: string;
  placeholder?: string;
  width?: string;
  onBlur?: (e: FocusEvent<HTMLElement>) => void;
}

const Dropdown: React.FC<Props> = ({
  items,
  onChange,
  selectedItem,
  id,
  placeholder,
  label,
  margin,
  width,
  onBlur,
}) => {
  const [active, setActive] = useState(false);
  const listItems = items.filter(({ id }) => selectedItem?.id !== id);

  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const handleCloseList = useCallback(() => setActive(false), []);
  useOutsideClick(containerRef, handleCloseList);

  const setDropdownItemFocus = useCallback(
    (first: boolean) => {
      const firstListElem = listRef.current?.firstChild as HTMLLIElement;
      const lastListElem = listRef.current?.lastChild as HTMLLIElement;
      if (first) {
        firstListElem.focus();
      } else {
        lastListElem.focus();
      }
    },
    [listRef]
  );

  const handleContainerKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      console.log({ key: e.key });
      if (e.key === 'Enter' || e.key === ' ') {
        setActive((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setActive(false);
      }
      if (e.key === 'ArrowDown') {
        setDropdownItemFocus(true);
      }
      if (e.key === 'ArrowUp') {
        setDropdownItemFocus(false);
      }
    },
    [setDropdownItemFocus]
  );

  const handleListItemKeyDown = useCallback(
    (e: KeyboardEvent<HTMLLIElement>) => {
      e.stopPropagation();
      const nextItem = e.currentTarget?.nextSibling as HTMLLIElement;
      const prevItem = e.currentTarget?.previousSibling as HTMLLIElement;
      if (e.key === 'ArrowDown' && nextItem) {
        if (e.currentTarget) {
          e.currentTarget.blur();
        }
        nextItem.focus();
        return;
      }
      if (e.key === 'ArrowUp' && prevItem) {
        if (e.currentTarget) {
          e.currentTarget.blur();
        }
        prevItem.focus();
        return;
      }
      if (e.key === 'Enter' || e.key === ' ') {
        if (e.currentTarget) {
          e.currentTarget.blur();
        }
        const itemData = items.find(({ id }) => id === e.currentTarget.id);
        if (itemData) {
          onChange(itemData);
        }
        setActive(false);
      }
      if (e.key === 'Escape') {
        if (e.currentTarget) {
          e.currentTarget.blur();
        }
        setActive(false);
      }
    },
    [onChange, items]
  );

  const defaultPlaceholder = placeholder || 'Select something';

  return (
    <DropdownContainer
      ref={containerRef}
      id={id}
      tabIndex={0}
      margin={margin}
      width={width}
      onBlur={onBlur}
      onKeyDown={handleContainerKeyDown}
    >
      <DefaultInputLabel>{label}</DefaultInputLabel>
      <DropdownHeader
        active={active}
        onClick={() => setActive((prev) => !prev)}
      >
        {selectedItem?.label || (
          <DropdownPlaceholder>{defaultPlaceholder}</DropdownPlaceholder>
        )}
        <DropdownIcon icon={faAngleDown} active={active} />
      </DropdownHeader>
      <DropdownListContainer active={active}>
        <ListItemsContainer active={active} ref={listRef}>
          {listItems.map(({ id, label }) => (
            <ListItem
              key={id}
              tabIndex={0}
              id={id}
              onKeyDown={handleListItemKeyDown}
              onClick={() => {
                setActive(false);
                return onChange({ id, label });
              }}
            >
              {label}
            </ListItem>
          ))}
        </ListItemsContainer>
      </DropdownListContainer>
    </DropdownContainer>
  );
};

export default Dropdown;
