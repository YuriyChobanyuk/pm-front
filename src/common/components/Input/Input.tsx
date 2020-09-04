import React, { useEffect, useRef, useState } from 'react';
import { SyntheticEvent } from 'react';
import ValidationTag, { ValidationStatus } from '../ValidationTag';
import { InputLabel, InputField, CustomInputContainer } from './styles';

interface CustomInputProps {
  onChange: (e: SyntheticEvent) => any;
  onBlur: (e: SyntheticEvent) => any;
  error?: string;
  name: string;
  type: string;
  value: string;
  id: string;
  placeholder?: string;
  showLabel?: boolean;
  isTouched?: boolean;
  isValid?: boolean;
  margin?: string;
}

const Input: React.FC<CustomInputProps> = ({
  error,
  onChange,
  id,
  isTouched,
  isValid,
  margin,
  name,
  placeholder,
  type,
  value,
  onBlur,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  // top and left here points to the center of the place where tag should be
  const [validationIconPos, setIconPos] = useState<{
    top: number;
    left: number;
  }>({
    top: 0,
    left: 0,
  });
  const [status, setStatus] = useState<ValidationStatus>();
  useEffect(() => {
    if (!isTouched) {
      return;
    }
    const newStatus: ValidationStatus = isValid ? 'valid' : 'invalid';
    setStatus(newStatus);
  }, [isValid, isTouched]);
  const ICON_RIGHT_OFFSET = 24;

  useEffect(() => {
    if (!inputRef) return;
    const {
      offsetTop,
      offsetLeft,
      offsetHeight,
      offsetWidth,
    } = inputRef.current as HTMLInputElement;

    setIconPos({
      top: offsetTop + offsetHeight / 2,
      left: offsetLeft + offsetWidth - ICON_RIGHT_OFFSET,
    });
  }, [inputRef]);
  return (
    <CustomInputContainer margin={margin}>
      <InputField
        {...{
          id,
          name,
          type,
          value,
          onChange,
          onBlur,
          placeholder,
          status,
        }}
        ref={inputRef}
      />
      <InputLabel htmlFor={id} status={status}>
        {placeholder}
      </InputLabel>
      {isTouched && !isValid && (
        <ValidationTag status={status} {...validationIconPos}>
          {error}
        </ValidationTag>
      )}
      <ValidationTag status={status} {...validationIconPos} />
    </CustomInputContainer>
  );
};

export default Input;
