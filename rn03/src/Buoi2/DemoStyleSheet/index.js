import React from "react";
import { Text, View, StyleSheet } from "react-native";


export default class DemoStyleSheet extends React.Component {
    render(){
        return(
            <ScrollView>
            <View style={{marginTop: 50, flex: 1,}}>
                <View style={styles.boxStyle}>
                <Text style = {styles.textStyle}>Purple: #C9C9FF</Text>
                </View> 
                
                <View style={[styles.boxStyle, styles.boxStyleBlue]}>
                           
                <Text style = {styles.textStyle}>Blue: #3D85C6</Text>
                </View>

                <View style={[styles.boxStyle, styles.boxStyleGreen]}>
                           
                <Text style = {styles.textStyle}>Green: #96CC96</Text>
                </View>

                <View style={[styles.boxStyle, styles.boxStyleYellow]}>
                           
                <Text style = {styles.textStyle}>Yellow: #F4B940</Text>
                </View>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create ({
    boxStyle : {
        flex: 1,
        borderRadius: 10,
        backgroundColor: '#C9C9Ff',
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        marginBottom: 20,
        marginHorizontal: 10,
    
    },
    boxStyleBlue : {
        
        backgroundColor: '#3D85C6',
        
    
    },
    boxStyleGreen : {
        
        backgroundColor: '#96CC96',
        
    
    },
    boxStyleYellow : {
        
        backgroundColor: '#F4B940',
        
    
    },
    textStyle : {
        fontWeight: '900',
    },
})

