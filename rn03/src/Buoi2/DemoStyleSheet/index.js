import React from "react";
import { Text, View, StyleSheet } from "react-native";


export default class DemoStyleSheet extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.boxStyle}>
                    <Text>Purple: #C9C9FF</Text>
                </View> 
                <View style={[styles.boxStyle, styles.boxBlue]}>
                    <Text>Blue: #3D85C6</Text>
                </View>
                <View style={[styles.boxStyle, styles.boxGreen]}>
                    <Text>Green: #96CC96</Text>
                </View>
                <View style={[styles.boxStyle, styles.boxYellow]}>
                    <Text>Yellow: #F4B940</Text>
                </View>
            </View>
                )
    }
}

const styles = StyleSheet.create({
    
    container:{
       marginTop: 50,
       paddingHorizontal: 20,
       flex: 1,
    },

    boxStyle: {
        backgroundColor: '#C9C9FF', 
        flex: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,

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

