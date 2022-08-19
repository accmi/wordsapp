import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const getWidthPercantage = (multiplier: number) => {
  return width * multiplier;
};

export const getHeightPercantage = (multiplier: number) => {
  return height * multiplier;
};
