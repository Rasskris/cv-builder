import { FC, useState, MouseEventHandler } from 'react';
import { observer } from 'mobx-react-lite';
import uniqueId from 'lodash/uniqueId';

import cvStore from '../../../stores/cvStore';
import { BlockWrapper } from '../BlockWrapper';
import { ChipList } from '../ChipList';
import { Input, Button } from '../../ui';
import classes from './SkillsBlock.module.scss';

export const SkillsBlock: FC = observer(() => {
  const [skill, setSkill] = useState('');
  const { skillList, addSkill, deleteSkill } = cvStore;

  const handleAddSkill: MouseEventHandler<HTMLButtonElement> = () => {
    addSkill({
      id: uniqueId(),
      name: skill,
    });
    setSkill('');
  };

  const handleDeleteSkill = (skillId: string) => () => {
    deleteSkill(skillId);
  };

  return (
    <BlockWrapper blockName="Skills">
      <div className={classes.skills}>
        <div className={classes.skills__list}>
          <ChipList data={skillList} onDelete={handleDeleteSkill} />
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
