import { FC, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { colorThemeList } from '../../../data/colorThemeList';
import { ThemeItem } from './ThemeItem';
import classes from './ThemeBlock.module.scss';

export const ThemeBlock: FC = () => {
  const [selectedThemeId, setSelectedThemeId] = useState(1);

  return (
    <div className={classes.themeBlock}>
      <Accordion style={{ backgroundColor: 'rgb(20, 20, 20)' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: '#ffffff' }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{ color: '#ffffff' }}>Theme</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.themeBlock__list}>
            {colorThemeList.map(({ id, primaryColor, secondaryColor, textColor }) => (
              <ThemeItem
                key={id}
                themeId={id}
                primaryColor={primaryColor}
                secondaryColor={secondaryColor}
                textColor={textColor}
                isChecked={id === selectedThemeId}
                setSelectedThemeId={setSelectedThemeId}
              />
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
