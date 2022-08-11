import { TextStyle } from 'react-native';
import { Colors } from './colors';

type headlineSizes = 1 | 2 | 3 | 4;

export class AppStyles {
  static borderRadius = 12;
  static containerPadding = 15;
  static input: TextStyle = {
    borderRadius: AppStyles.borderRadius,
    paddingVertical: 20,
    paddingHorizontal: 13,
    backgroundColor: Colors.primaryDark,
    color: Colors.white,
  };

  static headline4: TextStyle = {
    fontSize: 11,
  };

  static headline3: TextStyle = {
    fontSize: 14,
  };

  static headline2: TextStyle = {
    fontSize: 16,
  };

  static headline1: TextStyle = {
    fontSize: 24,
  };

  static getHeadline(color: string, size: headlineSizes) {
    switch (size) {
      case 1:
        return { ...AppStyles.headline1, color };
      case 2:
        return { ...AppStyles.headline2, color };
      case 3:
        return { ...AppStyles.headline3, color };
      case 4:
        return { ...AppStyles.headline4, color };
      default:
        throw new Error('There is no predifined size for this headline');
    }
  }
}
