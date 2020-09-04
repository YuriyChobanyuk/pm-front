import { ValidationStatus } from '../ValidationTag';

export interface InputFieldProps {
  status: ValidationStatus;
  margin?: string;
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
}
