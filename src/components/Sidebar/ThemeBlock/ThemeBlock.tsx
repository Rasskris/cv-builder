import { FC, useState } from 'react';

import { colorThemeList } from '../../../data/colorThemeList';
import { ThemeItem } from './ThemeItem';
import { BlockWrapper } from '../BlockWrapper';
import classes from './ThemeBlock.module.scss';

export const ThemeBlock: FC = () => {
  const [selectedThemeId, setSelectedThemeId] = useState(1);

  return (
    <BlockWrapper blockName="Theme">
      <div className={classes.themeList}>
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
    </BlockWrapper>
  );
};
