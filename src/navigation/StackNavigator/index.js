import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '@/scenes/Home';
import {NavigationEventScreen} from '@/scenes/NavigationEvent';
const Stack = createStackNavigator();

export function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={(route, navigation) => ({
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        })}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Overview'}}
        />
        <Stack.Screen
          name="NavigationEvent"
          component={NavigationEventScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
