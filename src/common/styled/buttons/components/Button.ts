import styled from 'styled-components';
import Color from 'color';
import { ButtonProps } from '../types';

export const Button = styled.button<ButtonProps>`
  background-color: ${({ theme, color }) => theme.colors[color]};
  color: ${({ color, theme }) => {
    if (color === 'transparent') return theme.colors.info;
    return theme.constants.DARK_COLORS.includes(color)
      ? theme.colors.light
      : theme.colors.primary;
  }};
  padding: ${(props) => props.padding || '0.5rem 1rem'};
  margin: ${(props) => props.margin || '0'};
  border: none;
  outline: none;
  border-radius: 0.5rem;
  cursor: pointer;
  display: inline;
  white-space: nowrap;
  transition: 0.2s;

  &:not(:disabled):hover {
    background-color: ${({ color, theme }) => {
      if (color === 'transparent') {
        return Color(theme.colors.grey).alpha(0.5).hex();
      }
      const ratio = theme.constants.DARK_COLORS.includes(color) ? -0.2 : 0.2;
      return Color(theme.colors[color]).darken(ratio).hex();
    }};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default Button;
