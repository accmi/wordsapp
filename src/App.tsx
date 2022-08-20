import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { appColors, Screens } from './config';
import { HomeScreen, ProfileScreen, CollectionsScreen } from './features';
import { AppTabBar } from './shared/components/tabbar';
import { AppHeader } from './shared/components/appHeader';
import HomeIcon from './assets/icons/home.icon.svg';
import { StatusBar } from 'react-native';

const Tab = createBottomTabNavigator();

export const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor={appColors.primaryLight}
      />
      <NavigationContainer>
        <Tab.Navigator
          tabBar={props => <AppTabBar {...props} />}
          screenOptions={{
            header: props => <AppHeader {...props} />,
          }}>
          <Tab.Screen
            name={Screens.HOME}
            component={HomeScreen}
            options={{
              tabBarActiveTintColor: appColors.tint,
              tabBarIcon: ({ color, size }) => (
                <HomeIcon width={size} height={size} color={color} />
              ),
              tabBarShowLabel: false,
            }}
          />
          <Tab.Screen
            name={Screens.COLLECTIONS}
            component={CollectionsScreen}
            options={{
              tabBarActiveTintColor: appColors.tint,
              tabBarIcon: ({ color, size }) => (
                <Icon name="stream" color={color} size={size} />
              ),
              tabBarShowLabel: false,
            }}
          />
          <Tab.Screen
            name={Screens.PROFILE}
            component={ProfileScreen}
            options={{
              tabBarActiveTintColor: appColors.tint,
              tabBarIcon: ({ color, size }) => (
                <Icon name="user-alt" color={color} size={size} />
              ),
              tabBarShowLabel: false,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};
