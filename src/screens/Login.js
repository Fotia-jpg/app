import React from 'react';
import {View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';
import style from '../styles/style';

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
        <View style={style.mainLogoContainer}>
          <Image
            style={style.mainLogo}
            source={require('../assets/camera.png')}
          />
        </View>
        <View style={style.inputContainer}>
          <View style={style.input}>
            <Input
              onChangeText={(text) => this.setState({email: text})}
              placeholder="email"
              leftIcon={<Icon name="user" size={20} color="black" />}
            />
          </View>

          <View style={style.input}>
            <Input
              onChangeText={(text) => this.setState({pass: text})}
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
export default Login;
