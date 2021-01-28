import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';

import {Button, Card} from 'react-native-material-design';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };
  static navigationOptions = {
    title: 'Login',
    headerShown: false,
  };
  render() {
    return (
      <View>
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

        <Button variant={'contained'} color={'secondary'}>
          TEST
        </Button>

        <TouchableOpacity>
          <Button
            variant="contained"
            color="secondary"
            onPress={() => this.props.navigation.navigate('Scan')}
            title="Login"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Button
            onPress={() => this.props.navigation.navigate('Register')}
            title="Register"
          />
        </TouchableOpacity>
      </View>
    );
  }
}
export default Login;
