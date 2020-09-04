import styled from 'styled-components';
import { LANDING_PAGE_IMAGE } from '../common/constants';
import { getTextSlideAnimation } from '../styles/templates/animations';

export const LandingPageContainer = styled.div`
  overflow-x: hidden;
`

export const LandingPageTop = styled.div`
  position: relative;
  background-image: linear-gradient(
      ${({ theme }) => theme.colors.primaryDarken}B3,
      ${({ theme }) => theme.colors.primary}4D 35%
    ),
    url(${LANDING_PAGE_IMAGE});
  height: 100vh;
  width: 100vw;
  background-size: cover;
  filter: brightness(0.8) contrast(190%);
`;

export const LandingTitleContainer = styled.div`
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

interface LandingTitleProps {
  animationDelay: string;
}

export const LandingTitle = styled.span<LandingTitleProps>`
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.light};
  font-size: 5rem;
  text-transform: uppercase;
  letter-spacing: 1rem;
  word-spacing: 2rem;
  position: relative;
  opacity: 0;
  ${({ animationDelay }) => getTextSlideAnimation(animationDelay)}
`;
