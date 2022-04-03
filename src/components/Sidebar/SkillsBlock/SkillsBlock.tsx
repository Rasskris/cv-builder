import { FC, useState, MouseEventHandler } from 'react';
import { observer } from 'mobx-react-lite';
import Chip from '@mui/material/Chip';

import cvStore from '../../../stores/cvStore';
import { BlockWrapper } from '../BlockWrapper';
import { Input, Button } from '../../ui';
import classes from './SkillsBlock.module.scss';

export const SkillsBlock: FC = observer(() => {
  const [skill, setSkill] = useState('');
  const { skills, addSkill, deleteSkill } = cvStore;

  const handleAddSkill: MouseEventHandler<HTMLButtonElement> = () => {
    addSkill(skill);
    setSkill('');
  };

  return (
    <BlockWrapper blockName="Skills">
      <div className={classes.skills}>
        <div className={classes.skills__list}>
          {[...skills].map(skill => (
            <Chip
              key={skill}
              className={classes.skills__item}
              label={skill}
              onDelete={() => deleteSkill(skill)}
            />
          ))}
        </div>
        <Input
          className={classes.skills__input}
          label="Skill"
          value={skill}
          onChange={({ target }) => setSkill(target.value)}
        />
        <Button
          className={classes.skills__button}
          onClick={handleAddSkill}
          disabled={skill.length === 0}
        >
          Add skill
        </Button>
      </div>
    </BlockWrapper>
  );
});
