/* eslint-disable prettier/prettier */
import * as React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import Counter from './CounterAppSrc/CounterSrc';

const initialState = {
  counterdata : 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type)
  {
    case 'INCREASE_COUNTER':
      return {counterdata:state.counterdata + 1};
    case 'DECREASE_COUNTER':
      return {counterdata:state.counterdata - 1};
  }
  return state;
};

const store = createStore(reducer);

export default class CounterApp extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}
