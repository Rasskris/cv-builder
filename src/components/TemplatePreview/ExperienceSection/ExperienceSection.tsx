import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import format from 'date-fns/format';

import { Experience } from '../../../types';
import classes from './ExperienceSection.module.scss';

type Props = {
  experienceList: Experience[];
};

export const ExperienceSection: FC<Props> = observer(({ experienceList }) => {
  return (
    <section className={classes.experience}>
      <h3 className={classes.experience__title}>Experience</h3>
      <Stepper orientation="vertical">
        {experienceList.map(({ id, jobTitle, employer, startEndDate, description }) => (
          <Step active key={id}>
            <StepLabel>
              <div className={classes.experience__info}>
                <p
                  className={classes.experience__position}
                >{`${jobTitle} at ${employer}`}</p>
                <p className={classes.experience__date}>
                  {`${format(startEndDate[0] as Date, 'MM/yyyy')}
                   - ${format(startEndDate[1] as Date, 'MM/yyyy')}`}
                </p>
              </div>
            </StepLabel>
            <StepContent>
              <Typography className={classes.experience__description}>
                {description}
              </Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </section>
  );
});
