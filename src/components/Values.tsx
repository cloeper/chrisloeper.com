import React from 'react';
import styled from 'styled-components';

import { Divider } from './Divider';

import { values } from '../data/values';
import { WordTileTable } from './WordTileTable';

const ValueContainer = styled.div`
  grid-area: values;
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

const ValueHeader = styled.h1`
  width: 100%;
  padding-right: 5px;
  grid-area: valueHeader;
  display: flex;
  justify-self: end;
  justify-content: end;
  animation: textMoveFromLeft 3s;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1));

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

const ValueList = styled.div`
  grid-area: valueList;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ValueListItem = styled.div`
  display: flex;
  align-items: center;
  width: 160px;
  height: 50px;
  margin: 10px;
  background-image: linear-gradient(135deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1));
`;

const ValueListItemBullet = styled.div`
  border: 1px solid gold;
  height: 15px;
  border-radius: 50%;
  width: 15px;
  margin-right: 10px;
  margin-left: 10px;
`;

export const Values: React.FC = () => <WordTileTable headerText="Values" wordArray={values} gridArea="values" />;
