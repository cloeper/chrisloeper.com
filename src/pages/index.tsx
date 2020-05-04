import React from 'react';
import styled from 'styled-components';
import './reset.css';
import './index.css';

import { Hero } from '../components/Hero';
import { Nav } from '../components/Nav';
import { ParallaxContainer, ParallaxLayerMenu, ParallaxLayerBase } from '../components/ParallaxLayers';
import { HexArray } from '../components/HexArray';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const IndexPage = () => (
  <>
    <ParallaxContainer>
      <ParallaxLayerBase>
        <ContentContainer>
          <Hero />
        </ContentContainer>
      </ParallaxLayerBase>
      <ParallaxLayerMenu>
        <Nav />
      </ParallaxLayerMenu>
      <HexArray />
    </ParallaxContainer>
  </>
);

export default IndexPage;
