import { action, makeObservable, observable } from 'mobx';

import { DEFAULT_CV_VALUES } from '../../data';
import {
  About,
  Skill,
  Experience,
  Project,
  Links,
  AboutName,
  LinkName,
} from '../../types';

class CvStore {
  about: About = DEFAULT_CV_VALUES.about;

  skillList: Skill[] = DEFAULT_CV_VALUES.skillList;

  experienceList: Experience[] = DEFAULT_CV_VALUES.experienceList;

  projectList: Project[] = DEFAULT_CV_VALUES.projectList;

  links: Links = DEFAULT_CV_VALUES.links;

  constructor() {
    makeObservable(this, {
      about: observable,
      skillList: observable,
      experienceList: observable,
      projectList: observable,
      links: observable,
      setAbout: action.bound,
      setLink: action.bound,
      addSkill: action.bound,
      addExperience: action.bound,
      addProject: action.bound,
      deleteSkill: action.bound,
      deleteExperience: action.bound,
      deleteProject: action.bound,
    });
  }

  setAbout(aboutName: AboutName, aboutValue: string): void {
    this.about[aboutName] = aboutValue;
  }

  setLink(linkName: LinkName, linkValue: string): void {
    this.links[linkName] = linkValue;
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
