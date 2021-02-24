import {StyleSheet} from 'react-native';
import React from 'react';

export default StyleSheet.create({
  container: {},

  mainLogoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 70,
  },

  inputContainer: {},

  buttonContainer: {},

  clickContainer: {
    width: 400,
    height: 700,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  dwlContainer: {width: 100, height: 100},

  shareContainer: {width: 100, height: 100},

  previewContainer: {
    zIndex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  mainLogo: {
    height: 150,
    width: 150,
    marginTop: 5,
  },

  input: {margin: 10},

  button: {
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  dwlIcon: {
    height: 50,
    width: 50,
    margin: 25,
  },

  shareIcon: {
    height: 50,
    width: 50,
    margin: 25,
  },

  previewImg: {
    height: 350,
    width: 350,
  },
});
