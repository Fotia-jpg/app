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
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Button
          title="go to Register"
          onPress={() => this.props.navigation.navigate('Register')}
        />
      </View>
    );
  }
}
export default Login;
