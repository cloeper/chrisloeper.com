import React from 'react';
import styled from 'styled-components';

const HeroHeaderContainer = styled.div`
  height: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeroText = styled.div`
  width: 800px;
  z-index: 2;
  margin-bottom: -6px;

  h1 {
    font-size: 126px;
    animation: fadeIn 0.5s;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const HeroAttributeContainer = styled.div`
  margin-top: 20px;
  width: 800px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
`;

const HeroAttributeItem = styled.div`
  font-size: 32px;
  animation: fadeIn 3s;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const GoldDivider = styled.div`
  width: 800px;
  height: 2px;
  background: gold;
`;

export const Hero: React.FC = () => {
  return (
    <HeroHeaderContainer>
      <HeroText>
        <h2>Hello, I'm</h2>
        <h1>Chris Loeper.</h1>
      </HeroText>
      <GoldDivider />
      <HeroAttributeContainer>
        I'm passionate about leading exceptional teams and creating meaningful software. Specialized in management and front end development. Promotes a culture of authenticity, respect, and trust.
        Driven to learn and apply leadership skills and new technology to deliver impactful solutions. Social and good-natured, always open to connecting
      </HeroAttributeContainer>
    </HeroHeaderContainer>
  );
};
