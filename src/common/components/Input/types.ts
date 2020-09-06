import { RefObject } from 'react';
import { ValidationStatus } from '../ValidationTag';

export interface InputFieldProps {
  ref?: RefObject<any>;
  status?: ValidationStatus;
  margin?: string;
  small?: boolean;
}

export interface InputLabelProps {
  status: ValidationStatus;
}

export interface InputValidationFeedbackProps {
  status: ValidationStatus;
}

export interface CustomInputContainerProps {
  margin?: string;
  maxWidth?: string;
  hasValue?: boolean;
  small?: boolean;
}
