import { FC } from 'react';
import { observer } from 'mobx-react-lite';

import cvStore from '../../stores/cvStore';
import { AboutSection } from './AboutSection';
import { SkillsSection } from './SkillsSection';
import { ExperienceSection } from './ExperienceSection';
import { ProjectsSection } from './ProjectsSection';
import { LinksSection } from './LinksSection';
import classes from './TemplatePreview.module.scss';

export const TemplatePreview: FC = observer(() => {
  const { about, skillList, experienceList, projectList, links } = cvStore;

  return (
    <div className={classes.templatePreview}>
      <AboutSection about={about} />
      <SkillsSection skillList={skillList} />
      <ExperienceSection experienceList={experienceList} />
      <ProjectsSection projectList={projectList} />
      <LinksSection links={links} />
    </div>
  );
});
