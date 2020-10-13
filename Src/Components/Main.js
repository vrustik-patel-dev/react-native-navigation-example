import React,{ Component } from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '@react-navigation/native';

import Header from './Header.js';
import HomeScreen from './Home.js';
import CounterApp from './CounterApp.js';

const Tab = createBottomTabNavigator();

export default function App(props) {

  const { colors } = useTheme();

  return (
    <View style={{flex:1}}>

      <View style={{flex:1, justifyContent:'center', alignSelf:'stretch'}}>
        <Header {...props} />
      </View>

      <View style={{flex:12}}>

        <Tab.Navigator 
          tabBarOptions={{
            activeTintColor: colors.primary,
            inactiveTintColor: 'gray',
          }}>

          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" size={size} color={color} />
              ),
            }} />

          <Tab.Screen
            name="Counter"
            component={CounterApp}
            options={{
              tabBarLabel: 'Counter',
              tabBarIcon: ({ color, size }) => (
                <MatIcon name="counter" size={size} color={color} />
              ),
            }} />

        </Tab.Navigator>

      </View>

    </View>
  );
}
