import React from 'react';
import {View, Image, Alert, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
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
// import ImgURL from 'Scan.js';

// const fetch = require('fetch-base64');
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

class Preview extends React.Component {
  static navigationOptions = {
    title: 'Preview',
    headerShown: false,
  };

  state = {
    ImageID: '',
    ImageData: '',
  };

  FetchImage() {
    return fetch('http://172.16.24.229:8080/api/Users/fetchImage?page=1')
      .then((response) => response.json())
      .then((json) => {
        console.log('FETCH OK');
        this.setState({
          ImageData: json.file,
        });
        return json.file;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.FetchImage();
  }

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
              <Icon
                style={style.settingsIcon}
                name="ellipsis-vertical"
                size={SCREEN_WIDTH * 0.1}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={style.previewContainer}>
          <TouchableOpacity>
            <Image
              style={style.previewImg}
              source={{uri: `data:image/jpg;base64,${this.state.ImageData}`}}
              //source={require('../assets/landscape2.jpg')}
            />
          </TouchableOpacity>
        </View>

        <View style={style.clicksContainer}>
          <View style={style.dwlContainer}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert('', 'Download done !');
              }}>
              <Icon
                style={style.dwlIcon}
                name="ios-download-outline"
                size={SCREEN_WIDTH * 0.15}
              />
            </TouchableOpacity>
          </View>

          <View style={style.shareContainer}>
            <TouchableOpacity onPress={CustomShare}>
              <Icon
                style={style.shareIcon}
                name="ios-share-social-sharp"
                size={SCREEN_WIDTH * 0.15}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export default Preview;
