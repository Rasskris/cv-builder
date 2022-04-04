import { action, makeObservable, observable } from 'mobx';

import { DEFAULT_CV_VALUES } from '../../data';
import { Experience, Project, Skill } from '../../types';

class CvStore {
  firstName: string = DEFAULT_CV_VALUES.firstName;

  lastName: string = DEFAULT_CV_VALUES.lastName;

  summary: string = DEFAULT_CV_VALUES.summary;

  email: string = DEFAULT_CV_VALUES.email;

  phone: string = DEFAULT_CV_VALUES.phone;

  skillList: Skill[] = DEFAULT_CV_VALUES.skillList;

  experienceList: Experience[] = DEFAULT_CV_VALUES.experienceList;

  projectList: Project[] = DEFAULT_CV_VALUES.projectList;

  constructor() {
    makeObservable(this, {
      firstName: observable,
      lastName: observable,
      summary: observable,
      email: observable,
      phone: observable,
      skillList: observable,
      experienceList: observable,
      projectList: observable,
      setFirstName: action.bound,
      setLastName: action.bound,
      setSummary: action.bound,
      setEmail: action.bound,
      setPhone: action.bound,
      addSkill: action.bound,
      addExperience: action.bound,
      addProject: action.bound,
      deleteSkill: action.bound,
      deleteExperience: action.bound,
      deleteProject: action.bound,
    });
  }

  setFirstName(newFirstName: string): void {
    this.firstName = newFirstName;
  }

  setLastName(newLastName: string): void {
    this.lastName = newLastName;
  }

  setSummary(newSummary: string): void {
    this.summary = newSummary;
  }

  setEmail(newEmail: string): void {
    this.email = newEmail;
  }

  setPhone(newPhone: string): void {
    this.phone = newPhone;
  }

  addSkill(skill: Skill): void {
    this.skillList.push(skill);
  }

  addExperience(experience: Experience): void {
    this.experienceList.push(experience);
  }

  addProject(project: Project): void {
    this.projectList.push(project);
  }

  deleteSkill(skillId: string): void {
    this.skillList = this.skillList.filter(({ id }) => id !== skillId);
  }

  deleteExperience(experienceId: string): void {
    this.experienceList = this.experienceList.filter(({ id }) => id !== experienceId);
  }

  deleteProject(projectId: string): void {
    this.projectList = this.projectList.filter(({ id }) => id !== projectId);
  }
}

export default new CvStore();
