import React, { FC } from 'react';
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { View, Text } from '../flexbox';
import { Colors } from '../../config/colors';
import { AppStyles } from '../../config/appStyles';
import ArrowIcon from '../../assets/icons/arrow.icon.svg';

export const AppHeader: FC<BottomTabHeaderProps> = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View
      backgroundColor={Colors.primaryLight}
      flexDirection="row"
      alignContent="center"
      paddingTop={top + 25}
      paddingBottom={15}
      borderBottomWidth={1}
      borderBottomColor={Colors.primaryDark}
      paddingHorizontal={AppStyles.containerPadding}>
      <View>
        <Icon name="user-circle" size={34} color={Colors.orangeRegular} />
      </View>
      <View flexBasis="5%" />
      <View>
        <View flexDirection="row" alignItems="center">
          <Text {...AppStyles.getHeadline(Colors.white, 2)}>Alice Smith</Text>
          <View flexBasis={'2%'} />
          <ArrowIcon width={10} height={10} />
        </View>
        <Text color={Colors.white}>Keep up good work!</Text>
      </View>
    </View>
  );
};
