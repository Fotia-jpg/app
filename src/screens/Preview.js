import React from 'react';
import {View, Share, Image, Alert, TouchableOpacity} from 'react-native';
//import SocialMediaShare from '../SocialMediaShare';
import style from '../styles/style';

class Preview extends React.Component {
  static navigationOptions = {
    title: 'Preview',
    headerShown: false,
  };
  render() {
    const onShare = async () => {
      try {
        const result = await Share.share({
          message: 'PHOTOBOOTH QT',
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        alert(error.message);
      }
    };
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
          <TouchableOpacity onPress={onShare}>
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
