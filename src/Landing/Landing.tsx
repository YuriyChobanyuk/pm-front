import React from 'react';
import {
  LandingPageTop,
  LandingTitle,
  LandingTitleContainer,
  LandingPageContainer,
} from './styles';

const Landing: React.FC = () => {
  return (
    <LandingPageContainer>
      <LandingPageTop>
        <LandingTitleContainer>
          <LandingTitle animationDelay="0.2s">schedule</LandingTitle>
          <LandingTitle animationDelay="0.3s">your</LandingTitle>
          <LandingTitle animationDelay="0.4s">destiny</LandingTitle>
        </LandingTitleContainer>
      </LandingPageTop>
    </LandingPageContainer>
  );
};

export default Landing;
