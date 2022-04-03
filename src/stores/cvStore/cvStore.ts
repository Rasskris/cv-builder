import { action, makeObservable, observable } from 'mobx';

import { DEFAULT_CV_VALUES } from '../../data';

class CvStore {
  firstName: string = DEFAULT_CV_VALUES.firstName;

  lastName: string = DEFAULT_CV_VALUES.lastName;

  summary: string = DEFAULT_CV_VALUES.summary;

  email: string = DEFAULT_CV_VALUES.email;

  phone: string = DEFAULT_CV_VALUES.phone;

  skills: Set<string> = DEFAULT_CV_VALUES.skills;

  constructor() {
    makeObservable(this, {
      firstName: observable,
      lastName: observable,
      summary: observable,
      email: observable,
      phone: observable,
      skills: observable,
      setFirstName: action.bound,
      setLastName: action.bound,
      setSummary: action.bound,
      setEmail: action.bound,
      setPhone: action.bound,
      addSkill: action.bound,
      deleteSkill: action.bound,
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

  addSkill(newSkill: string): void {
    this.skills.add(newSkill);
  }

  deleteSkill(skill: string): void {
    this.skills.delete(skill);
  }
}

export default new CvStore();
