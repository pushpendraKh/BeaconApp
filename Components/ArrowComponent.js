import React, { Component }  from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Arrow from './Arrow';


export default class ArrowComponent extends Component {
    render() {
        console.log("Arrow Component")
        return(
            <View style = { styles.container}>
                <Arrow arrowType = "RIGHT" style = {styles.arrowStyle } />
                <Text style = { styles.textStyle}>
                    { this.props.text }
                </Text>
                <Arrow arrowType = "LEFT" style = {styles.arrowStyle }/>
            </View>
        )
    }

}

const styles = StyleSheet.create( {
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    textStyle: {
        fontSize: 16,
        textAlign: 'center',
        color: '#333333',
        marginLeft: 5,
        marginRight: 5,
    },

    arrowStyle: {
        flex: 1,
    },

    
})