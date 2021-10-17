import React, { Component } from 'react';
import { Text, View, StyleSheet,Image, ScrollView } from 'react-native';
// import hinh vao theo ES6
import Alto_icon from './Images/Alto_icon.png';
import Alto_0 from './Images/Alto_0.png';
export default class RenderList extends Component {
    listGameInfor = [
        {
        title: "Alto's Odyssey",
        icon: Alto_icon,
        subTitle:
        'Just beyond the horizon sits a majestic desert, vast and unexplored.',
        preview: Alto_0,
        backgroundColor: '#824671CC',
        },
        {
            title: "Alto's Odyssey",
            icon: Alto_icon,
            subTitle:
            'Just beyond the horizon sits a majestic desert, vast and unexplored.',
            preview: Alto_0,
            backgroundColor: '#96CC96',
        },
        {
            title: "Alto's Odyssey",
            icon: Alto_icon,
            subTitle:
            'Just beyond the horizon sits a majestic desert, vast and unexplored.',
            preview: Alto_0,
            backgroundColor: '#F4B940',
        },
        {
            title: "Alto's Odyssey",
            icon: Alto_icon,
            subTitle:
            'Just beyond the horizon sits a majestic desert, vast and unexplored.',
            preview: Alto_0,
            backgroundColor: '#96CC96',
        },
        {
            title: "Alto's Odyssey",
            icon: Alto_icon,
            subTitle:
            'Just beyond the horizon sits a majestic desert, vast and unexplored.',
            preview: Alto_0,
            backgroundColor: '#F4B940',
        },
        {
            title: "Alto's Odyssey",
            icon: Alto_icon,
            subTitle:
            'Just beyond the horizon sits a majestic desert, vast and unexplored.',
            preview: Alto_0,
            backgroundColor: '#96CC96',
        },
        {
            title: "Alto's Odyssey",
            icon: Alto_icon,
            subTitle:
            'Just beyond the horizon sits a majestic desert, vast and unexplored.',
            preview: Alto_0,
            backgroundColor: '#F4B940',
        },
            
    ];
    //phuong thuc renderListGameInfor
    renderListGameInfor = () => {
        const result =  this.listGameInfor.map((game, index) => {
            return(
                <View key = {index} style={[styles.infor, {backgroundColor: game.backgroundColor}]}>
                    <Image source={game.icon} style={styles.icon}/>
                    <View style={styles.inforContent}>
                        <Text>{game.title}</Text>
                        <Text>{game.subTitle}</Text>
                    </View>
                    
                </View>
            );
        });
        return result;
    }
    render() {
        return (
            <View style={styles.container}>
                {/* <View style={[styles.infor, {backgroundColor: this.listGameInfor[0].backgroundColor}]}>
                    <Image source={this.listGameInfor[0].icon} style={styles.icon}/>
                    <View style={styles.inforContent}>
                        <Text>{this.listGameInfor[0].title}</Text>
                        <Text>{this.listGameInfor[0].subTitle}</Text>
                    </View>

                </View> */}
                <ScrollView>
                    {this.renderListGameInfor()}
                </ScrollView>
                
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
