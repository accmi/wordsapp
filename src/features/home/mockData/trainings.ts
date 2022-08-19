import { appColors } from '~config';

export const mockTraining = [
  {
    id: 0,
    title: 'Words that you need to repeat',
    amount: 10,
    color: appColors.redRegular,
  },
  {
    id: 1,
    title: 'Words that you need to repeat',
    amount: 10,
    color: appColors.redRegular,
  },
  {
    id: 2,
    title: 'Half learnt words',
    amount: 10,
    color: appColors.orangeRegular,
  },
  {
    id: 3,
    title: 'Half learnt words',
    amount: 10,
    color: appColors.orangeRegular,
  },
  {
    id: 4,
    title: 'New words for you',
    amount: 10,
    color: appColors.tint,
  },
  {
    id: 5,
    title: 'New words for you',
    amount: 10,
    color: appColors.tint,
  },
];

export type Traning = typeof mockTraining[0];
