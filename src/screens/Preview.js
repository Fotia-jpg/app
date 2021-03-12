import React, {Component, useState} from 'react';
import {View, Image, Alert, Text, Switch, TouchableOpacity} from 'react-native';
// import {
//   Menu,
//   MenuProvider,
//   MenuOptions,
//   MenuOption,
//   MenuTrigger,
// } from 'react-native-popup-menu';
import Share from 'react-native-share';
import style from '../styles/previewStyles';

import files from '../assets/base64Files';

class Preview extends React.Component {
  static navigationOptions = {
    title: 'Preview',
    headerShown: false,
  };

  render() {
    const CustomShare = async () => {
      const shareOptions = {
        message: 'Ma photo géniale',
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
      <View style={style.pageContainer}>
        <View style={style.settingsContainer}>
          <View style={style.settingsContainer}>
            <TouchableOpacity>
              <Image
                style={style.settingsIcon}
                source={require('../assets/ellipsis.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={style.previewContainer}>
          <TouchableOpacity>
            <Image
              style={style.previewImg}
              source={require('../assets/placeholder.jpg')}
            />
          </TouchableOpacity>
        </View>

        <View style={style.clicksContainer}>
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
