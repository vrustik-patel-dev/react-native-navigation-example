/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, TextInput , StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen() {
    return (
      <View style={styles.container}>
          <View style={styles.searchIcon}>
            <Icon name="search" size={30} color="grey" />
          </View>
          <TextInput placeholderTextColor = "grey" placeholder = "Search..." style = {{flex: 5}} />
        <View style={{flex:1}} />
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        backgroundColor:"#e8e8e8",
        height: 50,
        margin:15,
        borderRadius:25,
        alignItems:'center',
    },
    searchIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    },
});
