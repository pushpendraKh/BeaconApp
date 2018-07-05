import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  View,
} from 'react-native';
import CustomButton from './CustomButton';

export default class BannerButton extends Component {
    render() {    
        return(
            <CustomButton style = { styles.container}
                    onPressButton= { this.props.onClick }
                    buttonText = { this.props.title }
            />   
        )
    }
}

const styles = StyleSheet.create({
    container: {
      margin: 5,
    },
  })