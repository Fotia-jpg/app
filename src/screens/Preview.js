import React from 'react';
import {View, Image, Alert, TouchableOpacity} from 'react-native';
import Share from 'react-native-share';
import style from '../styles/style';

class Preview extends React.Component {
  static navigationOptions = {
    title: 'Preview',
    headerShown: false,
  };
  render() {
    // const onShare = async () => {
    //   try {
    //     const result = await Share.share({
    //       message: 'PHOTOBOOTH QT',
    //     });
    //     if (result.action === Share.sharedAction) {
    //       if (result.activityType) {
    //         // shared with activity type of result.activityType
    //       } else {
    //         // shared
    //       }
    //     } else if (result.action === Share.dismissedAction) {
    //       // dismissed
    //     }
    //   } catch (error) {
    //     alert(error.message);
    //   }
    // };

    const shareOptions = {
      massage: 'test',
      title: 'test1',
      url: 'file://../assets/placeholder.jpg',
      excludedActivityTypes: '',
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
            <TouchableOpacity
              onPress={Share.open(shareOptions)
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => {
                  err && console.log(err);
                })}>
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
