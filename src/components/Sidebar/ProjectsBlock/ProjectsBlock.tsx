/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import uniqueId from 'lodash/uniqueId';

import cvStore from '../../../stores/cvStore';
import { Project, ValidateFunction } from '../../../types';
import { useForm } from '../../../hooks';
import { BlockWrapper } from '../BlockWrapper';
import { ChipList } from '../ChipList';
import { Input, Button, ErrorMessage } from '../../ui';
import { isRequired } from '../../../helpers';
import classes from './ProjectsBlock.module.scss';

const initialState: Omit<Project, 'id'> = {
  name: '',
  description: '',
  repositoryURL: '',
  demoURL: '',
};

const validations: ValidateFunction[] = [
  ({ name }) => isRequired(name) || { name: 'Name is required' },
  ({ description }) =>
    isRequired(description) || { description: 'Description is required' },
];

export const ProjectsBlock: FC = observer(() => {
  const { projectList, addProject, deleteProject } = cvStore;
  const { values, errors, handleChange, handleSubmit, resetValues } = useForm(
    initialState,
    validations,
  );

  const chipListData = useMemo(
    () => projectList.map(({ id, name }) => ({ id, name })),
    [projectList.length],
  );

  const handleDeleteProject = (projectId: string) => () => {
    deleteProject(projectId);
  };

  const onSubmit = () => {
    addProject({
      id: uniqueId(),
      ...values,
    });
    resetValues(initialState);
  };

  return (
    <BlockWrapper blockName="Projects">
      <ChipList data={chipListData} onDelete={handleDeleteProject} />
      <form className={classes.projects} onSubmit={handleSubmit(onSubmit)}>
        <Input
          className={classes.projects__input}
          label="Name"
          name="name"
          value={values.name}
          error={!!errors.name}
          onChange={handleChange}
        />
        {errors.name && <ErrorMessage errorMessage={errors.name} />}
        <Input
          className={classes.projects__input}
          label="Description"
          name="description"
          multiline
          rows={4}
          value={values.description}
          error={!!errors.description}
          onChange={handleChange}
        />
        {errors.description && <ErrorMessage errorMessage={errors.description} />}
        <Input
          className={classes.projects__input}
          label="Repository URL"
          name="repositoryURL"
          value={values.repositoryURL}
          onChange={handleChange}
        />
        <Input
          className={classes.projects__input}
          label="Demo URL"
          name="demoURL"
          value={values.demoURL}
          onChange={handleChange}
        />
        <Button type="submit" className={classes.projects__button}>
          Add project
        </Button>
      </form>
    </BlockWrapper>
  );
});
