import 'react-native-gesture-handler';

// @refresh reset
import React from 'react';
import Navigator from './screens/HomeStack'

import { NavigationContainer } from '@react-navigation/native';
console.ignoredYellowBox=[true];

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
