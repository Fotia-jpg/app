import React from 'react';
import {Button, View, Text, TextInput} from 'react-native';

class Register extends React.Component {
  static navigationOptions = {
    title: 'Register',
    headerShown: false,
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <View>
          <TextInput
            placeholder="Email..."
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({email: text})}
          />
        </View>

        <View>
          <TextInput
            secureTextEntry
            placeholder="Password..."
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({password: text})}
          />
        </View>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Scan')}
        />
      </View>
    );
  }
}
export default Register;
