export type About = {
  firstName: string;
  lastName: string;
  summary: string;
  phone: string;
  email: string;
};

export type Experience = {
  id: string;
  jobTitle: string;
  employer: string;
  startEndDate: Array<Date | null>;
  description: string;
};

export type Skill = {
  id: string;
  name: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  repositoryURL?: string;
  demoURL?: string;
};

export type Links = {
  linkedIn?: string;
  github?: string;
  leetcode?: string;
  telegram?: string;
  other?: string;
};

export type Cv = {
  about: About;
  skillList: Skill[];
  experienceList: Experience[];
  projectList: Project[];
  links: Links;
};

export enum AboutName {
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  SUMMARY = 'summary',
  PHONE = 'phone',
  EMAIL = 'email',
}

export enum LinkName {
  GITHUB = 'github',
  TELEGRAM = 'telegram',
  LINKEDIN = 'linkedIn',
  LEETCODE = 'leetcode',
  OTHER = 'other',
}
