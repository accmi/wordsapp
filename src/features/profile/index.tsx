import React from 'react';
import { appStyles } from '~config';
import { appColors } from '~config';
import { Text, View } from '~shared';

export const ProfileScreen = () => (
  <View
    backgroundColor={appColors.primaryLight}
    flex={1}
    justifyContent="center"
    alignItems="center">
    <Text color={appColors.white} fontSize={appStyles.h1}>
      Profile Screen
    </Text>
  </View>
);
