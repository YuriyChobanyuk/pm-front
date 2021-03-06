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
  display: flex;
  align-items: center;

  ${({ active }) =>
    active &&
    `border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 2px solid transparent;`}
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

  ${({ active }) => active && `transform: translateY(-50%)  rotate(180deg);`}
`;

interface ActiveProps {
  status?: ValidationStatus;
}

const listContainerActiveStyles = css<ActiveProps>`
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

interface DropdownListContainerProps {
  active: boolean;
  status?: ValidationStatus;
}

const DropdownListContainer = styled.div<DropdownListContainerProps>`
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

  const handleContainerKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      const firstListElem = listRef.current?.firstChild as HTMLLIElement;
      const lastListElem = listRef.current?.lastChild as HTMLLIElement;
      switch (e.key) {
        case 'Enter':
        case ' ': {
          setActive((prev) => !prev);
          break;
        }
        case 'Escape': {
          setActive(false);
          break;
        }
        case 'ArrowDown': {
          if (firstListElem) {
            firstListElem.focus();
          }
          break;
        }
        case 'ArrowUp': {
          if (lastListElem) {
            lastListElem.focus();
          }
          break;
        }
        default:
          return;
      }
    },
    []
  );

  const handleListItemKeyDown = useCallback(
    (e: KeyboardEvent<HTMLLIElement>) => {
      e.stopPropagation();
      const nextItem = e.currentTarget?.nextSibling as HTMLLIElement;
      const prevItem = e.currentTarget?.previousSibling as HTMLLIElement;
      switch (e.key) {
        case 'Enter':
        case ' ': {
          const itemData = items.find(({ id }) => id === e.currentTarget.id);
          if (itemData) {
            onChange(itemData);
          }
          setActive(false);
          containerRef.current?.focus();
          break;
        }
        case 'ArrowDown': {
          if (nextItem) {
            nextItem.focus();
          }
          break;
        }
        case 'ArrowUp': {
          if (prevItem) {
            prevItem.focus();
          }
          break;
        }
        case 'Escape': {
          setActive(false);
          containerRef.current?.focus();
          break;
        }
        default:
          return;
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
      role="options"
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
