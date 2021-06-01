import * as React from 'react';
import {View, Dimensions, Button, Text, Linking} from 'react-native';
import style from '../styles/scannerStyles';
import * as Animatable from 'react-native-animatable';
import QRCodeScanner from 'react-native-qrcode-scanner';

const SCREEN_WIDTH = Dimensions.get('window').width;
const ImgURL = 'http://172.16.24.229:8080/api/Users/fetchImage?page=1';

export default class Scan extends React.Component {
  static navigationOptions = {
    title: 'Scan',
    headerShown: false,
  };

  makeSlideOutTranslation(translationType, fromValue) {
    return {
      from: {
        [translationType]: SCREEN_WIDTH * -0.18,
      },
      to: {
        [translationType]: fromValue,
      },
    };
  }

  onSuccess = (e) => {
    this.props.navigation.navigate('Preview');
    alert(e.data);
    // Linking.openURL(e.data).catch(
    //   (err) => console.error('An error occured', err),
    //   this.props.navigation.navigate('Preview'),
    // );
  };

  render() {
    return (
      <View style={style.pageContainer}>
        <View style={style.button}>
          <Button
            title="SCAN CODE"
            onPress={() => this.props.navigation.navigate('Preview')}
          />

          <View style={style.scannerContainer}>
            <QRCodeScanner
              cameraStyle={{height: '100%', width: '100%'}}
              showMarker={true}
              onRead={this.onSuccess.bind(this)}
              customMarker={
                <View style={style.rectangleContainer}>
                  <View style={style.topOverlay}>
                    <Text style={{fontSize: 30, color: 'white'}}>
                      QR SCANNER
                    </Text>
                  </View>

                  <View style={{flexDirection: 'row'}}>
                    <View style={style.leftAndRightOverlay} />

                    <View style={style.rectangle}>
                      {/*<View style={style.scanIcon}>*/}
                      {/*  <Icon*/}
                      {/*    name="scan"*/}
                      {/*    size={SCREEN_WIDTH * 0.73}*/}
                      {/*    color={iconScanColor}*/}
                      {/*  />*/}
                      {/*</View>*/}

                      <View style={style.scanBarContainer}>
                        <Animatable.View
                          style={style.scanBar}
                          direction="alternate-reverse"
                          iterationCount="infinite"
                          duration={1800}
                          easing="linear"
                          animation={this.makeSlideOutTranslation(
                            'translateY',
                            SCREEN_WIDTH * 0.2,
                          )}
                        />
                      </View>
                    </View>

                    <View style={style.leftAndRightOverlay} />
                  </View>

                  <View style={style.bottomOverlay} />
                </View>
              }
            />
          </View>
        </View>
      </View>
    );
  }
}
