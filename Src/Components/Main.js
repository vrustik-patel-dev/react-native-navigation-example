/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
// In App.js in a new project

import React,{ Component } from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from './Header.js';
import HomeScreen from './Home.js';
import CounterApp from './CounterApp.js';

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
            name="Counter"
            component={CounterApp}
            options={{
              tabBarLabel: 'Counter',
              tabBarIcon: ({ color, size }) => (
                <MatIcon name="counter" color={color} size={size} />
              ),
            }}  />
        </Tab.Navigator>
      </View>
    </View>
  );
}
