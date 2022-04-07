import { FC } from 'react';

import { ThemeBlock } from './ThemeBlock';
import { AboutBlock } from './AboutBlock';
import { SkillsBlock } from './SkillsBlock';
import { ExperienceBlock } from './ExperienceBlock';
import { ProjectsBlock } from './ProjectsBlock';
import { LinksBlock } from './LinksBlock';
import { Button } from '../ui';
import classes from './Sidebar.module.scss';

export const Sidebar: FC = () => {
  return (
    <aside className={classes.sidebar}>
      <div className={classes.sidebar__blocks}>
        <ThemeBlock />
        <AboutBlock />
        <SkillsBlock />
        <ExperienceBlock />
        <ProjectsBlock />
        <LinksBlock />
      </div>
      <Button className={classes.sidebar__button}>Download PDF</Button>
    </aside>
  );
};
