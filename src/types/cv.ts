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
  firstName: string;
  lastName: string;
  summary: string;
  phone: string;
  email: string;
  skillList: Skill[];
  experienceList: Experience[];
  projectList: Project[];
  links: Links;
};

export enum LinkName {
  GITHUB = 'github',
  TELEGRAM = 'telegram',
  LINKEDIN = 'linkedIn',
  LEETCODE = 'leetcode',
  OTHER = 'other',
}
