import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import {connect} from 'react-redux';
import actions from '@/store/actions';

class StackHome extends Component {
  constructor(props) {
    super(props);
    console.log(this);
  }

  componentDidMount() {
    this.props.setNum(10);
  }

  render() {
    const {
      navigation,
      demoState: {num},
      addNum,
      reduceNum,
      thunkAdd,
    } = this.props;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>StackHome Home Screen</Text>
        <Text>demoState num is {num}</Text>
        <Button
          title="add num"
          onPress={() => {
            addNum(1);
          }}
        />
        <Button
          title="reduce num"
          onPress={() => {
            reduceNum(1);
          }}
        />
        <Button
          title="thunk add num"
          onPress={() => {
            thunkAdd(1);
          }}
        />
        <Button
          title="Go to NavigationEvent"
          onPress={() => navigation.navigate('NavigationEvent')}
        />
      </View>
    );
  }
}

export const StackHomeScreen = connect((state) => ({demoState: state.demo}), {
  ...actions,
})(StackHome);
