import React from 'react';
import styled from 'styled-components';

export const ParallaxContainer = styled.div`
  perspective: 1px;
  height: 100vh;
  min-height: 900px;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const ParallaxLayer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const ParallaxLayerBase = styled(ParallaxLayer)`
  z-index: 99;
  transform: translateZ(0);
`;

export const ParallaxLayerMenu = styled(ParallaxLayer)`
  transform: translateZ(-6px) scale(7);
  z-index: 100;
`;

export const ParallaxLayerOne = styled(ParallaxLayer)`
  transform-origin: 0 0;
  transform: translateZ(-1px) scale(3);
  z-index: 1;
  display: flex;
`;

export const ParallaxLayerTwo = styled(ParallaxLayer)`
  transform-origin: 0 0;
  transform: translateZ(-2px) scale(4.5);
  z-index: 2;
  display: flex;
`;

export const ParallaxLayerThree = styled(ParallaxLayer)`
  transform-origin: 0 0;
  transform: translateZ(-3px) scale(6);
  z-index: 3;
  display: flex;
`;

export const ParallaxLayerFour = styled(ParallaxLayer)`
  transform-origin: 0 0;
  transform: translateZ(-4px) scale(7.5);
  z-index: 4;
  display: flex;
`;
