import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StackHomeScreen} from '@/scenes/StackHome';
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
          name="StackHome"
          component={StackHomeScreen}
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
