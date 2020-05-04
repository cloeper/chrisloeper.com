import React from 'react';
import styled from 'styled-components';
import { Hex } from './Hex';
import { ParallaxLayerOne, ParallaxLayerTwo, ParallaxLayerThree, ParallaxLayerFour } from './ParallaxLayers';

export const HexArray: React.FC = () => {
  return (
    <>
      <ParallaxLayerOne>
        <Hex.LayerOne.Left />
        <Hex.LayerOne.Middle />
        <Hex.LayerOne.Right />
      </ParallaxLayerOne>

      <ParallaxLayerTwo>
        <Hex.LayerTwo.Left />
        <Hex.LayerTwo.Middle />
        <Hex.LayerTwo.Right />
      </ParallaxLayerTwo>

      <ParallaxLayerThree>
        <Hex.LayerThree.Left />
        <Hex.LayerThree.Middle />
        <Hex.LayerThree.Right />
      </ParallaxLayerThree>

      <ParallaxLayerFour>
        <Hex.LayerFour.Left />
        <Hex.LayerFour.Right />
      </ParallaxLayerFour>
    </>
  );
};
