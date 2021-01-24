// In App.js in a new project
import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationEventComponent} from '@/component/NavigationEventComponent';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('NavigationEvent')}
      />
    </View>
  );
}

class NavigationEventScreen extends NavigationEventComponent {
  constructor(props) {
    super(props);
  }

  navigationOnFocus(...params) {
    console.log('navigationOnFocus', params);
  }

  navigationOnBeforeRemove(...params) {
    console.log('navigationOnBeforeRemove', params);
  }

  navigationOnBlur(...params) {
    console.log('navigationOnBlur', params);
  }

  navigationOnStateChange(...params) {
    console.log('navigationOnStateChange', params);
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Navigation Event Screen</Text>
      </View>
    );
  }
}

const Stack = createStackNavigator();

function App() {
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
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen
          name="NavigationEvent"
          component={NavigationEventScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
