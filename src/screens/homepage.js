import React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';

class homepage extends React.Component {
  static navigationOptions = {
    title: 'Scan',
    headerShown: false,
  };

  componentDidMount() {
    // Start counting when the page is loaded
    this.timeoutHandle = setTimeout(() => {
      this.props.navigation.replace('Login');
    }, 2800);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutHandle);
    // This is just necessary in the case that the screen is closed before
    // the timeout fires, otherwise it would cause a memory leak that would
    // trigger the transition regardless, breaking the user experience.
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <LottieView source={require('../assets/homepage_anim.json')} autoPlay />
      </View>
    );
  }
}
export default homepage;
