import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';

import mainContainer from './containers/mainContainer';
 import reducer from 'store/AppAction';


// const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));
export default class App extends Component{
  render(){
  return (
    <View style={styles.container}>
      <Text>Hello!</Text>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
