import React from 'react';
import goldenHex from '../images/goldenhex.png';
import styled from 'styled-components';

interface IHexPositions {
  layerOne: IHexLayer;
  layerTwo: IHexLayer;
  layerThree: IHexLayer;
  layerFour: IHexLayer;
}

interface IHexLayer {
  left: IPosition;
  middle: IPosition;
  right: IPosition;
}

interface IPosition {
  top: number;
  left: number;
}

const hexPositions: IHexPositions = {
  layerOne: {
    left: { top: 217, left: 0 },
    middle: { top: 217, left: 113 },
    right: { top: 217, left: 330 },
  },
  layerTwo: {
    left: { top: 157, left: 0 },
    middle: { top: 185, left: 59 },
    right: { top: 185, left: 171 },
  },
  layerThree: {
    left: { top: 155, left: -107 },
    middle: { top: 155, left: 111 },
    right: { top: 127, left: 65 },
  },
  layerFour: {
    left: { top: 137, left: -33 },
    middle: { top: 0, left: 0 },
    right: { top: 110, left: 28 },
  },
};

export const Hex = {
  LayerOne: {
    Left: createHex(hexPositions.layerOne.left),
    Middle: createHex(hexPositions.layerOne.middle),
    Right: createHex(hexPositions.layerOne.right),
  },
};

export function createHex(pos: IPosition) {
  const HexImage = styled.img`
    position: relative;
    height: 100px;
    width: 100px;
    top: ${pos.top}px;
    left: ${pos.left}px;
  `;
  return <HexImage src={goldenHex} alt="hex" />;
}
