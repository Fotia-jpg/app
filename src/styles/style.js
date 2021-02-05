import {StyleSheet} from 'react-native';
import React from 'react';

export default StyleSheet.create({
  container: {flex: 1},

  mainLogoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 70,
  },

  inputContainer: {},

  buttonContainer: {},

  dwlContainer: {
    zIndex: 1,
    paddingLeft: 290,
  },

  shareContainer: {
    zIndex: 1,
    paddingLeft: 290,
    paddingTop: 500,
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
});
