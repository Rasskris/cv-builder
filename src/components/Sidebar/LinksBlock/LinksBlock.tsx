import { ChangeEventHandler, FC } from 'react';
import { observer } from 'mobx-react-lite';

import cvStore from '../../../stores/cvStore';
import { LinkName } from '../../../types';
import { BlockWrapper } from '../BlockWrapper';
import { Input } from '../../ui';
import classes from './LinksBlock.module.scss';

export const LinksBlock: FC = observer(() => {
  const { links, setLink } = cvStore;

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { name, value } = target;

    setLink(name as LinkName, value);
  };

  return (
    <BlockWrapper blockName="Links">
      <div className={classes.links}>
        <Input
          className={classes.links__input}
          label="GitHub"
          name={LinkName.GITHUB}
          value={links.github}
          onChange={handleChange}
        />
        <Input
          className={classes.links__input}
          label="LinkedIn"
          name={LinkName.LINKEDIN}
          value={links.linkedIn}
          onChange={handleChange}
        />
        <Input
          className={classes.links__input}
          label="Leet code"
          name={LinkName.LEETCODE}
          value={links.leetcode}
          onChange={handleChange}
        />
        <Input
          className={classes.links__input}
          label="Telegram"
          name={LinkName.TELEGRAM}
          value={links.telegram}
          onChange={handleChange}
        />
        <Input
          className={classes.links__input}
          label="Other"
          name={LinkName.OTHER}
          value={links.other}
          onChange={handleChange}
        />
      </div>
    </BlockWrapper>
  );
});
