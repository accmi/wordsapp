import React from 'react';
import { appStyles } from '../../config/appStyles';
import { appColors } from '../../config/colors';
import { Text, View } from '../../shared/flexbox';

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
