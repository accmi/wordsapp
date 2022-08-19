import React, { FC } from 'react';
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { View, Text } from '../flexbox';
import { appStylesMeasures, appColors, appStyles } from '~config';
import ArrowIcon from '~assets/icons/arrow.icon.svg';

export const AppHeader: FC<BottomTabHeaderProps> = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View
      backgroundColor={appColors.primaryLight}
      flexDirection="row"
      alignContent="center"
      paddingTop={top + 25}
      paddingBottom={15}
      borderBottomWidth={1}
      borderBottomColor={appColors.primaryDark}
      paddingHorizontal={appStylesMeasures.containerPadding}>
      <View>
        <Icon name="user-circle" size={34} color={appColors.orangeRegular} />
      </View>
      <View flexBasis="5%" />
      <View>
        <View flexDirection="row" alignItems="center">
          <Text color={appColors.white} fontSize={appStyles.h3}>
            Alice Smith
          </Text>
          <View flexBasis={'2%'} />
          <ArrowIcon width={10} height={10} />
        </View>
        <Text color={appColors.white}>Keep up good work!</Text>
      </View>
    </View>
  );
};
