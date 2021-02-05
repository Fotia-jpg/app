import React from 'react';
import {Button, View, Text, Image, Alert, TouchableOpacity} from 'react-native';
//import {TouchableOpacity} from 'react-native-gesture-handler';

import style from '../styles/style';

class Preview extends React.Component {
  static navigationOptions = {
    title: 'Preview',
    headerShown: false,
  };
  render() {
    return (
      <View>
        <View style={style.dwlContainer}>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('', 'Download done !');
            }}>
            <Image
              style={style.dwlIcon}
              source={require('../assets/direct-download.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={style.shareContainer}>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('click', 'click');
            }}>
            <Image
              style={style.shareIcon}
              source={require('../assets/share.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Preview;
