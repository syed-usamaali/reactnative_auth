import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentDidMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyAVr3JCk-f9FzJ2F5wbSa5QvqIQ8AAMmZI',
        authDomain: 'authentication-108b1.firebaseapp.com',
        databaseURL: 'https://authentication-108b1.firebaseio.com',
        projectId: 'authentication-108b1',
        storageBucket: 'authentication-108b1.appspot.com',
        messagingSenderId: '567418556682',
        appId: '1:567418556682:web:34b9d1101bd3899ef2aaf3',
        measurementId: 'G-J8GQEBR28W',
      });
    }
  }

  render() {
    return (
      <View>
        <Header headerText={'Authentication'} />
        <LoginForm />
      </View>
    );
  }
}

export default App;
