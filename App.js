import 'react-native-gesture-handler';

// @refresh reset
import { LogBox } from 'react-native';
import React from 'react';
import Navigator from './screens/HomeStack'

import { NavigationContainer } from '@react-navigation/native';
LogBox.ignoreAllLogs();

export default function App() {
  return (
    <NavigationContainer >
      <Navigator />
    </NavigationContainer>
  );
}
