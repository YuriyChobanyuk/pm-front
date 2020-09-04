import styled from 'styled-components';
import { ButtonProps } from '../types';
import { explosiveAnimation } from '../../../../styles/templates/animations';
import Button from './Button';

export const SubmitButton = styled(Button).attrs(({
    type: 'submit'
}))<ButtonProps>`
  padding: 0.8rem 1.6rem;
  font-size: 1.3rem;
  letter-spacing: 0.2rem;
  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;
  margin: ${(props) => props.margin || '1.5rem 0 0 0'};
  border-radius: 100rem;
  text-transform: uppercase;
  font-weight: 700;

  &::before {
    position: absolute;
    content: '';
    border-radius: 100rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 0.25rem ${({ theme }) => theme.colors.primary};
  }

  &:not(:disabled):hover::before {
    ${explosiveAnimation};
  }
`;
