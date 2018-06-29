import React, { Component } from 'react';
import {
  StyleSheet,
  WebView,
  Alert
} from 'react-native';

export default class LinkWebView extends Component {

  render() {
    const url = this.props.navigation.getParam('url');
    return(
      <WebView
        source={{ uri: url }}
        startInLoadingState
      />
    )
  }
}