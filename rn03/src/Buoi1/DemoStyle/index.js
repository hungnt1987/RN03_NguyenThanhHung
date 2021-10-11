import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';



export default class DemoStyle extends Component {
    render(){
        return (
            <ScrollView>
            <View style={{marginTop: 50, paddingLeft: 10, paddingRight: 10}}>
                <View style={{
                    backgroundColor:'#C9C9FF', 
                    height: 150, 
                    justifyContent: 'center', 
                    alignItems:'center', 
                    borderRadius: 10,
                    marginTop: 10,
                    marginBottom: 10,
                    }}>
                <Text style = {{
                    fontWeight: 'bold',
                    fontFamily: "Cochin",
                }}>Purple: #C9C9FF</Text>
                </View> 
                
                <View style={{
                    backgroundColor:'#3D85C6', 
                    height: 150, 
                    justifyContent: 'center', 
                    alignItems:'center', 
                    borderRadius: 10,
                    marginTop: 10,
                    marginBottom: 10,}}>
                           
                <Text style = {{
                    fontWeight: 'bold',
                    fontFamily: "Cochin",
                }}>Blue: #3D85C6</Text>
                </View>

                <View style={{
                    backgroundColor:'#96CC96', 
                    height: 150, 
                    justifyContent: 'center', 
                    alignItems:'center', 
                    borderRadius: 10,
                    marginTop: 10,
                    marginBottom: 10,}}>
                           
                <Text style = {{
                    fontWeight: 'bold',
                    fontFamily: "Cochin",
                }}>Green: #96CC96</Text>
                </View>

                <View style={{
                    backgroundColor:'#F4B940', 
                    height: 150, 
                    justifyContent: 'center', 
                    alignItems:'center', 
                    borderRadius: 10,
                    marginTop: 10,
                    marginBottom: 10,}}>
                           
                <Text style = {{
                    fontWeight: 'bold',
                    fontFamily: "Cochin",
                }}>Yellow: #F4B940</Text>
                </View>
            </View>
            </ScrollView>
        )
    }
}