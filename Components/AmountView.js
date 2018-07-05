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

let firstFlexValue = 50000
let secondFlexValue = 40000

export default class AmountView extends Component {

    render() {
        return(
            <View style = { styles.container}>
                <ViewWithText amount = {firstFlexValue} style = { [styles.first, ] } />
                <ViewWithText amount = { secondFlexValue } style = { [styles.second,]} />
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


    first: {
        flex: firstFlexValue,
        backgroundColor: 'yellow',

    },

    second: {
        flex: secondFlexValue,
        backgroundColor: 'purple',
    },

    textStyle: {
        fontSize: 12,
        textAlign: 'center',
        color: 'black',
        padding: 5,
    },

})