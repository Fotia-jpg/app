import React from 'react';
import {Button, View, Text} from 'react-native';
import {NativeModules} from 'react-native';

class Scan extends React.Component {
  static navigationOptions = {
    title: 'Scan',
    headerShown: false,
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <Button
          title="SCAN CODE"
          onPress={() => this.props.navigation.navigate('Preview')}
        />
      </View>
    );
  }
}
export default Scan;
