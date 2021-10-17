
import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
// import hinh vao theo ES6
import Alto_icon from './Images/Alto_icon.png';
import Alto_0 from './Images/Alto_0.png';

// tao component
export default class ExUI extends Component {
    gameInfor = {
        title: "Alto's Odyssey",
        icon: Alto_icon,
        subTitle:
        'Just beyond the horizon sits a majestic desert, vast and unexplored.',
        preview: Alto_0,
        backgroundColor: '#824671CC',
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={this.gameInfor.preview}/>
                <View style={[styles.infor, {backgroundColor: this.gameInfor.backgroundColor}]}>
                    <Image source={this.gameInfor.icon} style={styles.icon}/>
                    <View style={styles.inforContent}>
                        <Text>{this.gameInfor.title}</Text>
                        <Text>{this.gameInfor.subTitle}</Text>
                    </View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#343434',
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    icon:{
        height: 80,
        width: 80,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'white',
    },
    infor:{
       
      width: '90%',
      marginTop: 20,
      borderRadius: 10,
      paddingVertical: 20,
      paddingHorizontal: 10,
      flexDirection: 'row',
      justifyContent:'space-between',
    },
    inforContent:{
      width: '80%',  
    },
})
