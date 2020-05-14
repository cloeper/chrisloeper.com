import React from 'react';
import styled from 'styled-components';
import { jobHistory, IJobData } from '../data/jobHistory';
import { ISkill } from '../data/skills';
import { Divider } from './Divider';

const JobHistoryContainer = styled.div`
  grid-area: jobHistory;
`;

const JobHistoryHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 1fr 230px 1fr 20%;
  grid-template-rows: auto auto;
  grid-template-areas:
    'header header header header header'
    '. . hDivider . .';
  column-gap: 10px;
  row-gap: 10px;
  justify-items: stretch;
  margin-bottom: 40px;
`;

const JobHistoryHeader = styled.h1`
  grid-area: header;
  justify-self: center;
  font-size: 52px;
  z-index: 2;
`;

const JobData = styled.div`
  display: grid;
  grid-template-columns: 20% 1fr 1fr 1fr 1fr 20%;
  grid-template-rows: auto 2px 50px auto 75px;
  grid-template-areas:
    '. company company employmentDates location .'
    '. hDivider hDivider hDivider hDivider .'
    '. position position position skills .'
    '. workData workData workData skills .'
    '. . . . . .';
  column-gap: 10px;
  row-gap: 10px;
  justify-items: stretch;
`;

const JobDataBackground = styled.div`
  grid-row-start: company;
  grid-column-start: company;
  grid-row-end: workData;
  grid-column-end: location;
  background-color: rgba(255, 255, 255, 0.1);
  margin: -20px;
`;

const CompanyName = styled.div`
  grid-area: company;
  align-self: center;
`;
const EmploymentDates = styled.div`
  grid-area: employmentDates;
  justify-self: center;
  align-self: center;
`;

const Location = styled.div`
  grid-area: location;
  justify-self: right;
  align-self: center;
`;

const Position = styled.div`
  grid-area: position;
  align-self: center;
  color: #16db93;
  font-size: 28px;
`;

const WorkDataContainer = styled.div`
  grid-area: workData;
`;

const WorkData = styled.div`
  display: grid;
  grid-template-columns: 20px 1fr;
  grid-template-rows: auto;
  grid-template-areas: 'bullet workDataItem';
  column-gap: 10px;
  row-gap: 10px;
  justify-items: stretch;
`;

const Skills = styled.div`
  grid-area: skills;
`;

const WorkDataItem = styled.div`
  grid-area: workDataItem;
`;

const WorkDataItemBullet = styled.div`
  grid-area: bullet;
  border: 2px solid gold;
  height: 10px;
  border-radius: 50%;
  width: 10px;
  margin-top: 8px;
  justify-self: right;
`;

const SkillsContainer = styled.div`
  grid-area: skills;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  border-left: 1px solid gold;
  padding-left: 20px;
`;

const SkillsHeaderContainer = styled.div`
  background-image: linear-gradient(245deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1));
  margin-bottom: 10px;
`;

export const JobHistory: React.FC = () => {
  return (
    <JobHistoryContainer>
      <JobHistoryHeaderContainer>
        <JobHistoryHeader>Job History</JobHistoryHeader>
        <Divider.Horizontal marginTop={-13} lineThickness={2} />
      </JobHistoryHeaderContainer>
      {jobHistory.map((job: IJobData) => {
        return (
          <JobData>
            <JobDataBackground />
            <CompanyName>
              <h1>{job.company}</h1>
            </CompanyName>
            <Divider.Horizontal />
            <EmploymentDates>
              {job.startDate.month && job.startDate.month} {job.startDate.year} - {job.endDate.month && job.endDate.month} {job.startDate.year}
            </EmploymentDates>
            <Location>
              {job.location.city}, {job.location.state}
            </Location>
            <Position>{job.title}</Position>
            <WorkDataContainer>
              {job.workData.map((workDataPoint: string) => (
                <WorkData>
                  <WorkDataItemBullet />
                  <WorkDataItem>{workDataPoint}</WorkDataItem>
                </WorkData>
              ))}
            </WorkDataContainer>
            <SkillsContainer>
              <SkillsHeaderContainer>
                <h3>Skills Used:</h3>
              </SkillsHeaderContainer>
              {job.skillsUsed.map((skill: ISkill) => (
                <div>{skill.name}</div>
              ))}
            </SkillsContainer>
          </JobData>
        );
      })}
    </JobHistoryContainer>
  );
};
