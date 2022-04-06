import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import EmailIcon from '@mui/icons-material/Email';

import { About } from '../../../types';
import classes from './AboutSection.module.scss';

type Props = {
  about: About;
};

export const AboutSection: FC<Props> = observer(({ about }) => {
  const { firstName, lastName, summary, phone, email } = about;

  return (
    <section className={classes.about}>
      <div className={classes.about__contactList}>
        <div>
          <p className={classes.about__contact}>
            <PermPhoneMsgIcon className={classes.about__contactIcon} />
            <span>{phone}</span>
          </p>
          <p className={classes.about__contact}>
            <EmailIcon className={classes.about__contactIcon} />
            <span>{email}</span>
          </p>
        </div>
      </div>
      <p className={classes.about__name}>{`${firstName} ${lastName}`}</p>
      <p className={classes.about__summary}>{summary}</p>
    </section>
  );
});
