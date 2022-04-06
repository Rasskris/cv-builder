import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import Paper from '@mui/material/Paper';

import { Skill } from '../../../types';
import classes from './SkillsSection.module.scss';

type Props = {
  skillList: Skill[];
};

export const SkillsSection: FC<Props> = observer(({ skillList }) => {
  return (
    <section className={classes.skills}>
      <h3 className={classes.skills__title}>Skills</h3>
      <div className={classes.skills__list}>
        {skillList.map(({ id, name }) => (
          <Paper className={classes.skills__item} key={id} elevation={3}>
            {name}
          </Paper>
        ))}
      </div>
    </section>
  );
});
