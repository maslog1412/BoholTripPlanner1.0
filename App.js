import React from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './assets/Screens/HomeScreen/HomeScreen';
import PinnedScreen from './assets/Screens/PinnedScreen/PinnedScreen';
import PlannedTripScreen from './assets/Screens/PlannedTripScreen/PlannedTripScreen';
import OverviewScreen from './assets/Screens/OverviewScreen/OverviewScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'black',
          tabBarLabelStyle: {
            fontSize: 14,
          },
          tabBarStyle: [
            {
              display: 'flex',
            },
            null,
          ],
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5Icon name="home" size={size} color={'black'} />
            ),
          }}
        />
        <Tab.Screen
          name="Pinned"
          component={PinnedScreen}
          options={{
            tabBarLabel: 'Pinned',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5Icon name="map-pin" size={size} color={'black'} />
            ),
          }}
        />
        <Tab.Screen
          name="Planned Trip"
          component={PlannedTripScreen}
          options={{
            tabBarLabel: 'Planned Trip',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5Icon name="map-marked" size={size} color={'black'} />
            ),
          }}
        />
        <Tab.Screen
          name="Overview"
          component={OverviewScreen}
          options={{
            tabBarLabel: 'Overview',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5Icon name="book-open" size={size} color={'black'} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
