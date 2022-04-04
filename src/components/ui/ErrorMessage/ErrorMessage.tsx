import { FC } from 'react';

import classes from './ErrorMessage.module.scss';

type Props = {
  errorMessage: string;
};

export const ErrorMessage: FC<Props> = ({ errorMessage }) => (
  <p className={classes.error}>{errorMessage}</p>
);
