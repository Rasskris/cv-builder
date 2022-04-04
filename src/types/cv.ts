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

export type Cv = {
  firstName: string;
  lastName: string;
  summary: string;
  phone: string;
  email: string;
  skillList: Skill[];
  experienceList: Experience[];
};
