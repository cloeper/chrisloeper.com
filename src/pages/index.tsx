import React from 'react';
import styled from 'styled-components';
import './reset.css';

const PageContainer = styled.div`
  height: 100vh;
`;

const GradientBackground = styled.div`
  height: 100%;
  background: radial-gradient(farthest-corner at 150px 150px, #1d1e1c 25%, #722a68 50%, #2a8098 70%, #16db93 90%);
  position: relative;
  pointer-events: all;
  animation: colorChange 20s infinite alternate;

  @keyframes colorChange {
    from {
      background-position: left top;
      background-size: 150% 150%;
    }
    to {
      background-position: right top;
      background-size: 150% 150%;
    }
  }
`;

const GradientOverlay = styled.div`
  height: 100%;
  background: black;
  opacity: 0.25;
  position: absolute;
  z-index: 2;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

const ContentContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 3;
  color: white;
`;

const HeroHeaderContainer = styled.div`
  height: 800px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroText = styled.div`
  h1 {
    font-size: 128px;
  }
`;

const IndexPage = () => (
  <PageContainer>
    <GradientOverlay />
    <GradientBackground>
      <ContentContainer>
        <HeroHeaderContainer>
          <HeroText>
            <h1>Chris Loeper</h1>
          </HeroText>
        </HeroHeaderContainer>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </ContentContainer>
    </GradientBackground>
  </PageContainer>
);

export default IndexPage;
