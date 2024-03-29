import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';
import {
  firebaseApiKey
} from './src/firebaseApiKey';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: firebaseApiKey,
      authDomain: 'manager-16bbd.firebaseapp.com',
      databaseURL: 'https://manager-16bbd.firebaseio.com',
      projectId: 'manager-16bbd',
      storageBucket: 'manager-16bbd.appspot.com',
      messagingSenderId: '940413259952'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
       <Provider store={store} >
        <Router />
       </Provider>
    );
  }
}

export default App;
