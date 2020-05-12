import React from 'react';
import { values } from '../data/values';
import styled from 'styled-components';

const ValueContainer = styled.div`
  grid-area: values;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px auto;
  grid-template-areas:
    'valueHeader'
    'valueList';
  column-gap: 10px;
  row-gap: 10px;
  justify-items: stretch;
`;

const ValueHeader = styled.div`
  grid-area: valueHeader
  justify-self: center;
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

const ValueList = styled.div`
  grid-area: valueList;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  border: 1px solid gold;
`;

const ValueListItem = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 50px;
`;

const ValueListItemBullet = styled.div`
  border: 1px solid gold;
  height: 15px;
  border-radius: 50%;
  width: 15px;
  margin-right: 10px;
  margin-left: 10px;
`;

export const Values: React.FC = () => {
  return (
    <ValueContainer>
      <ValueHeader>
        <h1>Values</h1>
      </ValueHeader>
      <ValueList>
        {values.map((value, index) => (
          <ValueListItem index={index}>
            <ValueListItemBullet />
            {value}
          </ValueListItem>
        ))}
      </ValueList>
    </ValueContainer>
  );
};
