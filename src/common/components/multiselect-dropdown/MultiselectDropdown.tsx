import React, { useState, memo } from 'react';
import { Dropdown, ButtonGroup, Button } from 'react-bootstrap';
import { Field } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import capitalize from 'lodash/capitalize';

import classes from './multiselect-dropdown.module.scss';

interface Props {
  className?: string;
  name: string;
  options: string[];
  values: string[];
  title: string;
  containerId?: string;
}

const MultiselectDropdown: React.FC<Props> = ({
  className,
  name,
  options,
  values,
  title,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [forceOpen, setForceOpen] = useState(false);

  const dropdownToggle = (val: boolean) => {
    if (forceOpen) {
      setMenuOpen(true);
      setForceOpen(false);
    } else {
      setMenuOpen(val);
    }
  };

  const menuItemClickedThatShouldntCloseDropdown = () => {
    setForceOpen(true);
  };

  return (
    <div className={className || ''}>
      <Dropdown show={menuOpen} onToggle={dropdownToggle}>
        <ButtonGroup>
          <Dropdown.Toggle
            id={`dropdown-${name}`}
            className={classes.toggleButton}
          >
            {title}
          </Dropdown.Toggle>
          <Button variant="secondary" disabled>
            {!values.length ? 'No selected' : `${values.length} selected`}
          </Button>
        </ButtonGroup>
        <Dropdown.Menu className="">
          {options.map((option, index) => {
            const selected = values.includes(option);
            return (
              <Dropdown.Item
                eventKey={option}
                as="label"
                className="position-relative pl-7"
                onClick={menuItemClickedThatShouldntCloseDropdown}
              >
                {selected && (
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className={classes.selectedIcon}
                  />
                )}
                {capitalize(option)}
                <Field
                  type="checkbox"
                  name={name}
                  value={option}
                  id={`${options[index]}`}
                  className="d-none"
                />
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default memo(MultiselectDropdown);
