import uniqueId from 'lodash/uniqueId';

import { Cv, Experience, Skill, Project } from '../types';

const skillList: Skill[] = [
  { id: uniqueId(), name: 'TypeScript' },
  { id: uniqueId(), name: 'JavaScript' },
  { id: uniqueId(), name: 'React' },
  { id: uniqueId(), name: 'Redux' },
  { id: uniqueId(), name: 'MobX' },
  { id: uniqueId(), name: 'Next' },
  { id: uniqueId(), name: 'Express' },
  { id: uniqueId(), name: 'Nest' },
  { id: uniqueId(), name: 'MongoDB' },
  { id: uniqueId(), name: 'TypeORM' },
  { id: uniqueId(), name: 'Socket-io' },
  { id: uniqueId(), name: 'Sass' },
  { id: uniqueId(), name: 'Jest' },
  { id: uniqueId(), name: 'Material-UI' },
  { id: uniqueId(), name: 'Sequelize' },
  { id: uniqueId(), name: 'PostgreSQL' },
];

const experienceList: Experience[] = [
  {
    id: uniqueId(),
    jobTitle: 'Front-end developer',
    employer: 'Epam',
    startEndDate: [null, null],
    description: 'Building stable and maintainable codebases using React',
  },
];

const projectList: Project[] = [
  {
    id: uniqueId(),
    name: 'English fro kids',
    description: 'Application for study english at playing form',
    repositoryURL: 'https://github.com/Rasskris/English-for-kids-FE',
    demoURL: 'https://english-for-kids.online/',
  },
];

export const DEFAULT_CV_VALUES: Cv = {
  firstName: 'Kristina',
  lastName: 'Rassoshenko',
  summary:
    'Frontend Developer is seeking an opportunity to extend my web development skills and knowledge',
  phone: '8-987-779-88-34',
  email: 'rs.kris@gmail.com',
  skillList,
  experienceList,
  projectList,
};
