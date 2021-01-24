import React from 'react';
import {Text, View} from 'react-native';
import {NavigationEventComponent} from '@/component/NavigationEventComponent';

export class NavigationEventScreen extends NavigationEventComponent {
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
