import styled from 'styled-components';
import {
  InputFieldProps,
  InputLabelProps,
  InputValidationFeedbackProps,
  CustomInputContainerProps,
} from './types';
import { getValidationColor } from '../../../utils';
import { InputDefault } from '../../../styles/templates/inputs';

export const InputField = styled('input')<InputFieldProps>`
  ${InputDefault};
  margin: ${(props) => props.margin || '0'};
`;

export const FormInputLabel = styled.label<InputLabelProps>`
    left: 50%;
    transform: translate(-50%, -30%);
    position: absolute;
    top: -1.5rem;
    color: ${({ theme }) => theme.colors.primary};
    transition: 0.3s;
    text-align: center;
    animation-fill-mode: forwards;
    padding: 0.25rem 0.5rem;
    border-radius: 3px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: .2rem;

    &::before {
      content: '';
      position: absolute;
      height: 3px;
      width: 0;
      transition: 0.3s;
      transform: translateX(-50%);
      bottom: 0;
      left: 50%;
      background-color: ${({ status, theme }) =>
        theme.colors[getValidationColor(status, 'primary')]};
`;

export const InputValidationFeedback = styled.div<InputValidationFeedbackProps>`
  position: absolute;
  color: ${({ status, theme }) =>
    theme.colors[getValidationColor(status, 'primary')]};
  font-size: 0.8rem;
  left: 2rem;
  bottom: 0;
  transform: translateY(120%);
`;

export const FormInputContainer = styled.div<CustomInputContainerProps>`
  margin: ${({ margin }) => margin || '1rem 1.5rem'};
  position: relative;
  max-width: ${({ maxWidth }) => maxWidth || '34rem'};
    min-width: 26rem;
  }

  & input:focus + label {
    &::before {
      width: 100%;
    }
`;

export const DefaultInputLabel = styled.label`
  position: absolute;
  top: 0;
  left: 1rem;
  transform: translateY(-135%);
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.darken};
`;
