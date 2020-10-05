/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
// In App.js in a new project

import React,{Component} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Header from './Header.js';
import HomeScreen from './Home.js';
import Search from './Search.js'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={{flex:1}}>
      <View style={{flex:1, justifyContent:'center', backgroundColor:'#fff', alignSelf:'stretch'}}>
        <Header />
      </View>
      <View style={{flex:13}}>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" color={color} size={size} />
              ),
            }} />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              tabBarLabel: 'Search',
              tabBarIcon: ({ color, size }) => (
                <Icon name="search" color={color} size={size} />
              ),
            }}  />
        </Tab.Navigator>
      </View>
    </View>
  );
}
