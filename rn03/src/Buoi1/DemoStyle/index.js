import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
export default class DemoStyle extends Component {
    render(){
        return (
            <View style={{marginTop: 50, paddingLeft: 10, paddingRight: 10}}>
                <View style={[boxStyle,boxPurple]}>
                    <Text style = {textStyle}>Purple: #C9C9FF</Text>
                </View> 
                <View style={[boxStyle,boxBlue]}>
                    <Text style = {textStyle}>Blue: #3D85C6</Text>
                </View>
                <View style={[boxStyle,boxGreen]}>
                    <Text style = {textStyle}>Green: #96CC96</Text>
                </View>
                <View style={[boxStyle,boxYellow]}>
                    <Text style = {textStyle}>Yellow: #F4B940</Text>
                </View>
            </View>
                )
    }
}
const boxStyle = {
    borderRadius: 10,
    backgroundColor: '#C9C9Ff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,

};

const boxBlue = {
    backgroundColor: '#3D85C6',
};

const boxGreen = {
    backgroundColor: '#96CC96',
};

const boxPurple = {
    backgroundColor: '#C9C9FF',
};

const boxYellow = {
    backgroundColor: '#F4B940',
};

const textStyle = {
    fontWeight: '900',
};
