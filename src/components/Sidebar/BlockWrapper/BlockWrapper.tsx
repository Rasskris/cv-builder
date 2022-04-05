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
  <Accordion className={classes.blockWrapper}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon style={{ color: '#fff' }} />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography className={classes.blockWrapper__title}>{blockName}</Typography>
    </AccordionSummary>
    <AccordionDetails>{children}</AccordionDetails>
  </Accordion>
);
