import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

export class HomeScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
          title="Go to NavigationEvent"
          onPress={() => navigation.navigate('NavigationEvent')}
        />
      </View>
    );
  }
}
