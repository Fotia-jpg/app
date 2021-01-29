import React from 'react';
import {Button, View, Text, TextInput, Image, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class Register extends React.Component {
  static navigationOptions = {
    title: 'Register',
    headerShown: false,
  };
  render() {
    return (
      <View style={style.container}>
        <View style={style.inputContainer}>
          <View style={style.input}>
            <Input
              placeholder="email"
              leftIcon={<Icon name="user" size={20} color="black" />}
            />
          </View>

          <View style={style.input}>
            <Input
              placeholder="password"
              leftIcon={<Icon name="lock" size={20} color="black" />}
            />
          </View>

          <View style={style.input}>
            <Input
              placeholder="confirm password"
              leftIcon={<Icon name="lock" size={20} color="black" />}
            />
          </View>
        </View>
        <View style={style.buttonContainer}>
          <View style={style.button}>
            <Button
              onPress={() => this.props.navigation.navigate('Scan')}
              title="        Login        "
              type="solid"
              raised
            />
          </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {flex: 1},

  inputContainer: {marginTop: 35},

  buttonContainer: {},

  mainLogo: {
    height: 150,
    width: 150,
    marginTop: 5,
  },

  input: {margin: 10},

  button: {
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Register;
