import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Homescreen from './screens/Homescreen';
import Aboutscreen from './screens/Aboutscreen';
import Contactscreen from './screens/ContactScreen'
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const NavDrawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NavDrawer.Navigator useLegacyImplementation initialRouteName = 'Homescreen'>
        <NavDrawer.Screen name='Home' component={Homescreen}/>
        <NavDrawer.Screen name='About' component={Aboutscreen}/>
        <NavDrawer.Screen name='Contact' component={Contactscreen}/>
      </NavDrawer.Navigator>
    </NavigationContainer>
  );
}
