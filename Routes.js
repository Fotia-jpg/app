import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './src/screens/Login';
import Register from './src/screens/Register';

const Project = createStackNavigator({
  Login: {
    screen: Login,
  },
  Register: {
    screen: Register,
  },
});
export default createAppContainer(Project);
