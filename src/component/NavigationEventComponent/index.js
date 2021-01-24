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
    this._unSubscribeNavigationOnFocus = navigation.addListener(
      'focus',
      this.navigationOnFocus || noop,
    );

    this._unSubscribeNavigationOnBlur = navigation.addListener(
      'blur',
      this.navigationOnBlur || noop,
    );

    this._unSubscribeNavigationOnBeforeRemove = navigation.addListener(
      'focus',
      this.navigationOnBeforeRemove || noop,
    );

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
