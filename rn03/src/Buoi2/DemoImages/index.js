import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TextInput } from 'react-native'

export default class DemoImages extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text> textInComponent </Text>
                <Image  
                source = {require('./Screenshot_1633958147.png')} />
                <Image   
                style = {{width:100, height:200}}
                source = {{ 
                    uri: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Ff%2Ffb%2FWelchcorgipembroke.JPG&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FPembroke_Welsh_Corgi&tbnid=Ja4xPimgkXmtSM&vet=12ahUKEwjJ1Ia8xsLzAhUpIqYKHSRTCIkQMygCegUIARDQAQ..i&docid=BBJ_9I_2GxfuBM&w=2967&h=1978&q=corgi&client=firefox-b-d&ved=2ahUKEwjJ1Ia8xsLzAhUpIqYKHSRTCIkQMygCegUIARDQAQ'
                }} />
                <TextInput style = {{
                    borderWidth: 1, 
                    borderColor: '#C9C9Ff', 
                    borderStyle:'solid', 
                    width:'100%',
                    placeholder = "Balance",
                    keyboardType = "number-pad",    
                    }} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
