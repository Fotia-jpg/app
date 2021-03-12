import * as React from 'react';
import style from '../styles/style';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  requireNativeComponent,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default class Scan extends React.Component {
  static navigationOptions = {
    title: 'Scan',
    headerShown: false,
  };

  render() {
    return (
      <View style={style.container}>
        {/*<QRCodeScanner*/}
        {/*  onRead={this.onSuccess}*/}
        {/*  flashMode={QRCodeScanner.Constants.FlashMode.torch}*/}
        {/*  topContent={*/}
        {/*    <Text>*/}
        {/*      Go to <Text>wikipedia.org/wiki/QR_code</Text> on your computer and*/}
        {/*      scan the QR code.*/}
        {/*    </Text>*/}
        {/*  }*/}
        {/*  bottomContent={*/}
        {/*    <TouchableOpacity>*/}
        {/*      <Text>OK. Got it!</Text>*/}
        {/*    </TouchableOpacity>*/}
        {/*  }*/}
        {/*/>*/}

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
