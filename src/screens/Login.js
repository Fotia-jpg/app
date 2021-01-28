import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
          <Input
            placeholder="email"
            leftIcon={<Icon name="user" size={20} color="black" />}
          />
        </View>

        <View>
          <Input
            placeholder="password"
            leftIcon={<Icon name="lock" size={20} color="black" />}
            styles={styles.input}
          />
        </View>

        <TouchableOpacity styles={styles.button}>
          <Button
            onPress={() => this.props.navigation.navigate('Scan')}
            title="Login"
            type="solid"
            raised
          />
        </TouchableOpacity>
        <TouchableOpacity styles={styles.button}>
          <Button
            onPress={() => this.props.navigation.navigate('Register')}
            title="Register"
            type="solid"
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
  },
});
export default Login;
