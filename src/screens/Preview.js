import React from 'react';
import {View, Image, Alert, TouchableOpacity} from 'react-native';
import Share from 'react-native-share';
import style from '../styles/style';

import files from '../assets/base64Files';

class Preview extends React.Component {
  static navigationOptions = {
    title: 'Preview',
    headerShown: false,
  };
  render() {
    const CustomShare = async () => {
      const shareOptions = {
        message: 'placeholder message',
        url: files.image,
      };

      try {
        const ShareResponse = await Share.open(shareOptions);
        //log la plateforme de partage utilisée par l'utilisateur
        console.log(JSON.stringify(ShareResponse));
      } catch (error) {
        console.log('Error');
      }
    };

    return (
      <View>
        <View style={style.clickContainer}>
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

          <View style={style.previewContainer}>
            <TouchableOpacity>
              <Image
                style={style.previewImg}
                source={require('../assets/placeholder.jpg')}
              />
            </TouchableOpacity>
          </View>

          <View style={style.shareContainer}>
            <TouchableOpacity onPress={CustomShare}>
              <Image
                style={style.shareIcon}
                source={require('../assets/share.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export default Preview;
