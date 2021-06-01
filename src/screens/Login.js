import React from 'react';
import {View, Image, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';
import style from '../styles/style';

const URLst = 'http://172.16.24.229:8080/api/Users/findPass?email=';

const URLTEST =
  'http://172.16.24.229:8080/api/Users/findPass?email=Catrina.Hieronymus@mail.com';

export default class Login extends React.Component {
  state = {
    UserEmail: '',
    UserPassword: '',
    APIEmail: '',
    APIPassword: '',
  };
  static navigationOptions = {
    title: 'Login',
    headerShown: false,
  };

  RequestPASS() {
    const URLend = this.state.UserEmail;
    const URL = URLst + URLend;
    fetch(URL, {
      method: 'GET',
      //Request Type
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        //Success
        //alert(JSON.stringify(responseJson));
        // console.log('responseJSON: ' + responseJson[0].email);
        // console.log('responseJSON: ' + responseJson[0].password);

        this.setState({
          APIEmail: responseJson[0].email,
          APIPassword: responseJson[0].password,
        });
        console.log('############ APIresponse ############');
        console.log('APIEmail: ' + this.state.APIEmail);
        console.log('APIPass: ' + this.state.APIPassword);
        this.CheckPass();
      })
      //If response is not in json then in error
      .catch((error) => {
        //Error
        alert('Wrong email !');
        //alert(JSON.stringify(error));
        console.error(error);
      });
  }

  CheckPass() {
    console.log('############ Checkpass ############');
    console.log('UserEmail: ' + this.state.UserEmail);
    console.log('UserPass: ' + this.state.UserPassword);

    if (this.state.UserPassword === this.state.APIPassword) {
      console.log('=');
      console.log('ok');
      this.textInput.clear();
      this.state.UserPassword = '';
      this.props.navigation.navigate('Scan');
    } else {
      console.log('=');
      console.log('wrong pass');
      // eslint-disable-next-line no-alert
      alert('Wrong password !');
    }
  }
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
              onChangeText={(text) => this.setState({UserEmail: text})}
              placeholder="email"
              leftIcon={<Icon name="user" size={20} color="black" />}
            />
          </View>

          <View style={style.input}>
            <Input
              ref={(PasswordInput) => {
                this.textInput = PasswordInput;
              }}
              onChangeText={(text) => this.setState({UserPassword: text})}
              placeholder="password"
              secureTextEntry={true}
              leftIcon={<Icon name="lock" size={20} color="black" />}
            />
          </View>
        </View>

        <View style={style.buttonContainer}>
          <View style={style.button}>
            <Button
              onPress={() => this.RequestPASS()}
              //onPress={() => this.props.navigation.navigate('Scan')}
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
