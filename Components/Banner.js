
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const imageUrl = 'https://camo.githubusercontent.com/13f70c01a4974429cd368b1c24dfa3c806965948/687474703a2f2f696e736964656f7574646f6f722e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031362f30322f626561636f6e2d6578616d706c6533312e706e67'

export default class Banner extends Component {

    render() {
        return(
            <View style = { styles.container}>
                <Image style = { styles.image}
                    source = {{ uri: imageUrl }}
                />
                <Text style = { styles.textStyle}>
                     Example For Beacon
                </Text>
            </View>    
        )
    }
}


const styles = StyleSheet.create({
    container: {
      //flex: 1,
      //justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
       },
    textStyle: {
        fontSize: 20,
        textAlign: 'center',
        color: '#333333',
        marginBottom: 10,
    },
  })