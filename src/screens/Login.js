import React from 'react';
import {Button, View, Text} from 'react-native';

class Login extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <Button
          title="Register"
          onPress={() => this.props.navigation.navigate('Register')}
        />
        <Button
          title="Scan"
          onPress={() => this.props.navigation.navigate('Scan')}
        />
      </View>
    );
  }
}
export default Login;
