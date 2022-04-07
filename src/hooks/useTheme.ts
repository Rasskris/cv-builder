import { useLayoutEffect } from 'react';

import { themesData } from '../data/themesData';

export const useTheme = (themeId: number): void => {
  useLayoutEffect(() => {
    const selectedTheme = themesData[`theme_${themeId}`];

    for (const key in selectedTheme) {
      document.documentElement.style.setProperty(`--${key}`, selectedTheme[key]);
    }
  }, [themeId]);
};
