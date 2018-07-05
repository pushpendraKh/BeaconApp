import React, { Component }  from 'react';
import { View, StyleSheet } from 'react-native';
import Triangle from './Triangle';

export default class Arrow extends Component {
    render() {
        const { arrowType } = this.props

        if (arrowType === "RIGHT") { 
            return(
                <View style={[this.props.style, {flexDirection: 'row',}]}>
                        <Triangle type = { arrowType }/>
                        <View style = { styles.line }/> 
                </View>
            )
        } else {
            return(
                <View style= { [ this.props.style, styles.container]}>
                    <View style = { styles.line }/>                     
                    <Triangle type = { arrowType }/>
                </View> 
            )
        }
    }
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
    },

    line: {
        height: 1, 
        backgroundColor: 'black',
        alignSelf: 'center', 
        flex: 1,
    }

})