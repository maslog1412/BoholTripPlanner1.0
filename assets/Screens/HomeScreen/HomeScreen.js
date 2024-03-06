import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tripfeed from './Tripfeed';  
import TripfeedItemDetail from './TripfeedItemDetail';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tripfeed"
        component={Tripfeed}  
        options={{ header: () => null }}
      />
      <Stack.Screen name="Detail" component={TripfeedItemDetail} />
    </Stack.Navigator>
  );
};

export default HomeScreen;
