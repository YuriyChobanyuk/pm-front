import styled from 'styled-components';

export const AuthFormContainer = styled.div`
  height: calc(100% - ${({ theme }) => theme.constants.TOP_NAV_HEIGHT});
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AuthForm = styled.form`
  height: calc(100vh - ${({ theme }) => theme.constants.TOP_NAV_HEIGHT});
  width: 50%;
  min-width: 34rem;
  display: flex;
  flex-direction: column;
  padding: 3rem 1.5rem;
  align-items: stretch;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.lightgrey}B3;
  overflow: hidden;
  position: relative;

  & h3 {
    font-family: ${({ theme }) => theme.fonts.title};
    text-align: center;
    padding: 1rem 1.5rem;
    margin-bottom: 2.5rem;
    font-size: 3.25rem;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    color: ${({ theme }) => theme.colors.primary};
    border: 0.4rem solid ${({ theme }) => theme.colors.primary};
    border-bottom: none;
    align-self: center;
    position: relative;

    &::after,
    &::before {
      position: absolute;
      content: '';
      height: 0.4rem;
      width: 300%;
      bottom: 0;
      background-color: ${({ theme }) => theme.colors.primary};
    }

    &::after {
      left: 0;
      transform: translateX(-100%);
    }
    &::before {
      right: 0;
      transform: translateX(100%);
    }
  }
`;

export const FormButtonContainer = styled.div`
  display: flex;
  margin: 0 auto;
  min-width: 26rem;
  flex-direction: column;

  & a {
    align-self: flex-start;
  }

  & button {
    align-self: center;
  }
`;

export const FormButtonSignUpContainer = styled.div`
  display: flex;
  margin: 0 auto;
  min-width: 26rem;
  align-items: center;
  justify-content: space-between;
`;

interface BackgroundImageProps {
  imgUrl: string;
}

export const BackgroundImage = styled.div<BackgroundImageProps>`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: -1;
  display: block;
  background-image: url(${({ imgUrl }) => imgUrl});
  background-size: cover;
  filter: blur(5px);
`;
