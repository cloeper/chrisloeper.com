import React from 'react';
import styled from 'styled-components';

import { Divider } from './Divider';

const ProfXPContainer = styled.div`
  grid-area: profXP;
  display: grid;
  grid-template-columns: 1fr 2px 1fr;
  grid-template-rows: 50px 2px auto;
  grid-template-areas:
    'header header header'
    'hDivider hDivider hDivider'
    'xpType vDivider yearsOfXP';
  column-gap: 10px;
  row-gap: 10px;
  justify-items: stretch;
  background-image: linear-gradient(to top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1));
  padding: 20px;
`;

const ProfXPBackground = styled.div`
  grid-row-start: header;
  grid-column-start: header;
  grid-row-end: yearsOfXP;
  grid-column-end: header;
  background-color: rgba(255, 255, 255, 0.1);
  margin: -20px;
`;

const Header = styled.h1`
  grid-area: header;
  justify-self: center;
  align-self: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const XPType = styled.div`
  grid-area: xpType;
  display: flex;
  justify-content: right;
`;

const YearsOfXP = styled.div`
  grid-area: yearsOfXP;
`;

export const ProfessionalExperience: React.FC = () => {
  return (
    <ProfXPContainer>
      <Header>Experience</Header>
      <Divider.Horizontal />
      <Column>
        <XPType>Professional</XPType>
        <XPType>Leadership</XPType>
        <XPType>Management</XPType>
        <XPType>Front-end</XPType>
        <XPType>Back-end</XPType>
      </Column>
      <Divider.Vertical />
      <Column>
        <YearsOfXP>2004 - Present</YearsOfXP>
        <YearsOfXP>8 Years</YearsOfXP>
        <YearsOfXP>5 Years</YearsOfXP>
        <YearsOfXP>16 Years</YearsOfXP>
        <YearsOfXP>3 Years</YearsOfXP>
      </Column>
    </ProfXPContainer>
  );
};
