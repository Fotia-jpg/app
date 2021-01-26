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
        }}>
        <Button
          title="Scan"
          onPress={() => this.props.navigation.navigate('Scan')}
        />
      </View>
    );
  }
}
export default Register;
