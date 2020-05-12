enum CareerFriends {
  BestFriends = 'Best Friends',
  OldFriends = 'Old Friends',
  GettingToKnow = 'Getting to Know',
}

enum TechnicalCategory {
  Cloud = 'Cloud Computing',
  Frontend = 'Frontend',
  Backend = 'Backend',
  FullStack = 'Full Stack',
}

export interface ISkill {
  name: string;
  yearsOfXp: number;
  friendStatus: CareerFriends;
  category: TechnicalCategory;
}

interface ISkillList {
  [key: string]: ISkill;
}

export const skills: ISkillList = {
  react: {
    name: 'React',
    yearsOfXp: 6,
    friendStatus: CareerFriends.BestFriends,
    category: TechnicalCategory.Frontend,
  },
  redux: {
    name: 'Redux',
    yearsOfXp: 6,
    friendStatus: CareerFriends.BestFriends,
    category: TechnicalCategory.Frontend,
  },
  reduxSaga: {
    name: 'Redux Saga',
    yearsOfXp: 1,
    friendStatus: CareerFriends.GettingToKnow,
    category: TechnicalCategory.Frontend,
  },
  typeScript: {
    name: 'TypeScript',
    yearsOfXp: 3,
    friendStatus: CareerFriends.BestFriends,
    category: TechnicalCategory.FullStack,
  },
  javascript: {
    name: 'JavaScript (ES6)',
    yearsOfXp: 6,
    friendStatus: CareerFriends.BestFriends,
    category: TechnicalCategory.FullStack,
  },
  immutable: {
    name: 'Immutable.js',
    yearsOfXp: 5,
    friendStatus: CareerFriends.BestFriends,
    category: TechnicalCategory.FullStack,
  },
  jest: {
    name: 'Jest',
    yearsOfXp: 4,
    friendStatus: CareerFriends.BestFriends,
    category: TechnicalCategory.Frontend,
  },
  enzyme: {
    name: 'Enzyme',
    yearsOfXp: 5,
    friendStatus: CareerFriends.OldFriends,
    category: TechnicalCategory.Frontend,
  },
  reactTestingLib: {
    name: 'React Testing Library',
    yearsOfXp: 1,
    friendStatus: CareerFriends.BestFriends,
    category: TechnicalCategory.Frontend,
  },
  node: {
    name: 'node.js',
    yearsOfXp: 7,
    friendStatus: CareerFriends.BestFriends,
    category: TechnicalCategory.Backend,
  },
  yarn: {
    name: 'Yarn',
    yearsOfXp: 3,
    friendStatus: CareerFriends.BestFriends,
    category: TechnicalCategory.FullStack,
  },
  webpack: {
    name: 'Webpack',
    yearsOfXp: 6,
    friendStatus: CareerFriends.BestFriends,
    category: TechnicalCategory.FullStack,
  },
  cssModules: {
    name: 'CSS Modules',
    yearsOfXp: 5,
    friendStatus: CareerFriends.BestFriends,
    category: TechnicalCategory.Frontend,
  },
  styledComponents: {
    name: 'Styled Components',
    yearsOfXp: 1,
    friendStatus: CareerFriends.GettingToKnow,
    category: TechnicalCategory.Frontend,
  },
  gatsby: {
    name: 'Gatsby',
    yearsOfXp: 1,
    friendStatus: CareerFriends.GettingToKnow,
    category: TechnicalCategory.Frontend,
  },
  aws: {
    name: 'AWS',
    yearsOfXp: 1,
    friendStatus: CareerFriends.BestFriends,
    category: TechnicalCategory.Cloud,
  },
  python: {
    name: 'Python',
    yearsOfXp: 2,
    friendStatus: CareerFriends.GettingToKnow,
    category: TechnicalCategory.Backend,
  },
  machineLearning: {
    name: 'Machine Learning',
    yearsOfXp: 0,
    friendStatus: CareerFriends.GettingToKnow,
    category: TechnicalCategory.Backend,
  },
  json: {
    name: 'JSON',
    yearsOfXp: 10,
    friendStatus: CareerFriends.BestFriends,
    category: TechnicalCategory.FullStack,
  },
  cli: {
    name: 'CLI in Unix-like Environments',
    yearsOfXp: 11,
    friendStatus: CareerFriends.BestFriends,
    category: TechnicalCategory.FullStack,
  },
  git: {
    name: 'git',
    yearsOfXp: 9,
    friendStatus: CareerFriends.BestFriends,
    category: TechnicalCategory.FullStack,
  },
  ruby: {
    name: 'Ruby',
    yearsOfXp: 2,
    friendStatus: CareerFriends.OldFriends,
    category: TechnicalCategory.Backend,
  },
  rails: {
    name: 'Ruby on Rails',
    yearsOfXp: 2,
    friendStatus: CareerFriends.OldFriends,
    category: TechnicalCategory.FullStack,
  },
  cSharp: {
    name: 'C# / .net',
    yearsOfXp: 5,
    friendStatus: CareerFriends.OldFriends,
    category: TechnicalCategory.FullStack,
  },
  php: {
    name: 'PHP',
    yearsOfXp: 1,
    friendStatus: CareerFriends.OldFriends,
    category: TechnicalCategory.FullStack,
  },
  perl: {
    name: 'Perl',
    yearsOfXp: 3,
    friendStatus: CareerFriends.OldFriends,
    category: TechnicalCategory.FullStack,
  },
  flex: {
    name: 'Adobe Flex / ActionScript 3.0',
    yearsOfXp: 5,
    friendStatus: CareerFriends.OldFriends,
    category: TechnicalCategory.Frontend,
  },
};