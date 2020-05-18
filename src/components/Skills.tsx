import React from 'react';
import styled from 'styled-components';

import { skills, ISkill, CareerFriends } from '../data/skills';
import { Divider } from './Divider';

const CareerFriendsContainer = styled.div`
  grid-area: skills;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50px 10px;
  grid-template-areas:
    'header header'
    'hDivider hDivider'
    'bestFriends oldFriends'
    'bestFriends gettingToKnow'
    'bestFriends .'
    'bestFriends .';
  column-gap: 0px;
  row-gap: 10px;
  justify-items: stretch;
`;

const CareerFriendsHeader = styled.div`
  width: 100%;
  padding-left: 5px;
  padding-right: 5px;
  grid-area: header;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(180deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1));
`;

const CareerFriendContainer = styled.div<{ gridArea: string }>`
  grid-area: ${props => props.gridArea};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 10px repeat(auto-fill, 50px);
  grid-template-areas:
    'header'
    'hDivider';
  column-gap: 10px;
  row-gap: 0px;
  justify-items: stretch;
  background-image: linear-gradient(0deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1));
`;

const CareerFriendSectionHeader = styled.h2`
  justify-self: center;
  align-self: center;
`;

const SkillContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 'skillName skillGauge';
  column-gap: 0px;
  row-gap: 0px;
  justify-items: stretch;
`;

const SkillName = styled.div`
  grid-area: skillName;
  justify-self: end;
  align-self: center;
`;

const SkillGauge = styled.div<{ ratio: number }>`
  grid-area: skillGauge;
  justify-self: start;
  align-self: center;
  width: ${props => props.ratio * 10}%;
  height: 30px;
  background-image: linear-gradient(90deg, rgba(22, 219, 147, 0), rgba(22, 219, 147, 1));
`;

export const Skills: React.FC = () => {
  const skillsArray = Object.values(skills);
  const bestFriends: ISkill[] = [];
  const oldFriends: ISkill[] = [];
  const gettingToKnow: ISkill[] = [];

  skillsArray.forEach(skill => {
    switch (skill.friendStatus) {
      case CareerFriends.BestFriends:
        bestFriends.push(skill);
        break;
      case CareerFriends.OldFriends:
        oldFriends.push(skill);
        break;
      case CareerFriends.GettingToKnow:
        gettingToKnow.push(skill);
        break;
      default:
        break;
    }
  });

  bestFriends.sort((skillA, skillB) => skillB.yearsOfXp - skillA.yearsOfXp);
  oldFriends.sort((skillA, skillB) => skillB.yearsOfXp - skillA.yearsOfXp);
  gettingToKnow.sort((skillA, skillB) => skillB.yearsOfXp - skillA.yearsOfXp);

  return (
    <CareerFriendsContainer>
      <CareerFriendsHeader>
        <h1>Career Friends</h1>
      </CareerFriendsHeader>
      <Divider.Horizontal />
      <CareerFriendContainer gridArea="bestFriends">
        <CareerFriendSectionHeader>Best Friends</CareerFriendSectionHeader>
        <Divider.Horizontal />
        {bestFriends.map((skill, i) => {
          if (skill.display != false) {
            return (
              <SkillContainer>
                <SkillName key={i}>{skill.name}</SkillName>
                <SkillGauge ratio={skill.yearsOfXp} />
              </SkillContainer>
            );
          }
        })}
      </CareerFriendContainer>
      <CareerFriendContainer gridArea="gettingToKnow">
        <CareerFriendSectionHeader>Getting to Know</CareerFriendSectionHeader>
        <Divider.Horizontal />
        {gettingToKnow.map((skill, i) => {
          if (skill.display != false) {
            return (
              <SkillContainer>
                <SkillName key={i}>{skill.name}</SkillName>
                <SkillGauge ratio={skill.yearsOfXp} />
              </SkillContainer>
            );
          }
        })}
      </CareerFriendContainer>
      <CareerFriendContainer gridArea="oldFriends">
        <CareerFriendSectionHeader>Old Friends</CareerFriendSectionHeader>
        <Divider.Horizontal />
        {oldFriends.map((skill, i) => {
          if (skill.display != false) {
            return (
              <SkillContainer>
                <SkillName key={i}>{skill.name}</SkillName>
                <SkillGauge ratio={skill.yearsOfXp} />
              </SkillContainer>
            );
          }
        })}
      </CareerFriendContainer>
    </CareerFriendsContainer>
  );
};
