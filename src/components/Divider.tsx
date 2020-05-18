import React from 'react';
import styled from 'styled-components';

interface IDivider {
  gridArea?: string;
  lineThickness?: number;
}

interface IHorizontalDivider extends IDivider {
  marginTop?: number;
}

interface IVerticalDivider extends IDivider {}

const HorizontalDivider = styled.div<IHorizontalDivider>`
  grid-area: ${props => props.gridArea || 'hDivider'};
  height: ${props => props.lineThickness || 1}px;
  margin-top: ${props => props.marginTop || 0}px;
  background: gold;
`;

const VerticalDivider = styled.div<IVerticalDivider>`
  grid-area: ${props => props.gridArea || 'vDivider'};
  width: ${props => props.lineThickness || 1}px;
  height: 100%;
  background: gold;
`;

export const Divider = {
  Horizontal: ({ lineThickness, marginTop, gridArea }: IHorizontalDivider) => <HorizontalDivider lineThickness={lineThickness} marginTop={marginTop} gridArea={gridArea} />,
  Vertical: ({ lineThickness, gridArea }: IVerticalDivider) => <VerticalDivider lineThickness={lineThickness} gridArea={gridArea} />,
};
