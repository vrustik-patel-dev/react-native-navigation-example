import React,{Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { useTheme } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';

const Header = props => {
    const { colors } = useTheme();

        return (
            <View style={{flexDirection: "row", 
                backgroundColor: colors.primary, 
                flex: 1, 
                shadowColor: "black",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 1,
                shadowRadius: 2,
                elevation: 3,}}>
                <TouchableOpacity style={{flex:1, justifyContent:'center', alignItems:'center'}} onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}>
                    <Icon name="menu" size={30} color={colors.htext}/>
                </TouchableOpacity>
                <View style={{flex:5, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color: colors.htext}}>Navigation-Example</Text>
                </View>
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}} />
            </View>
        );
}

export default Header;
