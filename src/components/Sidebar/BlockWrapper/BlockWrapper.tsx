import { FC } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import classes from './BlockWrapper.module.scss';

type Props = {
  blockName: string;
};

export const BlockWrapper: FC<Props> = ({ blockName, children }) => (
  <div className={classes.blockWrapper}>
    <Accordion style={{ backgroundColor: 'rgb(20, 20, 20)' }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon style={{ color: '#fff' }} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography style={{ color: '#fff' }}>{blockName}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  </div>
);
