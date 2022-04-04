import { FC } from 'react';
import Chip from '@mui/material/Chip';

import classes from './ChipList.module.scss';

type ChipData = {
  id: string;
  name: string;
};

type Props = {
  data: ChipData[];
  onDelete: (id: string) => () => void;
};

export const ChipList: FC<Props> = ({ data, onDelete }) => {
  return (
    <div className={classes.chipList}>
      {data.map(({ id, name }) => (
        <Chip
          key={id}
          className={classes.chipList__item}
          label={name}
          onDelete={onDelete(id)}
        />
      ))}
    </div>
  );
};
