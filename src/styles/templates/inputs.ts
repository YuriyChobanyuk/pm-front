import { css } from 'styled-components';
import { getValidationColor } from '../../utils';
import { ValidationStatus } from '../../common/components/ValidationTag';

export const InputFocusShadow = css<{ status?: ValidationStatus }>`
  box-shadow: 0 0 1px 3px
    ${({ status, theme }) => theme.colors[getValidationColor(status)]}80;
`;

export const InputBorder = css<{ status?: ValidationStatus }>`
  border: 2px solid
    ${({ status, theme }) => theme.colors[getValidationColor(status)]};
`;

export const InputDefault = css<{ status?: ValidationStatus }>`
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  ${InputBorder};
  border-radius: 1.3rem;
  width: 100%;
  min-height: 2.625rem;
  outline: none;
  transition: 0.3s;
  background-color: ${({ theme }) => theme.colors.lightcyan};

  &:focus {
    ${InputFocusShadow};
  }
`;

export const SmallInputDefault = css<{ status?: ValidationStatus }>`
  padding: 0.5rem .5rem .5rem 1rem;
  font-size: .9rem;
  border-radius: 100rem;
  width: 100%;
  min-height: 2rem;
`;
