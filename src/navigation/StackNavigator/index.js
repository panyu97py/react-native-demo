import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
export function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={(route, navigation) => ({
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        })}>
        {/*<Stack.Screen*/}
        {/*  name="Home"*/}
        {/*  component={HomeScreen}*/}
        {/*  options={{title: 'Overview'}}*/}
        {/*/>*/}
        {/*<Stack.Screen name="Details" component={DetailsScreen} />*/}
        {/*<Stack.Screen*/}
        {/*  name="NavigationEvent"*/}
        {/*  component={NavigationEventScreen}*/}
        {/*/>*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
