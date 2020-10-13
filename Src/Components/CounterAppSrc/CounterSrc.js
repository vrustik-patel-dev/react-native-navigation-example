import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import { useTheme } from '@react-navigation/native';

function CounterSrc(props) {
    const { colors } = useTheme();
      return (
        <View style={styles.container}>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={() => props.increaseCounter()} style={[styles.button,{backgroundColor:colors.primary}]}>
                    <Text style={styles.textstyle}> + Increase </Text>
                </TouchableOpacity>
                <View style={[styles.button, { width:50}]}>
                    <Text style={[styles.textstyle,{color:'black'}]}> {props.counterdata} </Text>
                </View>
                <TouchableOpacity onPress={() => props.decreaseCounter()} style={[styles.button,{backgroundColor:colors.primary}]}>
                    <Text style={styles.textstyle}> - Decrease </Text>
                </TouchableOpacity>
            </View>
      </View>
      );    
}

function mapStateToProps(state){
    return {
        counterdata: state.counterdata,
    };
}

function mapDispatchToProps(disptch) {
    return {
        increaseCounter : () => disptch({type:'INCREASE_COUNTER'}),
        decreaseCounter : () => disptch({type:'DECREASE_COUNTER'}),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterSrc);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    height: 50,
    width: 120,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    shadowColor: "black",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 3,
  },
  textstyle:{
      fontSize: 15,
      color: 'white'
  },
});
