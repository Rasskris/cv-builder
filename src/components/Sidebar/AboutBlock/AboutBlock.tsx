import { FC } from 'react';
import { observer } from 'mobx-react-lite';

import cvStore from '../../../stores/cvStore';
import { Input } from '../../ui';
import { BlockWrapper } from '../BlockWrapper';
import classes from './AboutBlock.module.scss';

export const AboutBlock: FC = observer(() => {
  const {
    firstName,
    lastName,
    summary,
    email,
    phone,
    setFirstName,
    setLastName,
    setSummary,
    setEmail,
    setPhone,
  } = cvStore;

  return (
    <BlockWrapper blockName="About">
      <div className={classes.about}>
        <Input
          className={classes.about__input}
          label="First name"
          value={firstName}
          onChange={({ target }) => setFirstName(target.value)}
        />
        <Input
          className={classes.about__input}
          label="Last name"
          value={lastName}
          onChange={({ target }) => setLastName(target.value)}
        />
        <Input
          className={classes.about__input}
          label="Summary"
          multiline
          rows={4}
          value={summary}
          onChange={({ target }) => setSummary(target.value)}
        />
        <Input
          className={classes.about__input}
          label="Phone"
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
        />
        <Input
          className={classes.about__input}
          label="Email"
          type="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
      </div>
    </BlockWrapper>
  );
});
