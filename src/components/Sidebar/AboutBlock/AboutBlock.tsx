import { ChangeEventHandler, FC } from 'react';
import { observer } from 'mobx-react-lite';

import cvStore from '../../../stores/cvStore';
import { AboutName } from '../../../types';
import { Input } from '../../ui';
import { BlockWrapper } from '../BlockWrapper';
import classes from './AboutBlock.module.scss';

export const AboutBlock: FC = observer(() => {
  const { about, setAbout } = cvStore;

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { name, value } = target;

    setAbout(name as AboutName, value);
  };

  return (
    <BlockWrapper blockName="About">
      <div className={classes.about}>
        <Input
          className={classes.about__input}
          label="First name"
          name={AboutName.FIRST_NAME}
          value={about.firstName}
          onChange={handleChange}
        />
        <Input
          className={classes.about__input}
          label="Last name"
          name={AboutName.LAST_NAME}
          value={about.lastName}
          onChange={handleChange}
        />
        <Input
          className={classes.about__input}
          label="Summary"
          name={AboutName.SUMMARY}
          multiline
          rows={4}
          value={about.summary}
          onChange={handleChange}
        />
        <Input
          className={classes.about__input}
          label="Phone"
          name={AboutName.PHONE}
          value={about.phone}
          onChange={handleChange}
        />
        <Input
          className={classes.about__input}
          label="Email"
          name={AboutName.EMAIL}
          type="email"
          value={about.email}
          onChange={handleChange}
        />
      </div>
    </BlockWrapper>
  );
});
