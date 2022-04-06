import uniqueId from 'lodash/uniqueId';

import { Cv, About, Experience, Skill, Project, Links } from '../types';

const about: About = {
  firstName: 'Kristina',
  lastName: 'Rassoshenko',
  summary:
    'Frontend Developer is seeking an opportunity to extend my web development skills and knowledge',
  phone: '+7-987-779-88-34',
  email: 'rs.kris@gmail.com',
};

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
    startEndDate: [new Date(2020, 1, 11), new Date(2022, 1, 11)],
    description: 'Building stable and maintainable codebases using React',
  },
  {
    id: uniqueId(),
    jobTitle: 'Front-end developer',
    employer: 'Luxoft',
    startEndDate: [new Date(2018, 1, 11), new Date(2020, 1, 11)],
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
  {
    id: uniqueId(),
    name: 'Planning Poker',
    description:
      'Planning poker, also known as “scrum poker” and “pointing poker”, is a gamified technique that development teams use to estimate the effort of project management tasks.',
    repositoryURL: 'https://github.com/Rasskris/Planning-poker-FE',
    demoURL: 'https://pp-fe.herokuapp.com/',
  },
];

const links: Links = {
  github: 'https://github.com/username',
  leetcode: 'https://leetcode.com/username',
  telegram: 'https://t.me/username',
  linkedIn: 'https://www.linkedin.com/in/username',
  other: 'https://your-site.com/',
};

export const DEFAULT_CV_VALUES: Cv = {
  about,
  skillList,
  experienceList,
  projectList,
  links,
};
