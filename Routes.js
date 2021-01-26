import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Scan from './src/screens/Scan';
import Preview from './src/screens/Preview';

const Project = createStackNavigator({
  Login: {
    screen: Login,
  },
  Register: {
    screen: Register,
  },
  Scan: {
    screen: Scan,
  },
  Preview: {
    screen: Preview,
  },
});
export default createAppContainer(Project);
