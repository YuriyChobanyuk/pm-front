import styled from 'styled-components';
import {
  InputFieldProps,
  InputLabelProps,
  InputValidationFeedbackProps,
  CustomInputContainerProps,
} from './types';
import { ValidationStatus } from '../ValidationTag';
import { ColorVariants } from '../../../styles/themes/types/theme-types';

function getValidationColor(
  status: ValidationStatus,
  defaultColor: ColorVariants = 'info'
): ColorVariants {
  switch (status) {
    case 'valid':
      return 'success';
    case 'invalid':
      return 'danger';
    default:
      return defaultColor;
  }
}

export const InputField = styled.input<InputFieldProps>`
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  border: 2px solid
    ${({ status, theme }) => theme.colors[getValidationColor(status)]};

  border-radius: 100rem;
  width: 100%;
  outline: none;
  margin: ${(props) => props.margin || '0'};
  transition: transform 0.3s, box-shadow 0.3s;

  &:focus {
    box-shadow: 0 0 5px 2px
      ${({ status, theme }) => theme.colors[getValidationColor(status)]}80;
  }
`;

export const InputLabel = styled.label<InputLabelProps>`
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

export const CustomInputContainer = styled.div<CustomInputContainerProps>`
  margin: ${({margin}) => margin || '1rem 1.5rem'};
  position: relative;
  max-width: ${({maxWidth}) => maxWidth || '34rem'};
    min-width: 26rem;
  }

  & input:focus + label {
    &::before {
      width: 100%;
    }
`;
