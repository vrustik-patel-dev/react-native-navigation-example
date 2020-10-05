/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import { View, Image } from 'react-native';
import {  DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './Components/Main.js';
import SettingScreen from './Components/SettingScreen.js';

function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
          <View style={{justifyContent:'center', alignItems:'center'}}>
            <Image source={require('./Images/profile.jpg')} style={{height:200, width:200, borderRadius:100}}/>
          </View>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Close drawer"
          onPress={() => props.navigation.closeDrawer()}
        />
        <DrawerItem
          label="Toggle drawer"
          onPress={() => props.navigation.toggleDrawer()}
        />
      </DrawerContentScrollView>
    );
  }

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={SettingScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
