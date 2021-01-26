import React from 'react';
import {Button, View, Text} from 'react-native';
import {NativeModules} from 'react-native';

class Preview extends React.Component {
  static navigationOptions = {
    title: 'Scan',
  };
  render() {
    return (
      <View>
        <Text>PREVIEW</Text>
      </View>
    );
  }
}
export default Preview;
