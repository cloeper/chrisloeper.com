import { skills, ISkill } from './skills';

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
  skillsUsed?: ISkill[];
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
    skillsUsed: [skills.react, skills.redux, skills.styledComponents, skills.aws, skills.gatsby, skills.reactTestingLib],
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
    company: 'OpenGov',
    startDate: { month: 'February', year: 2017 },
    endDate: { month: 'March', year: 2019 },
    title: 'Engineering Lead',
    location: {
      city: 'Portland',
      state: 'OR',
    },
    workData: [
      'Joined as Engineering Lead with full management responsibilities, tasked with building the team that would help rebuild OpenGov’s tech stack from the backend all the way to continuous delivery.',
      'Developed roadmaps and project plans for 3 products and performed Product Owner and Scrum Master roles for two of them.',
      'Created development life cycle processes that have been successfully used for nearly 2 years by multiple teams.',
      'Helped define UI architecture and was an active developer for the Performance Measures and Reporting products using React 16, TypeScript, reselect, CSS modules, writing tests with Jest and enzyme.',
      'Owned and led the technical creation of a robust component library, personally contributing major components like a flexible and extensible Table, Date Input, Wizard, Tab, etc, while also leading a small team to further build out the library.',
      'Tight communication and collaboration with the product and design teams throughout my time at OpenGov, helping to improve integration, communication, and process between all parties.',
    ],
  },
  {
    company: 'Marketo',
    startDate: { month: 'October', year: 2015 },
    endDate: { month: 'February', year: 2017 },
    title: 'Engineering Manager',
    location: {
      city: 'Portland',
      state: 'OR',
    },
    workData: [
      'Built a fantastic team and fostered a culture of collaboration, respect, and productivity.',
      'Joined as Senior Front-end Engineer on newly formed ‘Mercury’ team, promoted to Manager in the first 3 months with the mandate to rethink how Marketo builds software.',
      'Tasked with leading the team to rebuild marketo.com from the ground up using modern javascript libraries and frameworks.',
      'Extensive use of React, Redux, React Motion, React Drag and Drop, Reselect, Enzyme, all using ES6/7 syntax and features.',
    ],
  },
  {
    company: 'Janrain',
    startDate: { month: 'June', year: 2012 },
    endDate: { month: 'October', year: 2015 },
    title: 'Application Developer / Project Lead',
    location: {
      city: 'Portland',
      state: 'OR',
    },
    workData: [
      'Worked with clients to customize and configure their user registration experience using Janrain software using JSON and Javascript.',
      'Wrote tooling to assist in configurations in Python. Acted as Team Lead of the Application Development team for 9 months in 2014. Promoted to Project Lead in 2014.',
      'Developed UI using Angular as well as RESTful(ish) APIs using Python, Flask, to further ease customer configurations.',
    ],
  },
  {
    company: 'Thetus',
    startDate: { month: 'February', year: 2011 },
    endDate: { month: 'August', year: 2012 },
    title: 'Frontend Developer',
    location: {
      city: 'Portland',
      state: 'OR',
    },
    workData: [
      'Member of the UI team responsible for Savanna, the front-end of a semantic modelling engine.',
      'Key developer for critical components of the platform.',
      'Lead interviews.',
    ],
  },
  {
    company: 'American Virtual Academy',
    startDate: { month: 'August', year: 2010 },
    endDate: { month: 'December', year: 2011 },
    title: '',
    location: {
      city: 'Chandler',
      state: 'AZ',
    },
    workData: ['Helped create parent-student portal, course builder, and course manager software modules used in online school software.'],
  },
  {
    company: 'Colyar Consulting Group',
    startDate: { month: 'November', year: 2009 },
    endDate: { month: 'August', year: 2010 },
    title: 'Software Engineer',
    location: {
      city: 'Portland',
      state: 'OR',
    },
    workData: ['Created software used by state agencies for child lunch programs.'],
  },
  {
    company: 'Unicorn Media',
    startDate: { month: 'September', year: 2007 },
    endDate: { month: 'June', year: 2009 },
    title: 'Software Engineer',
    location: {
      city: 'Portland',
      state: 'OR',
    },
    workData: [
      "Joined on first day of company and was instrumental in the company's growth and success.",
      'Developed mission-critical website to make company viable.',
      'Designed entire system architecture and was deeply involved in UX.',
    ],
  },
  {
    company: 'Exodus Web',
    startDate: { month: 'January', year: 2007 },
    endDate: { month: 'September', year: 2007 },
    title: 'Software Engineering Consultant',
    location: {
      city: 'Portland',
      state: 'OR',
    },
    workData: ['Created websites for clients of all varieties from spas to large companies.', 'Handled credit and PayPal transactions.'],
  },
  {
    company: 'CCBill.com',
    startDate: { month: 'June', year: 2006 },
    endDate: { month: 'January', year: 2007 },
    title: 'Software Developer',
    location: {
      city: 'Portland',
      state: 'OR',
    },
    workData: [
      'Full-stack development in Perl and C#.',
      'Enabled company to branch into other products in addition to billing software and engineered expansion into DRM system for existing clients.',
    ],
  },
  {
    company: 'Intrepid Data Management',
    startDate: { month: 'September', year: 2004 },
    endDate: { month: 'June', year: 2006 },
    title: '',
    location: {
      city: 'Portland',
      state: 'OR',
    },
    workData: [
      'Designed, developed, and maintained important national study medical research database used by top-tier universities.',
      'Major contributor to software architecture.',
    ],
  },
];
