import { FC } from 'react';
import { Sidebar } from '../Sidebar';
import { TemplatePreview } from '../TemplatePreview';

import classes from './App.module.scss';

export const App: FC = () => {
  return (
    <div className={classes.app}>
      <TemplatePreview />
      <Sidebar />
    </div>
  );
};
