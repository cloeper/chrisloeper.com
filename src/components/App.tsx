import React from 'react';
import styled from 'styled-components';

import { AboutMe } from '../components/AboutMe';
import { Values } from './Values';
import { CoreTraits } from './CoreTraits';
import { JobHistory } from './JobHistory';
import { ProfessionalExperience } from './ProfessionalExperience';
import { Skills } from './Skills';

const GradientBackground = styled.div`
  background: radial-gradient(farthest-corner at 150px 150px, #1d1e1c 25%, #722a68 50%, #2a8098 70%, #16db93 90%);
  background-attachment: fixed;
  animation: colorChange 15s infinite alternate;

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

const ContentContainer = styled(GradientBackground)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto 50px auto 50px auto;
  grid-template-areas:
    'about about about about about about'
    '. profXP profXP values values .'
    '. . . . . .'
    '. traits skills skills skills .'
    '. . . . . .'
    'jobHistory jobHistory jobHistory jobHistory jobHistory jobHistory';
  column-gap: 60px;
  row-gap: 10px;
  justify-items: stretch;
  color: white;
`;

export const App = () => (
  <ContentContainer>
    <AboutMe />
    <ProfessionalExperience />
    <Values />
    <CoreTraits />
    <Skills />
    <JobHistory />
  </ContentContainer>
);
