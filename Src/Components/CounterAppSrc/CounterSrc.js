/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

class CounterSrc extends React.Component {
    render(){
      return (
        <View style={styles.container}>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={() => this.props.increaseCounter()} style={styles.button}>
                    <Text style={styles.textstyle}> + Increase </Text>
                </TouchableOpacity>
                <View style={[styles.button, {backgroundColor:'rgbs(0,0,0,0)', width:50}]}>
                    <Text style={[styles.textstyle,{color:'#000'}]}> {this.props.counterdata} </Text>
                </View>
                <TouchableOpacity onPress={() => this.props.decreaseCounter()} style={styles.button}>
                    <Text style={styles.textstyle}> - Decrease </Text>
                </TouchableOpacity>
            </View>
      </View>
      );
    }
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
    backgroundColor: 'black',
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  textstyle:{
      color:'#fff',
      fontSize: 15,
  },
});
