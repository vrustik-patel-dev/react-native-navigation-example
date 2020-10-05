/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default class Header extends Component {
    render(){
        return (
            <View style={{flexDirection: "row"}}>
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Icon name="menu" size={30} color="#000" />
                </View>
                <View style={{flex:5, justifyContent:'center', alignItems:'center'}}>
                    <Text>Navigation-Example</Text>
                </View>
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}} />
            </View>
        );
    }
}
