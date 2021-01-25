import React from 'react';
import {Button, View, Text} from 'react-native';

class Register extends React.Component {
  static navigationOptions = {
    title: 'Register',
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Button
          title="Go to Login screen"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    );
  }
}
export default Register;
