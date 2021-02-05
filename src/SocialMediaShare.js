'use strict';

var React = require('react-native');
var {AppRegistry, StyleSheet, Text, View, TouchableHighlight} = React;

import {shareOnFacebook, shareOnTwitter} from 'react-native-social-share';

var ReactNativeSocialShare = React.createClass({
  tweet: function () {
    shareOnTwitter(
      {
        text: 'Global democratized marketplace for art',
        link: 'https://artboost.com/',
        imagelink: 'https://artboost.com/apple-touch-icon-144x144.png',
        //or use image
        image: 'artboost-icon',
      },
      (results) => {
        console.log(results);
      },
    );
  },

  facebookShare: function () {
    shareOnFacebook(
      {
        text: 'Global democratized marketplace for art',
        link: 'https://artboost.com/',
        imagelink: 'https://artboost.com/apple-touch-icon-144x144.png',
        //or use image
        image: 'artboost-icon',
      },
      (results) => {
        console.log(results);
      },
    );
  },

  render: function () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Twitter and Facebook share</Text>

        <Text style={styles.instructions}>Try tapping one of the buttons</Text>

        <View style={styles.seperator} />

        <TouchableHighlight onPress={this.tweet}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 150,
              height: 50,
              backgroundColor: '#00aced',
            }}>
            <Text style={{color: '#ffffff', fontWeight: '800'}}>
              Share on Twitter
            </Text>
          </View>
        </TouchableHighlight>

        <View style={styles.seperator} />

        <TouchableHighlight onPress={this.facebookShare}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 150,
              height: 50,
              backgroundColor: '#3b5998',
            }}>
            <Text style={{color: '#ffffff', fontWeight: '800'}}>
              Share on Facebook
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  seperator: {
    marginBottom: 20,
  },
});

AppRegistry.registerComponent(
  'ReactNativeSocialShare',
  () => ReactNativeSocialShare,
);
