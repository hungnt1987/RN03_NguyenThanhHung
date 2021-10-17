import React, { Component, Fragment } from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity, TouchableHighlight } from 'react-native'

export default class BindingData extends Component {
  name = 'React Native 03';
  address = 'TP.HCM';
  
//set state cho bien  
  state = {
    isLogIn : false,
    
  };
  
  
// Phuong thuc renderName, khai bao kieu expression function, gan 1 bien cho 1 anonymous function
  renderName = () => {
    
    if (this.state.isLogIn){
      return (
    <>
       <Text>{this.name}</Text>
       <Text>{this.address}</Text>
    </>
      );
    }
  };

// Phuong thuc/method onPressButton, su dung arrow function
  onPressButton= () => {
    
    console.log('Button HighLight Press');
    //setState la ham xu ly bat dong bo
    this.setState({isLogIn:true}, () => {console.log(this.state.isLogIn)});
  };

// Phuong thuc render
  render() {
    console.log('render');
    return (
      <View style={styles.container}>
        <Text> Binding Data Component </Text>
        
        {/* Cach su dung phuong thuc/function de render */}
        {/* {this.renderName()} */}

        
        {/* Cach su dung cap ngoac nhon{} de binding. Su dung toan tu 3 ngoi */}
        {/* {this.state.isLogIn ? (
        <>
          <Text>{this.name}</Text>
          <Text>{this.address}</Text>
        </>
        ) : null } */}

        {/* Su dung toan tu && de binding*/}
        {this.state.isLogIn && (
        <>
          <Text>{this.name}</Text>
          <Text>{this.address}</Text>
        </>
        ) }

        <TouchableOpacity style={styles.btn} onPress = {this.onPressButton}>
          <Text>Sign In</Text>
        </TouchableOpacity>
        <TouchableHighlight underlayColor="white" style={[styles.btn, styles.btnHightLight]} onPress = {this.onPressButton}>
          <Text>Sign In</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

//Set styles cho giao dien
const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems:'center',
    flex: 1,
  },
  btn :{
    backgroundColor: '#bfb',
    borderRadius: 20,
    height: 50,
    width: 100,
    justifyContent:'center',
    alignItems:'center',
    marginVertical: 10,
    flexDirection:'row',
  },

  btnHightLight :{
    backgroundColor: '#bbf',
    
  }
})
