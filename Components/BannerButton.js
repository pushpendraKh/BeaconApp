import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  View,
} from 'react-native';

export default class BannerButton extends Component {
    render() {
        return(
            <View style = { styles.container}>
                <Button
                    onPress= { this.props.onClick }
                    title = { this.props.title }
                    color="#000"
                />
            </View>    
        )
    }
}

const styles = StyleSheet.create({
    container: {
      height: 40,
      borderColor: '#568EA3',
      borderWidth: 'solid',
      borderWidth: 1,
      borderRadius: 10,
      margin: 5,
    },
  })