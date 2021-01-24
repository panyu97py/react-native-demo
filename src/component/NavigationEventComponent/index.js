import React, {Component} from 'react';
import {noop} from '@/utils';

export class NavigationEventComponent extends Component {
  _unSubscribeNavigationOnFocus;

  navigationOnFocus;

  _unSubscribeNavigationOnBlur;

  navigationOnBlur;

  _unSubscribeNavigationOnBeforeRemove;

  navigationOnBeforeRemove;

  _unSubscribeNavigationOnStateChange;

  navigationOnStateChange;

  constructor(props) {
    super(props);
  }

  subscribeEvent({navigation}) {
    // This event is emitted when the screen comes into focus
    this._unSubscribeNavigationOnFocus = navigation.addListener(
      'focus',
      this.navigationOnFocus || noop,
    );

    // This event is emitted when the screen goes out of focus
    this._unSubscribeNavigationOnBlur = navigation.addListener(
      'blur',
      this.navigationOnBlur || noop,
    );

    //  This event is emitted when the user is a leaving the screen, there's a chance to prevent the user from leaving
    this._unSubscribeNavigationOnBeforeRemove = navigation.addListener(
      'beforeRemove',
      this.navigationOnBeforeRemove || noop,
    );

    // This event is emitted when the navigator's state changes
    this._unSubscribeNavigationOnStateChange = navigation.addListener(
      'state',
      this.navigationOnStateChange || noop,
    );
  }

  unSubscribeEvents() {
    this._unSubscribeNavigationOnFocus();
    this._unSubscribeNavigationOnBlur();
    this._unSubscribeNavigationOnBeforeRemove();
    this._unSubscribeNavigationOnStateChange();
  }

  componentDidMount() {
    const {navigation} = this.props;
    this.subscribeEvent({navigation});
  }

  componentWillUnmount() {
    this.unSubscribeEvents();
  }
}
