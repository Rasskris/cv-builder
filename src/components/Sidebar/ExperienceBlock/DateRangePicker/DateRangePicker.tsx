import { FC, Dispatch, SetStateAction } from 'react';
import MuiDateRangePicker, { DateRange } from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';

import { Input } from '../../../ui';
import classes from './DateRangePicker.module.scss';

type Props = {
  dateValue: DateRange<Date>;
  setDateValue: Dispatch<SetStateAction<DateRange<Date>>>;
};

export const DateRangePicker: FC<Props> = ({ dateValue, setDateValue }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiDateRangePicker
        startText="Start"
        endText="End"
        value={dateValue}
        onChange={newValue => {
          setDateValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <div className={classes.wrapper}>
            <Input {...startProps} />
            <Box sx={{ mx: 2, color: 'gray', fontSize: '20px' }}> → </Box>
            <Input {...endProps} />
          </div>
        )}
      />
    </LocalizationProvider>
  );
};
