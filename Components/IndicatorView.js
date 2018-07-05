import React, { Component }  from 'react';
import { View, StyleSheet, Text } from 'react-native';


class IndicatorText extends Component {

    render() {
        return(
            <View style = {[this.props.style, styles.indicatorStyle] }>
                <View style = { [styles.box, {backgroundColor: this.props.bgColor} ]}/>
                <Text style = {styles.textStyle }> 
                    { this.props.indicatorText }
                </Text>
            </View>    
        )
    }
}

let firstFlexValue = 50000
let secondFlexValue = 40000

export default class IndicatorView extends Component {

    render() {
        return(
            <View style = { styles.container}>
                <IndicatorText indicatorText = 'Utilized Credit' bgColor = 'yellow' style = { [styles.viewStyle, styles.first]}/>
                <IndicatorText indicatorText = 'Available Credit' bgColor = 'purple' style = { [styles.viewStyle,styles.second]}/>
            </View>
        )
    }

}

const styles = StyleSheet.create({

    indicatorStyle: {
        flexDirection:'row', 
    },

    container: {
        flex: 1,
        marginTop: 10,
        flexDirection: 'row',
        alignSelf: 'stretch',
    },

    box: {
        width: 20,
        height: 20,
        backgroundColor: 'gray'
    },

    viewStyle: {
        flex: 1,
    },

    first: {
         flex: firstFlexValue,
    },

    second: {
         flex: secondFlexValue,
    },

    textStyle: {
        fontSize: 14,
        textAlign: 'center',
        color: 'black',
        marginLeft: 10,
        marginRight: 10
    },

})