import React, { ChangeEvent, useEffect, useState, FocusEvent } from 'react';
import styled from 'styled-components';
import { CustomInputContainerProps } from '../../types';
import {
  InputField,
  InputValidationFeedback,
  DefaultInputLabel,
} from '../../styles';
import { ValidationStatus } from '../../../ValidationTag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchIcon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 1.4rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1.5rem;
  height: 1.5rem;
  transition: right 0.2s;

  path {
    fill: ${({ theme }) => theme.colors.primary}60;
  }
`;

const SearchInputContainer = styled.div<CustomInputContainerProps>`
  margin: ${({ margin }) => margin || '0'};
  position: relative;
  max-width: ${({ maxWidth }) => maxWidth || '34rem'};
    min-width: 26rem;
  }
  ${InputField}:focus + ${SearchIcon}, ${InputField}:hover + ${SearchIcon} {
    display: ${({hasValue}) => hasValue ? 'none' : 'inline'};
  }
`;

interface SearchInputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => any;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => any;
  error?: string;
  name: string;
  value: string;
  id: string;
  placeholder?: string;
  hideLabel?: boolean;
  isTouched?: boolean;
  isValid?: boolean;
  margin?: string;
  label?: string;
  maxWidth?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  name,
  value,
  id,
  onChange,
  margin,
  isTouched,
  isValid,
  error,
  placeholder,
  hideLabel,
  onBlur,
  label,
  maxWidth,
}) => {
  const [status, setStatus] = useState<ValidationStatus>();

  useEffect(() => {
    if (!isTouched) {
      return;
    }
    const newStatus: ValidationStatus = isValid ? 'valid' : 'invalid';
    setStatus(newStatus);
  }, [isValid, isTouched]);

  return (
    <SearchInputContainer margin={margin} hasValue={!!value} maxWidth={maxWidth}>
      {!hideLabel && (
        <DefaultInputLabel htmlFor={id}>{label}</DefaultInputLabel>
      )}
      <InputField
        name={name}
        type="search"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        id={id}
        status={status}
      />
      <SearchIcon icon={faSearch} />
      {isTouched && !isValid && (
        <InputValidationFeedback status={status}>
          {error}
        </InputValidationFeedback>
      )}
    </SearchInputContainer>
  );
};

export default SearchInput;
