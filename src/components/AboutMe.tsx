import React from 'react';
import styled from 'styled-components';

import { Highlight } from './Highlight';
import { Divider } from './Divider';

import chris from '../images/chris.jpg';

const AboutMeContainer = styled.div`
  grid-area: about;
  display: grid;
  grid-template-columns: 28% auto 28%;
  grid-template-rows: 200px auto 10px auto 75px;
  grid-template-areas:
    '. intro .'
    'pic name .'
    'pic hDivider .'
    'pic about .'
    '. bottomHDivider .';
  column-gap: 10px;
  row-gap: 10px;
  justify-items: stretch;
`;

const HelloText = styled.h2`
  grid-area: intro;
  align-self: end;
  animation: textMoveDown 0.2s;
`;

const NameText = styled.h1`
  grid-area: name;
  z-index: 2;
  font-size: 130px;
  animation: textMoveFromLeft 1s;

  @keyframes textMoveFromLeft {
    from {
      transform: translateX(-30px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

const AboutMeParagraph = styled.div`
  grid-area: about;
  animation: textMoveDown 1s;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 20px;
  background-image: linear-gradient(180deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1));

  @keyframes textMoveDown {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const ProfileImage = styled.img`
  grid-area: pic;
  justify-self: end;
  align-self: center;
  border-radius: 50%;
  width: 200px;
`;

export const AboutMe: React.FC = () => {
  return (
    <AboutMeContainer>
      <HelloText>Hello, I'm</HelloText>
      <NameText>Chris Loeper.</NameText>
      <Divider.Horizontal marginTop={-20} />
      <ProfileImage src={chris} alt="chris pic" />
      <AboutMeParagraph>
        <p>
          I'm passionate about <Highlight>living my values</Highlight> and applying them to the tech industry. My goal is to <Highlight>lead exceptional teams</Highlight> and
          create meaningful software. My specialties are management, front end development, and engineering process. Building a culture of <Highlight>authenticity</Highlight>,{' '}
          <Highlight>respect</Highlight>, <Highlight>empathy</Highlight>, and <Highlight>trust</Highlight> is in my DNA and I push hard to bring maturity into any organization I'm
          a part of. I'm driven to learn and apply leadership and technical skills to <Highlight>deliver effective solutions</Highlight>. I'm a{' '}
          <Highlight>social introvert</Highlight> and good-natured, always open to connecting.
        </p>
      </AboutMeParagraph>
      <Divider.Horizontal gridArea="bottomHDivider" />
    </AboutMeContainer>
  );
};
