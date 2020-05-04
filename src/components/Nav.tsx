import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.div`
  position: absolute;
  top: 600px;
  display: flex;
  flex-direction: column;
`;

const NavItem = styled.div`
  width: 200px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.15);
  color: gold;
  display: flex;
  align-items: center;
  border-bottom: 1px solid white;
  padding-left: 10px;
`;

export const Nav: React.FC = () => {
  return (
    <NavContainer>
      <NavItem>Mission</NavItem>
      <NavItem>Experience</NavItem>
    </NavContainer>
  );
};
