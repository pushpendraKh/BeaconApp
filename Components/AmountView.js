import React, { Component }  from 'react';
import { View, StyleSheet, Text } from 'react-native';


class ViewWithText extends Component {

    render() {
        return(
            <View style = {[this.props.style]}>
                <Text style = {styles.textStyle }> 
                    { this.props.amount }
                </Text>
            </View>    
        )
    }
}

export default class AmountView extends Component {

    render() {
        let firstBox = 500
        let second = 50000
        let firstPercent = firstBox/(firstBox + second)
        console.log('first', firstPercent)
        return(
            <View style = { styles.container}>
                <ViewWithText amount = '500000' style = { [styles.box ,styles.first, flex = this.firstPercent] } />
                <ViewWithText amount = '500000' style = { [styles.box, styles.second]} />
            </View>
        )
    }

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: 10,
        flexDirection: 'row',
        alignSelf: 'stretch',
        borderColor: '#b6b6b6',
        borderWidth: 'solid',
        borderWidth: 1,
        borderRadius: 2,
    },

    box: {
        flex: 1,
        justifyContent: 'center',
    },

    first: {
        backgroundColor: 'yellow',

    },

    second: {
        backgroundColor: 'purple',
    },

    textStyle: {
        fontSize: 12,
        textAlign: 'center',
        color: 'black',
        padding: 5,
    },

})