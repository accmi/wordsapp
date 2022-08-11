import React from 'react';
import { AppStyles } from '../../config/appStyles';
import { Colors } from '../../config/colors';
import { Text, View } from '../../shared/flexbox';

export const ProfileScreen = () => (
  <View
    backgroundColor={Colors.primaryLight}
    flex={1}
    justifyContent="center"
    alignItems="center">
    <Text {...AppStyles.getHeadline(Colors.white, 1)}>Profile Screen</Text>
  </View>
);
