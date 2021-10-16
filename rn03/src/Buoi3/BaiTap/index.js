import Alto_icon from './Images/Alto_icon.png';
import Alto_0 from './Images/Alto_0.png';

const data  = {
    id : 1,
    title: "Alto's Odyssey",
    icon: Alto_icon,
    subTitle:
      'Just beyond the horizon sits a majestic desert, vast and unexplored.',
    description:
      'Just beyond the horizon sits a majestic desert, vast and unexplored.\nJoin Alto and his friends and set off on an endless sandboarding journey to discover its secrets. Soar above windswept dunes, traverse thrilling canyons, and explore long-hidden temples in a fantastical place far from home.',
    age: '9+',
    rating: 4.4,
    preview: [Alto_0],
    backgroundColor: '#824671CC',
}

import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export default class BinddingData extends Component {
    

    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}