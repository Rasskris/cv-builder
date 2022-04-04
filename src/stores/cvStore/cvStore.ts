import { action, makeObservable, observable } from 'mobx';

import { DEFAULT_CV_VALUES } from '../../data';
import { Experience, Skill } from '../../types';

class CvStore {
  firstName: string = DEFAULT_CV_VALUES.firstName;

  lastName: string = DEFAULT_CV_VALUES.lastName;

  summary: string = DEFAULT_CV_VALUES.summary;

  email: string = DEFAULT_CV_VALUES.email;

  phone: string = DEFAULT_CV_VALUES.phone;

  skillList: Skill[] = DEFAULT_CV_VALUES.skillList;

  experienceList: Experience[] = DEFAULT_CV_VALUES.experienceList;

  constructor() {
    makeObservable(this, {
      firstName: observable,
      lastName: observable,
      summary: observable,
      email: observable,
      phone: observable,
      skillList: observable,
      experienceList: observable,
      setFirstName: action.bound,
      setLastName: action.bound,
      setSummary: action.bound,
      setEmail: action.bound,
      setPhone: action.bound,
      addSkill: action.bound,
      addExperience: action.bound,
      deleteSkill: action.bound,
      deleteExperience: action.bound,
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

  addSkill(newSkill: Skill): void {
    this.skillList.push(newSkill);
  }

  addExperience(experience: Experience): void {
    this.experienceList.push(experience);
  }

  deleteSkill(skillId: string): void {
    this.skillList = this.skillList.filter(({ id }) => id !== skillId);
  }

  deleteExperience(experienceId: string): void {
    this.experienceList = this.experienceList.filter(({ id }) => id !== experienceId);
  }
}

export default new CvStore();
