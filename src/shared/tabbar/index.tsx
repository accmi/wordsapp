import React from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { View } from '../flexbox/index';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../../config/colors';
import { AppStyles } from '../../config/appStyles';

const iconSize = 28;

export const AppTabBar = ({
  descriptors,
  state,
  navigation,
}: BottomTabBarProps) => {
  return (
    <View backgroundColor={Colors.primaryLight}>
      <View
        flexDirection="row"
        justifyContent="space-around"
        padding={15}
        borderTopLeftRadius={AppStyles.borderRadius + 10}
        borderTopRightRadius={AppStyles.borderRadius + 10}
        backgroundColor={Colors.primaryRegular}>
        {state.routes.map((route, index) => {
          const {
            options: {
              tabBarTestID,
              tabBarAccessibilityLabel,
              tabBarIcon,
              tabBarActiveTintColor,
            },
          } = descriptors[route.key];

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({
                name: route.name,
                merge: true,
                params: {},
              });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const iconColor = isFocused ? Colors.white : Colors.gray;

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={tabBarAccessibilityLabel}
              testID={tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[
                style.tabContainer,
                isFocused && { backgroundColor: tabBarActiveTintColor },
              ]}>
              {tabBarIcon &&
                tabBarIcon({
                  color: iconColor,
                  size: iconSize,
                  focused: isFocused,
                })}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  tabContainer: {
    // backgroundColor: Colors.tint,
    padding: 10,
    borderRadius: iconSize + 10,
  },
});
