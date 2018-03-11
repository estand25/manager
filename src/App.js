import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import { Header } from './components/common';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAHWKmdHEz0bVZmuIxr0Qq87uhOb7gNnIs',
      authDomain: 'manager-16bbd.firebaseapp.com',
      databaseURL: 'https://manager-16bbd.firebaseio.com',
      projectId: 'manager-16bbd',
      storageBucket: 'manager-16bbd.appspot.com',
      messagingSenderId: '940413259952'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
       <Provider store={createStore(reducers)}>
        <View>
          <Header headerText="Manager" />
          <Text>Hello!</Text>
        </View>
       </Provider>
    );
  }
}

export default App;
