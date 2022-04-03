import { Cv } from '../types';

const skillsSet = new Set([
  'TypeScript',
  'JavaScript',
  'React',
  'Redux',
  'MobX',
  'Next',
  'Express',
  'Nest',
  'MongoDB',
  'TypeORM',
  'Socket-io',
  'Sass',
  'Jest',
  'Material-UI',
  'Sequelize',
  'PostgreSQL',
]);

export const DEFAULT_CV_VALUES: Cv = {
  firstName: 'Kristina',
  lastName: 'Rassoshenko',
  summary:
    'Frontend Developer is seeking an opportunity to extend my web development skills and knowledge',
  phone: '8-987-779-88-34',
  email: 'rs.kris@gmail.com',
  skills: skillsSet,
};
