import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export class Measures {
  static getWidthPercantage(multiplier: number) {
    return width * multiplier;
  }

  static getHeightPercantage(multiplier: number) {
    return height * multiplier;
  }
}
