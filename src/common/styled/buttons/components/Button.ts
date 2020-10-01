import styled from 'styled-components';
import { ButtonProps } from '../types';

export const Button = styled.button<ButtonProps>`
  background-color: ${({ theme, color }) => theme.colors[color]};
  padding: ${(props) => props.padding || '0.5rem 1rem'};
  margin: ${(props) => props.margin || '0'};
  border: none;
  outline: none;
  border-radius: 0.5rem;
  cursor: pointer;
  display: inline;
  white-space: nowrap;
  transition: 0.2s;
  
  &:focus {
    box-shadow: 0 0 3px 1px ${({ theme, color }) => theme.colors[color]};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default Button;
