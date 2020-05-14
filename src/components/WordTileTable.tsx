import React from 'react';
import styled from 'styled-components';

import { Divider } from './Divider';

interface IWordTileTableContainer {
  gridArea: string;
}

const WordTileTableContainer = styled.div<IWordTileTableContainer>`
  grid-area: ${props => props.gridArea};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px auto;
  grid-template-areas:
    'valueHeader'
    'hDivider'
    'valueList';
  column-gap: 10px;
  row-gap: 10px;
  justify-items: stretch;
`;

const WordTileTableHeader = styled.h1<{ gradientAngle?: number; headerAlignment?: string }>`
  width: 100%;
  padding-left: 5px;
  padding-right: 5px;
  grid-area: valueHeader;
  display: flex;
  justify-content: ${props => props.headerAlignment || 'end'};
  background-image: linear-gradient(${props => props.gradientAngle || 45}deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1));
`;

const WordTileTableList = styled.div`
  grid-area: valueList;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const WordTileTableListItem = styled.div<{ width?: number; gradientAngle?: number }>`
  display: flex;
  align-items: center;
  width: ${props => props.width || 160}px;
  height: 50px;
  margin: 10px;
  background-image: linear-gradient(${props => props.gradientAngle || 135}deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1));
`;

const WordTileTableListItemBullet = styled.div`
  border: 1px solid gold;
  height: 15px;
  border-radius: 50%;
  width: 15px;
  margin-right: 10px;
  margin-left: 10px;
`;

interface IWordTileTable {
  headerText: string;
  wordArray: string[];
  gridArea: string;
  itemWidth?: number;
  gradientAngle?: number;
  headerAlignment?: string;
}

export const WordTileTable: React.FC<IWordTileTable> = props => {
  return (
    <WordTileTableContainer gridArea={props.gridArea}>
      <WordTileTableHeader headerAlignment={props.headerAlignment} gradientAngle={props.gradientAngle}>
        {props.headerText}
      </WordTileTableHeader>
      <Divider.Horizontal />
      <WordTileTableList>
        {props.wordArray.map((value, index) => (
          <WordTileTableListItem width={props.itemWidth} gradientAngle={props.gradientAngle}>
            <WordTileTableListItemBullet />
            {value}
          </WordTileTableListItem>
        ))}
      </WordTileTableList>
    </WordTileTableContainer>
  );
};
