import React from 'react';
import {Button, View} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from '../styles/style';
import AwesomeAlert from 'react-native-awesome-alerts';

class Register extends React.Component {
  static navigationOptions = {
    title: 'Register',
    headerShown: false,
  };
  constructor(props) {
    super(props);
    this.state = {showAlert: false};
  }

  showAlert = () => {
    this.setState({
      showAlert: true,
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false,
    });
  };
  render() {
    const {showAlert} = this.state;
    return (
      <View style={style.container}>
        <View style={style.inputContainer}>
          <View style={style.input}>
            <Input
              placeholder="email"
              onChangeText={(text) => this.setState({email: text})}
              leftIcon={<Icon name="user" size={20} color="black" />}
            />
          </View>

          <View style={style.input}>
            <Input
              placeholder="password"
              onChangeText={(text) => this.setState({pass: text})}
              leftIcon={<Icon name="lock" size={20} color="black" />}
            />
          </View>

          <View style={style.input}>
            <Input
              placeholder="confirm password"
              onChangeText={(text) => this.setState({ConfPass: text})}
              leftIcon={<Icon name="lock" size={20} color="black" />}
            />
          </View>

          <View style={style.buttonContainer}>
            <View style={style.button}>
              <Button
                //onPress={() => checkPass()}
                onPress={() => this.props.navigation.navigate('Scan')}
                title="        Login        "
                type="solid"
                raised
              />
            </View>

            <View>
              <AwesomeAlert
                show={showAlert}
                showProgress={false}
                title="Error"
                message="passwords not matching"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={true}
                showCancelButton={true}
                cancelText="OK"
                cancelButtonColor="#DD6B55"
                onCancelPressed={() => {
                  this.hideAlert();
                }}
                onConfirmPressed={() => {
                  this.hideAlert();
                }}
              />
            </View>
          </View>
        </View>
      </View>
    );

    // function checkPass() {
    //   if (this.pass !== this.ConfPass) {
    //     this.showAlert();
    //   } else {
    //     this.props.navigation.navigate('Scan');
    //   }
    // }
  }
}
export default Register;
