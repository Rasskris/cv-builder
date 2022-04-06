import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import Brightness1Icon from '@mui/icons-material/Brightness1';

import { Links } from '../../../types';
import classes from './LinksSection.module.scss';

type Props = {
  links: Links;
};

export const LinksSection: FC<Props> = observer(({ links }) => {
  const { github, linkedIn, telegram, other } = links;

  return (
    <section className={classes.links}>
      <div className={classes.links__list}>
        {github && (
          <div className={classes.link}>
            <GitHubIcon className={classes.link__icon} />
            <Link className={classes.link__text}>{github}</Link>
          </div>
        )}
        {linkedIn && (
          <div className={classes.link}>
            <LinkedInIcon className={classes.link__icon} />
            <Link className={classes.link__text}>{linkedIn}</Link>
          </div>
        )}
        {telegram && (
          <div className={classes.link}>
            <TelegramIcon className={classes.link__icon} />
            <Link className={classes.link__text}>{telegram}</Link>
          </div>
        )}
        {other && (
          <div className={classes.link}>
            <Brightness1Icon className={classes.link__icon} />
            <Link className={classes.link__text}>{other}</Link>
          </div>
        )}
      </div>
    </section>
  );
});
