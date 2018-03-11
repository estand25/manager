import React, { Component } from 'react';
import { View, Text } from 'react-native';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import { Header } from './components/common';

class App extends Component {
  render() {
    return (
      // <Provider store={createStore()}>
        <View>
          <Header headerText="Manager" />
          <Text>Hello!</Text>
        </View>
      // </Provider>
    );
  }
}

export default App;
