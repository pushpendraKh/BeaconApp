import React, { Component }  from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';

export default class CustomButton extends Component { 

    render() {
        console.log('Hey Hello ', this.props);
        return ( 
            <View { ...this.props }>
                <TouchableOpacity onPress = {this.props.onPressButton}>
                    <View style = {styles.button}>
                        <Text style = {styles.buttonText}>
                            { this.props.buttonText }
                        </Text>
                    </View>
                </TouchableOpacity>    
            </View>
        )
    }

}

CustomButton.defaultProps = {
    onPressButton: () => {
        Alert.alert("Props not passed")
    },
    buttonText: 'Custom Button'
}

const styles = StyleSheet.create({

    button: {
        borderColor: '#568EA3',
        borderWidth: 'solid',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center'
    },

    buttonText: {
        color: 'black',
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 5,
        marginRight: 10,
        marginLeft: 10
    }

})
