export interface IJobData {
  company: string;
  startDate: IEmploymentDate;
  endDate: IEmploymentDate;
  title: string;
  location: {
    city: string;
    state: string;
  };
  workData: string[];
}

interface IEmploymentDate {
  month?: string;
  year: number;
}

export const jobHistory: IJobData[] = [
  {
    company: 'Vacasa',
    startDate: { month: 'January', year: 2020 },
    endDate: { month: 'March', year: 2020 },
    title: 'Engineering Manager',
    location: {
      city: 'Portland',
      state: 'OR',
    },
    workData: [
      'Lead a team to create a greenfield application that incorporated a headless CMS to generate static content.',
      'Sadly, a large portion of the company was laid off due to COVID-19.',
    ],
  },
  {
    company: 'DealSite',
    startDate: { month: 'June', year: 2019 },
    endDate: { month: 'November', year: 2019 },
    title: 'Staff Engineer',
    location: {
      city: 'Portland',
      state: 'OR',
    },
    workData: [
      'Solely responsible for creating a new front-end for DealSite’s client-facing product.',
      'Created enterprise-grade front-end using TypeScript, React, Redux, Redux Sagas, React Router, Material UI, CSSModules, and Jest for testing.',
      'Implemented complex, security-focused customer login using oauth in conjunction with bespoke legacy identity security systems.',
      'Company ran into financial issues in November, couldn’t afford to pay me anymore.',
    ],
  },
  {
    company: '',
    startDate: { month: '', year: 2000 },
    endDate: { month: '', year: 2000 },
    title: '',
    location: {
      city: '',
      state: '',
    },
    workData: [''],
  },
];
