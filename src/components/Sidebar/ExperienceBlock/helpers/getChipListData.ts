import { Experience } from '../../../../types';

export const getChipListData = (experienceList: Experience[]) =>
  experienceList.map(({ id, jobTitle, employer }) => ({
    id,
    name: `${jobTitle} - "${employer}"`,
  }));
