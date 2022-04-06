import { FC } from 'react';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

import { Project } from '../../../../types';
import classes from './ProjectCard.module.scss';

type Props = Omit<Project, 'id'>;

export const ProjectCard: FC<Props> = ({ name, description, repositoryURL, demoURL }) => {
  return (
    <div className={classes.projectCard}>
      <div className={classes.projectCard__about}>
        <h5 className={classes.projectCard__title}>{name}</h5>
        <p className={classes.projectCard__description}>{description}</p>
      </div>
      <div className={classes.projectCard__links}>
        {repositoryURL && (
          <div className={classes.projectCard__link}>
            <GitHubIcon className={classes.projectCard__linkIcon} />
            <Link className={classes.projectCard__linkText}>{repositoryURL}</Link>
          </div>
        )}
        {demoURL && (
          <div className={classes.projectCard__link}>
            <InsertLinkIcon className={classes.projectCard__linkIcon} />
            <Link className={classes.projectCard__linkText}>{demoURL}</Link>
          </div>
        )}
      </div>
    </div>
  );
};
