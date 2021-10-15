import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class DemoFlex extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.box} />
                <View style={[styles.box, styles.boxBlue]} />
                <View style={[styles.box, styles.boxGreen]} />
                <View style={[styles.box, styles.boxYellow]} />
                <View style={styles.box} />
                <View style={[styles.box, styles.boxBlue]} />
                <View style={[styles.box, styles.boxGreen]} />
                <View style={[styles.box, styles.boxYellow]} />
                <View style={styles.box} />
                <View style={[styles.box, styles.boxBlue]} />
                <View style={[styles.box, styles.boxGreen]} />
                <View style={[styles.box, styles.boxYellow]} />
            </View>
        )
    }
}
 const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    box : {
        height: 100,
        width: 100,
        borderRadius: 10,
        backgroundColor:'#C9C9FF',
    },
    boxBlue :{
        backgroundColor: '#3D85C6',
    },
    
    boxGreen : {
        backgroundColor: '#96CC96',
    },
    
     
    boxYellow : {
        backgroundColor: '#F4B940',
    },
});

