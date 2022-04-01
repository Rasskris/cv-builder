import { FC, Dispatch, SetStateAction } from 'react';

import classes from './ThemeItem.module.scss';

type Props = {
  themeId: number;
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  isChecked: boolean;
  setSelectedThemeId: Dispatch<SetStateAction<number>>;
};

export const ThemeItem: FC<Props> = ({
  themeId,
  primaryColor,
  secondaryColor,
  textColor,
  isChecked,
  setSelectedThemeId,
}) => {
  return (
    <label className={classes.theme}>
      <input
        className={classes.theme__radio}
        type="radio"
        checked={isChecked}
        onChange={() => setSelectedThemeId(themeId)}
      />
      <div
        className={classes.theme__blockPrimary}
        style={{ backgroundColor: primaryColor }}
      >
        <span
          className={classes.theme__blockSecondary}
          style={{ backgroundColor: secondaryColor }}
        />
        <span
          className={classes.theme__blockText}
          style={{ backgroundColor: textColor }}
        />
      </div>
    </label>
  );
};
