import * as React from 'react';
import SplashScreen from 'react-native-splash-screen';

import MainApp from './Src/MainApp';
export default class App extends React.Component {

  componentDidMount() {
      SplashScreen.hide();
  }

  render(){
    return (
      <MainApp />
    );
  }
}
