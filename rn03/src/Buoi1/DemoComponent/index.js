/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';

 import {  View, Text } from 'react-native';
 // stateful component
 class App extends Component {
   render(){
     return(
     <View style = {{marginTop: 50}} >
        <Text style = {{fontSize: 20, fontWeight: "500"}}>Demo Component</Text>
        <Text style = {{fontSize: 18}}>Welcome to React Native 03</Text>
     </View>
     );
   }
 }
 //Stateless Component
 
 // const App = function () {
 //         return(
 //      <View style = {{marginTop: 50}} >
 //      <Text style = {{fontSize: 18}}>Welcome to React Native 03 - Regular</Text>
 //      </View>
 
 //   );
 //   }
 
 export default App;
 