import { css, keyframes } from 'styled-components';
import { ColorVariants } from '../themes/types/theme-types';

const getExplosiveAnimation = (initialColor: string) => keyframes`
  0% {
    background-color: ${initialColor}cc;
    width: 100%;
    height: 100%;
    display: block;
  }

  100% {
    background-color: transparent;
    width: 75rem;
    height: 75rem;
    display: none;
  }
`;

export const underline = keyframes`
  0% {
    width: 0;
  }

  100% {
    width: 100%;
  }
`;

export const explosiveAnimation = css`
  animation: 0.5s ${({ theme }) => getExplosiveAnimation(theme.colors.primary)};
`;

export const getUnderlineAnimation = (color: ColorVariants) => css`
  position: relative;
  &:before {
    content: '';
    position: absolute;
    height: 3px;
    width: 0;
    background-color: ${({ theme }) => theme.colors[color]};
    left: 0;
    bottom: 0;
  }

  &:hover:before {
    animation: underline 0.3s linear forwards;
  }
`;

export const textSlide = keyframes`
  0% {
    opacity: 0;
    right: -16rem;
  }

  100% {
    opacity: 1;
    right: 0;
  }
`;

export const getTextSlideAnimation = (animationDelay: string) => {
  return css`
  animation: ${textSlide} 1s ease-in ${animationDelay} forwards;
`
}

export const fadeInAnimation = keyframes`
  0% {
    transform: scale(0);
  }
  
  100% {
    transform: scale(1);
  }
`
export const fadeOutAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  
  100% {
    transform: scale(0);
  }
`
