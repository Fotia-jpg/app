import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {red} from '@material-ui/core/colors';
import TouchableRipple from 'react-native-paper/src/components/TouchableRipple/TouchableRipple.native';

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
      <View style={style.container}>
        <View style={style.imageContainer}>
          <Image
            style={style.mainLogo}
            source={require('../assets/camera.png')}
          />
        </View>
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

          <View style={style.button}>
            <Button
              onPress={() => this.props.navigation.navigate('Register')}
              title="Sign up"
              type="clear"
            />
          </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {flex: 1},

  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 70,
  },

  inputContainer: {},

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
export default Login;
