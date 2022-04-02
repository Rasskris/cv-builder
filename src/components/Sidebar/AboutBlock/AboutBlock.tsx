import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import cvStore from '../../../stores/cvStore';
import { CustomInput } from '../../ui';
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
    <div className={classes.aboutBlock}>
      <Accordion style={{ backgroundColor: 'rgb(20, 20, 20)' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: '#ffffff' }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{ color: '#ffffff' }}>About</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.aboutBlock__inputs}>
            <CustomInput
              className={classes.aboutBlock__input}
              label="First name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <CustomInput
              className={classes.aboutBlock__input}
              label="Last name"
              value={lastName}
              onChange={({ target }) => setLastName(target.value)}
            />
            <CustomInput
              className={classes.aboutBlock__input}
              label="Summary"
              multiline
              rows={4}
              value={summary}
              onChange={({ target }) => setSummary(target.value)}
            />
            <CustomInput
              className={classes.aboutBlock__input}
              label="Phone"
              value={phone}
              onChange={({ target }) => setPhone(target.value)}
            />
            <CustomInput
              className={classes.aboutBlock__input}
              label="Email"
              type="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
});
