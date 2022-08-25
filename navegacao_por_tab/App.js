import React from 'react';
import AboutScreen from './componentes/Aboutus';
import HomeScreen from './componentes/HomePage';

import ContactScreen from './componentes/ContactFile';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs'


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen
  },
  About: {
    screen: AboutScreen
  },
  Contact: {
    screen: ContactScreen
  }
}, {
  initialRouteName: "Home"
});

const AppContainer = createAppContainer(AppNavigator);