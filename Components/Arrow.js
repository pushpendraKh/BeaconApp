import React, { Component }  from 'react';
import { View, StyleSheet } from 'react-native';
import Triangle from './Triangle';

export default class Arrow extends Component {
    render() {
        const { arrowType } = this.props

        if (arrowType === "RIGHT") { 
            return(
                    <View style={{flexDirection: 'row',}}>
                         <Triangle type = { arrowType }/>
                         <View style = { { width: 100, height: 1, backgroundColor: 'red', alignSelf: 'center'}}/>                     
                    </View>
            )
        } else {
            return(
                <View style={{flexDirection: 'row', }}>
                         <View style = { { width: 100, height: 1, backgroundColor: 'red', alignSelf: 'center'}}/>                     
                        <Triangle type = { arrowType }/>
                   </View> 
            )
        }
    }
}