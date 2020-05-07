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

interface ISkill {
  name: string;
  yearsOfXp: number;
  friendStatus: CareerFriends;
  category: TechnicalCategory;
}

export const skills: ISkill[] = [
  {
    name: 'React',
    yearsOfXp: 6,
    friendStatus: CareerFriends.BestFriends,
    category: TechnicalCategory.Frontend,
  },
  {
    name: 'Redux',
    yearsOfXp: 6,
    friendStatus: CareerFriends.BestFriends,
    category: TechnicalCategory.Frontend,
  },
  {
    name: 'Redux Sagas',
    yearsOfXp: 1,
    friendStatus: CareerFriends.GettingToKnow,
    category: TechnicalCategory.Frontend,
  },
  {
    name: 'TypeScript',
    yearsOfXp: 3,
    friendStatus: CareerFriends.BestFriends,
    category: TechnicalCategory.FullStack,
  },
  {
    name: 'JavaScript (ES6)',
    yearsOfXp: 6,
    friendStatus: CareerFriends.BestFriends,
    category: TechnicalCategory.FullStack,
  },
  {
    name: 'Immutable.js',
    yearsOfXp: 5,
    friendStatus: CareerFriends.BestFriends,
    category: TechnicalCategory.FullStack,
  },
  {
    name: 'Jest',
    yearsOfXp: 4,
    friendStatus: CareerFriends.BestFriends,
    category: TechnicalCategory.Frontend,
  },
  {
    name: 'Enzyme',
    yearsOfXp: 5,
    friendStatus: CareerFriends.OldFriends,
    category: TechnicalCategory.Frontend,
  },
  {
    name: 'React Testing Library',
    yearsOfXp: 1,
    friendStatus: CareerFriends.BestFriends,
    category: TechnicalCategory.Frontend,
  },
  {
    name: 'node.js',
    yearsOfXp: 7,
    friendStatus: CareerFriends.BestFriends,
    category: TechnicalCategory.Backend,
  },
  {
    name: 'Yarn',
    yearsOfXp: 3,
    friendStatus: CareerFriends.BestFriends,
    category: TechnicalCategory.FullStack,
  },
  {
    name: 'Webpack',
    yearsOfXp: 6,
    friendStatus: CareerFriends.BestFriends,
    category: TechnicalCategory.FullStack,
  },
  {
    name: 'CSS Modules',
    yearsOfXp: 5,
    friendStatus: CareerFriends.BestFriends,
    category: TechnicalCategory.Frontend,
  },
  {
    name: 'Styled Components',
    yearsOfXp: 1,
    friendStatus: CareerFriends.GettingToKnow,
    category: TechnicalCategory.Frontend,
  },
  {
    name: 'Gatsby',
    yearsOfXp: 1,
    friendStatus: CareerFriends.GettingToKnow,
    category: TechnicalCategory.Frontend,
  },
  {
    name: 'AWS',
    yearsOfXp: 1,
    friendStatus: CareerFriends.BestFriends,
    category: TechnicalCategory.Cloud,
  },
  {
    name: 'Python',
    yearsOfXp: 2,
    friendStatus: CareerFriends.GettingToKnow,
    category: TechnicalCategory.Backend,
  },
  {
    name: 'Machine Learning',
    yearsOfXp: 0,
    friendStatus: CareerFriends.GettingToKnow,
    category: TechnicalCategory.Backend,
  },
  {
    name: 'JSON',
    yearsOfXp: 10,
    friendStatus: CareerFriends.BestFriends,
    category: TechnicalCategory.FullStack,
  },
  {
    name: 'CLI in Unix-like Environments',
    yearsOfXp: 11,
    friendStatus: CareerFriends.BestFriends,
    category: TechnicalCategory.FullStack,
  },
  {
    name: 'git',
    yearsOfXp: 9,
    friendStatus: CareerFriends.BestFriends,
    category: TechnicalCategory.FullStack,
  },
  {
    name: 'Ruby',
    yearsOfXp: 2,
    friendStatus: CareerFriends.OldFriends,
    category: TechnicalCategory.Backend,
  },
  {
    name: 'Ruby on Rails',
    yearsOfXp: 2,
    friendStatus: CareerFriends.OldFriends,
    category: TechnicalCategory.FullStack,
  },
  {
    name: 'C# / .net',
    yearsOfXp: 5,
    friendStatus: CareerFriends.OldFriends,
    category: TechnicalCategory.FullStack,
  },
  {
    name: 'PHP',
    yearsOfXp: 1,
    friendStatus: CareerFriends.OldFriends,
    category: TechnicalCategory.FullStack,
  },
  {
    name: 'Perl',
    yearsOfXp: 3,
    friendStatus: CareerFriends.OldFriends,
    category: TechnicalCategory.FullStack,
  },
  {
    name: 'Adobe Flex / ActionScript 3.0',
    yearsOfXp: 5,
    friendStatus: CareerFriends.OldFriends,
    category: TechnicalCategory.Frontend,
  },
];
