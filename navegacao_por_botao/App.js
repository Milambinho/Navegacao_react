import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from 'react-navigation'

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/Aboutscreen';


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  About: {
    screen: AboutScreen
  }
});

const AppContainer = createAppContainer(AppNavigator);
