import styled from 'styled-components';
import { ButtonProps } from '../types';
import Button from './Button';

export const LinkButton = styled(Button)<ButtonProps>`
  text-decoration: ${({ color }) =>
    color === 'transparent' ? 'underline' : 'none'};
`;

export const FormLinkButton = styled(LinkButton)`
  background-color: ${({ theme }) => theme.colors.lightgrey}9e;
  font-weight: 700;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.primary};
`;
