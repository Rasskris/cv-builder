import { FC } from 'react';
import { observer } from 'mobx-react-lite';

import { Project } from '../../../types';
import { ProjectCard } from './ProjectCard';
import classes from './ProjectsSection.module.scss';

type Props = {
  projectList: Project[];
};

export const ProjectsSection: FC<Props> = observer(({ projectList }) => {
  return (
    <section className={classes.projects}>
      <h3 className={classes.projects__title}>Projects</h3>
      <div className={classes.projects__list}>
        {projectList.map(({ id, name, description, repositoryURL, demoURL }) => (
          <ProjectCard
            key={id}
            name={name}
            description={description}
            repositoryURL={repositoryURL}
            demoURL={demoURL}
          />
        ))}
      </div>
    </section>
  );
});
