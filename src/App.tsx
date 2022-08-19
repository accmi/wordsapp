import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Colors } from './config/colors';
import { NavigationConfig } from './config/navigation';
import { HomeScreen, ProfileScreen, CollectionsScreen } from './screens';
import { AppTabBar } from './shared/tabbar';
import { AppHeader } from './shared/appHeader';
import HomeIcon from './assets/icons/home.icon.svg';
import { StatusBar } from 'react-native';

const {
  Screen: { HOME, PROFILE, COLLECTIONS },
} = NavigationConfig;

const Tab = createBottomTabNavigator();

export const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor={Colors.primaryLight}
      />
      <NavigationContainer>
        <Tab.Navigator
          tabBar={props => <AppTabBar {...props} />}
          screenOptions={{
            header: props => <AppHeader {...props} />,
          }}>
          <Tab.Screen
            name={HOME}
            component={HomeScreen}
            options={{
              tabBarActiveTintColor: Colors.tint,
              tabBarIcon: ({ color, size }) => (
                <HomeIcon width={size} height={size} style={{ color }} />
              ),
              tabBarShowLabel: false,
            }}
          />
          <Tab.Screen
            name={COLLECTIONS}
            component={CollectionsScreen}
            options={{
              tabBarActiveTintColor: Colors.tint,
              tabBarIcon: ({ color, size }) => (
                <Icon name="stream" color={color} size={size} />
              ),
              tabBarShowLabel: false,
            }}
          />
          <Tab.Screen
            name={PROFILE}
            component={ProfileScreen}
            options={{
              tabBarActiveTintColor: Colors.tint,
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
