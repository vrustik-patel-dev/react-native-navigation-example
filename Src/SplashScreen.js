/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Text, Image} from 'react-native';

export default function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('./Images/logo.png')} style={{width:100, height:100}} />
        <Text>Navigation-Example</Text>
      </View>
    );
  }
