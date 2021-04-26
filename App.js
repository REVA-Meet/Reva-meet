import 'react-native-gesture-handler';

import * as firebase from 'firebase';
import React from 'react';
import Navigator from './screens/HomeStack'
import { NavigationContainer } from '@react-navigation/native';


const firebaseConfig = {
  apiKey: "AIzaSyCsH1JZ5ulNlVP_j07hXe240xQROVyew3U",
  authDomain: "reva-meet.firebaseapp.com",
  projectId: "reva-meet",
  storageBucket: "reva-meet.appspot.com",
  messagingSenderId: "534691755685",
  appId: "1:534691755685:web:1d8d8f0865f326c71c3f4c",
  measurementId: "G-VV88E5HHZ8"
};

  firebase.initializeApp(firebaseConfig)

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
