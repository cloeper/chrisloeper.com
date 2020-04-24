import React from 'react';
import styled from 'styled-components';
import './reset.css';
import './index.css';

import { Hero } from '../components/Hero';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const MissionStatementContainer = styled.div`
  width: 400px;
  height: 2000px;
`;

const NavContainer = styled.div`
  position: absolute;
  top: 600px;
  display: flex;
  flex-direction: column;
`;

const NavItem = styled.div`
  width: 200px;
  height: 75px;
  background: blueviolet;
`;

const IndexPage = () => (
  <>
    <div className="parallax">
      <div className="parallax__layer parallax__layer--back">
        <NavContainer>
          <NavItem>Mission</NavItem>
          <NavItem>Experience</NavItem>
        </NavContainer>
      </div>
      <ContentContainer>
        <Hero />
        <MissionStatementContainer>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
        </MissionStatementContainer>
      </ContentContainer>
    </div>
  </>
);

export default IndexPage;
