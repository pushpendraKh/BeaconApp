import React, { Component }  from 'react';
import { View, StyleSheet, TouchableHighlight, Text, Alert } from 'react-native';

export default class CustomButton extends Component { 

    render() {
        console.log('Hey Hello ', this.props);
        return ( 
            <View style ={styles.container}>
                <TouchableHighlight onPress = {this.props.onPressButton}>
                    <View style = {styles.button}>
                        <Text style = {styles.buttonText}>
                            { this.props.buttonText }
                        </Text>
                    </View>
                </TouchableHighlight>    
            </View>
        )
    }

}

// CustomButton.defaultProps = {
//     onPressButton: () => {
//         Alert.alert("Props not passed")
//     },
//     buttonText: 'Custom Button'
// }

const styles = StyleSheet.create({

    container: {
        // flex: 1,
         alignItems: 'center',
        // justifyContent: 'center'
    },

    button: {
        height: 40,
        borderColor: '#568EA3',
        borderWidth: 'solid',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
    },

    buttonText: {
        color: 'black',
    }

})
