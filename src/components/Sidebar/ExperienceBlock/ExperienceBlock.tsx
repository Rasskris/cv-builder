/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useState, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import type { DateRange } from '@mui/lab/DateRangePicker';
import uniqueId from 'lodash/uniqueId';

import cvStore from '../../../stores/cvStore';
import { ValidateFunction } from '../../../types';
import { useForm } from '../../../hooks';
import { DateRangePicker } from './DateRangePicker';
import { BlockWrapper } from '../BlockWrapper';
import { ChipList } from '../ChipList';
import { Button, ErrorMessage, Input } from '../../ui';
import { getChipListData } from './helpers/getChipListData';
import { isRequired } from '../../../helpers';
import classes from './ExperienceBlock.module.scss';

const initialState = {
  jobTitle: '',
  employer: '',
  description: '',
};

const validations: ValidateFunction[] = [
  ({ jobTitle }) => isRequired(jobTitle) || { jobTitle: 'Job title is required' },
  ({ employer }) => isRequired(employer) || { employer: 'Employer is required' },
  ({ description }) =>
    isRequired(description) || { description: 'Description is required' },
];

export const ExperienceBlock: FC = observer(() => {
  const [dateValue, setDateValue] = useState<DateRange<Date>>([null, null]);
  const { values, errors, handleChange, handleSubmit, resetValues } = useForm(
    initialState,
    validations,
  );

  const isFilledDateValue = dateValue[0] && dateValue[1];
  const { experienceList, addExperience, deleteExperience } = cvStore;

  const chipListData = useMemo(
    () => getChipListData(experienceList),
    [experienceList.length],
  );

  const onSubmit = () => {
    addExperience({
      id: uniqueId(),
      ...values,
      startEndDate: dateValue,
    });

    resetValues(initialState);
    setDateValue([null, null]);
  };

  const handleDeleteExperience = (experienceId: string) => () => {
    deleteExperience(experienceId);
  };

  return (
    <BlockWrapper blockName="Experience">
      <form onSubmit={handleSubmit(onSubmit)} className={classes.experience}>
        <ChipList data={chipListData} onDelete={handleDeleteExperience} />
        <DateRangePicker dateValue={dateValue} setDateValue={setDateValue} />
        <Input
          className={classes.experience__input}
          label="Job title"
          name="jobTitle"
          value={values.jobTitle}
          error={!!errors.jobTitle}
          onChange={handleChange}
        />
        {errors.jobTitle && <ErrorMessage errorMessage={errors.jobTitle} />}
        <Input
          className={classes.experience__input}
          label="Employer"
          name="employer"
          value={values.employer}
          error={!!errors.employer}
          onChange={handleChange}
        />
        {errors.employer && <ErrorMessage errorMessage={errors.employer} />}
        <Input
          className={classes.experience__input}
          label="Description"
          name="description"
          multiline
          rows={4}
          value={values.description}
          error={!!errors.description}
          onChange={handleChange}
        />
        {errors.description && <ErrorMessage errorMessage={errors.description} />}
        <Button
          type="submit"
          className={classes.experience__button}
          disabled={!isFilledDateValue}
        >
          Add experience
        </Button>
      </form>
    </BlockWrapper>
  );
});
