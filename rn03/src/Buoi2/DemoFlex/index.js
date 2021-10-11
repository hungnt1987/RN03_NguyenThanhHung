import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class DemoFlex extends Component {
    render() {
        return (
            <View style = {{flex : 1, 
            flexDirection: 'row',
            flexWrap: 'wrap',
            }}>
                <View style = {{backgroundColor: "#C9C9Ff", width: 100, height: 100}} />
                <View style = {{backgroundColor: "#3D85C6", width: 100, height: 100}} />
                <View style = {{backgroundColor: "#96CC96", width: 100, height: 100}} />
                <View style = {{backgroundColor: "#C9C9Ff", width: 100, height: 100}} />
                <View style = {{backgroundColor: "#3D85C6", width: 100, height: 100}} />
            </View>
        )
    }
}
