import React from 'react';
import { coreTraits } from '../data/coreTraits';
import styled from 'styled-components';
import { WordTileTable } from './WordTileTable';

const TraitContainer = styled.div`
  grid-area: traits;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px auto;
  grid-template-areas:
    'traitHeader'
    'traitList';
  column-gap: 10px;
  row-gap: 10px;
  justify-items: stretch;
`;

const TraitHeader = styled.div`
  grid-area: traitHeader
  animation: textMoveFromLeft 3s;

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

const TraitList = styled.div`
  grid-area: traitList;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`;

const TraitListItem = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 50px;
`;

const TraitListItemBullet = styled.div`
  border: 1px solid gold;
  height: 15px;
  border-radius: 50%;
  width: 15px;
  margin-right: 10px;
  margin-left: 10px;
`;

export const CoreTraits: React.FC = () => (
  <WordTileTable headerText="Traits" wordArray={coreTraits} gridArea="traits" itemWidth={250} gradientAngle={220} headerAlignment="start" />
);
