import React, { Component } from 'react';
import {
  createStackNavigator
} from 'react-navigation';
import App from './App'
import LinkWebView from './Components/WebView'

export default Navigator = createStackNavigator({
    //Home: App,
    Home: {
        screen: App,
        navigationOptions: {
            title: 'HOME',
            headerStyle: {
                backgroundColor: '#568EA3',
            },
        },
     },
    Web: {
        screen: LinkWebView,
        navigationOptions: {
            title: 'WEB VIEW',
            headerStyle: {
                backgroundColor: '#568EA4',
            },
        },
    } 
})