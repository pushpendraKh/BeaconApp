import React, { Component }  from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Arrow from './Arrow';


export default class ArrowComponent extends Component {
    render() {
        console.log("Arrow Component")
        return(
            <View style = { styles.container}>
                <Arrow arrowType = "LEFT" />
                <Text style = { styles.textStyle }>
                    10000
                </Text>
                <Arrow arrowType = "RIGHT"/>
            </View>
        )
    }

}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        //alignItems: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    textStyle: {
        fontSize: 20,
        textAlign: 'center',
        color: '#333333',
    },
 
    
})