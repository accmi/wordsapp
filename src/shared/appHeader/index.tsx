import React, { FC } from 'react';
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import { View, Text } from '../flexbox';
import { Colors } from '../../config/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { AppStyles } from '../../config/appStyles';

export const AppHeader: FC<BottomTabHeaderProps> = () => {
  return (
    <View
      backgroundColor={Colors.primaryLight}
      flexDirection="row"
      alignContent="center"
      paddingVertical={25}
      paddingHorizontal={AppStyles.containerPadding}>
      <View>
        <Icon name="user-circle" size={34} color={Colors.orangeRegular} />
      </View>
      <View flexBasis="5%" />
      <View>
        <View flexDirection="row" alignItems="center">
          <Text {...AppStyles.getHeadline(Colors.white, 2)}>Alice Smith</Text>
          <View flexBasis={'2%'} />
          <Icon name="caret-square-right" size={16} color={Colors.white} />
        </View>
        <Text color={Colors.white}>Keep up good work!</Text>
      </View>
    </View>
  );
};
