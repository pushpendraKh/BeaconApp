import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import BannerButton from './BannerButton';

export default class ButtonsView extends Component {

    render() {
        return(
            <View style = {styles.buttonContainer}>
            <BannerButton title = "Google" 
                          onClick = { () => this.props.navigation.navigate('Web', {
                            url: 'https://google.co.in'
                          })} 
                          />
            <BannerButton title = "Facebook"
                          onClick = { () => this.props.navigation.navigate('Web',{
                            url: 'https://www.facebook.com'
                          })}
                          />
            <BannerButton title = "Linkedin"
                          onClick = { () => this.props.navigation.navigate('Web', {
                          url: 'https://www.linkedin.com/in/pushpendra-khandelwal-3a818ba1/'
                          })}
                          />
            <BannerButton title = "Twitter"
                          onClick = { () => this.props.navigation.navigate('Web', {
                            url: 'https://twitter.com'
                          }) }
                          />
          </View>
        )
    }
}

const styles = StyleSheet.create({   
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
      alignSelf: 'stretch',
    },
  });
  