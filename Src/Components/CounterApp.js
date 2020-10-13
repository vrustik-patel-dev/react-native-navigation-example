import * as React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import Counter from './CounterAppSrc/CounterSrc';
import rootReducer from '../reducers/Counter'

const store = createStore(rootReducer);

export default class CounterApp extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}
