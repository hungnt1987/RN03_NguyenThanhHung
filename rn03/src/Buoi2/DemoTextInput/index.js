import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TextInput } from 'react-native'

export default class DemoTextInput extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <TextInput style = {styles.textInput} placeholder="example@email.com"/>
                <TextInput style = {styles.textInput} keyboardType="number-pad"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        flex: 1,
        justifyContent:'center',
    },
    textInput:{
        width: '90%',
        height: 50,
        borderWidth: 1,
        borderStyle: "dashed",
        
    }
});