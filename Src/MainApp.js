import * as React from 'react';
import { View, Image, Text } from 'react-native';
import {  DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './Components/Main.js';
import Search from './Components/Search.js';

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(0, 204, 255)',
    background: 'rgb(255, 255, 255)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    htext: 'rgb(255, 255, 255)'
  },
};

function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
          <View style={{justifyContent:'center', alignItems:'center'}}>
            <Image source={require('./Images/profile.jpg')} style={{height:200, width:200, borderRadius:100, margin:50}}/>
          </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  }

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" options={{drawerIcon:({focused, size})=> <Icon name="home" size={size} color={focused ? MyTheme.colors.primary : MyTheme.colors.text }/>}}>
        {props=><HomeScreen {...props}/>}
        </Drawer.Screen>
        <Drawer.Screen 
          name="Search"
          options={{drawerIcon:({focused, size})=> <Icon name="search" size={size} color={focused ? MyTheme.colors.primary : MyTheme.colors.text }/>}}
        >
        {props=><Search {...props}/>}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
