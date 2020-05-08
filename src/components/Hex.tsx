import React from 'react';
import goldenHex from '../images/goldenhex.png';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

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
    right: { top: 217, left: 225 },
  },
  layerTwo: {
    left: { top: 157, left: 0 },
    middle: { top: 185, left: 59 },
    right: { top: 158, left: 223 },
  },
  layerThree: {
    left: { top: 155, left: -107 },
    middle: { top: 155, left: 111 },
    right: { top: 155, left: 117 },
  },
  layerFour: {
    left: { top: 137, left: -33 },
    middle: { top: 0, left: 0 },
    right: { top: 110, left: 28 },
  },
};

const HexImage = styled.img`
  position: relative;
  height: 100px;
  width: 100px;
`;

function createHex(pos: IPosition) {
  const imgData = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "goldenhex.png" }) {
        childImageSharp {
          fluid {
            base64
            sizes
            src
            srcSet
          }
        }
      }
    }
  `);
  const style = {
    position: 'relative',
    height: 100,
    width: 100,
    top: pos.top,
    left: pos.left,
  };

  return <Img fluid={imgData.file.childImageSharp.fluid} style={style} alt="hex" />;
  // return <HexImage style={} src={goldenHex} alt="hex" />;
}

export const Hex = {
  LayerOne: {
    Left: () => createHex(hexPositions.layerOne.left),
    Middle: () => createHex(hexPositions.layerOne.middle),
    Right: () => createHex(hexPositions.layerOne.right),
  },
  LayerTwo: {
    Left: () => createHex(hexPositions.layerTwo.left),
    Middle: () => createHex(hexPositions.layerTwo.middle),
    Right: () => createHex(hexPositions.layerTwo.right),
  },
  LayerThree: {
    Left: () => createHex(hexPositions.layerThree.left),
    Middle: () => createHex(hexPositions.layerThree.middle),
    Right: () => createHex(hexPositions.layerThree.right),
  },
  LayerFour: {
    Left: () => createHex(hexPositions.layerFour.left),
    Middle: () => createHex(hexPositions.layerFour.middle),
    Right: () => createHex(hexPositions.layerFour.right),
  },
};
