import { FC } from 'react';

import { ThemeBlock } from './ThemeBlock';
import { AboutBlock } from './AboutBlock';
import { ExperienceBlock } from './ExperienceBlock';
import { ProjectsBlock } from './ProjectsBlock';
import { LinksBlock } from './LinksBlock';
import classes from './Sidebar.module.scss';
import { Button } from '../ui';

export const Sidebar: FC = () => {
  return (
    <aside className={classes.sidebar}>
      <div className={classes.sidebar__blocks}>
        <ThemeBlock />
        <AboutBlock />
        <ExperienceBlock />
        <ProjectsBlock />
        <LinksBlock />
      </div>
      <Button className={classes.sidebar__button}>Download PDF</Button>
    </aside>
  );
};
