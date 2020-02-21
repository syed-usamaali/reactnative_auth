import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import firebase from 'firebase';
import {Card, CardSection, Button, Input, Spinner} from './common';

class LoginForm extends Component {
  state = {email: '', password: '', error: ''};

  onButtonPress() {
    const {email, password} = this.state;

    this.setState({error: ''});

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .catch(() => this.setState({error: 'Authentication Failed'}));
      });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({email})}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="passwords"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({password})}
          />
        </CardSection>

        <Text style={styles.errorStyle}>{this.state.error}</Text>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  errorStyle: {
    fontSize: 18,
    color: 'red',
    alignSelf: 'center',
  },
});

export default LoginForm;