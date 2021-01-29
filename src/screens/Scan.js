import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {NativeModules} from 'react-native';

class Scan extends React.Component {
  static navigationOptions = {
    title: 'Scan',
    headerShown: false,
  };
  render() {
    return (
      <View style={style.container}>
        <View style={style.scanB}>
          <Button
            title="SCAN CODE"
            onPress={() => this.props.navigation.navigate('Preview')}
          />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {flex: 1},
  scanB: {margin: 150, justifyContent: 'center', alignItems: 'center'},
});
export default Scan;
