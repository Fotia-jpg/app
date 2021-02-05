import React from 'react';
import {Button, View} from 'react-native';
import style from '../styles/style';

class Scan extends React.Component {
  static navigationOptions = {
    title: 'Scan',
    headerShown: false,
  };
  render() {
    return (
      <View style={style.container}>
        <View style={style.button}>
          <Button
            title="SCAN CODE"
            onPress={() => this.props.navigation.navigate('Preview')}
          />
        </View>
      </View>
    );
  }
}
export default Scan;
