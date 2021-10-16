import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, TouchableHighlight } from 'react-native';

export default class BindingData extends Component {
    name = 'RN 03';
    address = 'TP. HCM';
    isShowName = false;
    renderName() {
        if (this.isShowName) {
          return <Text>{this.name}</Text>;
        }
        return <Text>{this.address}</Text>;
      }

    onPressButton(){
        console.log('Button Press');
    } 
      
    render() {
        return (
          <View style={styles.container}>
            <Text> BindingData Component </Text>
            {this.renderName()}
            <TouchableOpacity style={styles.btn} onPressButton = {this.onPressButton}>
                <Text>Sign in</Text>
            </TouchableOpacity>
            <TouchableHighlight style={styles.btnHighLight} onPress = {this.onPressButton}>
                <Text>Sign in</Text>
            </TouchableHighlight>
          </View>
        );
      }
}
const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    btn:{
        backgroundColor:"#bfb",
        height: 50,
        width: 100,
        justifyContent: 'center',
        alignItems:"center",
        borderRadius: 20,
        marginVertical: 10,
        
    },
    btnHighLight:{
        backgroundColor:"#bbf",
        height: 50,
        width: 100,
        justifyContent: 'center',
        alignItems:"center",
        borderRadius: 20,  
    }
    
  });