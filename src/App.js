import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header, Button, CardSection, Spinner} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {loggedIn: null, user: null};

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

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({loggedIn: true, user});
      } else {
        this.setState({loggedIn: false, user: null});
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
        );

      case false:
        return <LoginForm />;

      default:
        return <Spinner size="small" />;
    }
  }

  render() {
    return (
      <View>
        <Header
          headerText={
            this.state.user ? this.state.user.email : 'Authentication'
          }
        />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
