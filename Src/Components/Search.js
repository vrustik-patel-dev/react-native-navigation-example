import * as React from 'react';
import {View, TextInput , StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '@react-navigation/native';

import Header from './Header.js';

export default function HomeScreen(props) {
  const { colors } = useTheme();
    return (
      <View style={{flex:1}}>

        <View style={{flex:1, justifyContent:'center', alignSelf:'stretch'}}>
          <Header {...props} />
        </View>

        <View style={{flex:12}}>
          <View style={[styles.container,{backgroundColor: colors.border}]}>
            <View style={styles.searchIcon}>
              <Icon name="search" size={30} />
            </View>
            <TextInput placeholderTextColor = "grey" placeholder = "Search..." style = {{flex: 5}} />
          </View>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        height: 50,
        margin:15,
        borderRadius:50,
        alignItems:'center'
    },
    searchIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    },
});
