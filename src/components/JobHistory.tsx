import React from 'react';
import styled from 'styled-components';
import { jobHistory, IJobData } from '../data/jobHistory';

const JobHistoryContainer = styled.div`
  grid-area: jobHistory;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  column-gap: 10px;
  row-gap: 10px;
  justify-items: stretch;
`;

const JobData = styled.div`
  display: grid;
  grid-template-columns: 20% 1fr 1fr 1fr 20%;
  grid-template-rows: auto 2px auto auto 20px;
  grid-template-areas:
    '. company employmentDates location .'
    '. divider divider divider .'
    '. position position position .'
    '. workData workData skills .'
    '. . . . .';
  column-gap: 10px;
  row-gap: 10px;
  justify-items: stretch;
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
  /* font-family: 'Playfair Display', 'serif'; */
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
  height: 15px;
  border-radius: 50%;
  width: 15px;
  margin-top: 5px;
`;

const GoldDivider = styled.div`
  grid-area: divider;
  height: 2px;
  background: gold;
`;

export const JobHistory: React.FC = () => {
  return (
    <JobHistoryContainer>
      {jobHistory.map((job: IJobData) => {
        return (
          <JobData>
            <GoldDivider />
            <CompanyName>
              <h1>{job.company}</h1>
            </CompanyName>
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
          </JobData>
        );
      })}
    </JobHistoryContainer>
  );
};
