import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CommunityPage from './pages/CommunityPage';
import QuestionsPage from './pages/QuestionsPage';
import FormPage from './pages/FormPage';
import NotificationPage from './pages/NotificationPage';
import firebase from 'firebase';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBN7XNbHX2mVPPv-_KFVhkqLJEVyPo9yUM",
    authDomain: "residentialassistant-37878.firebaseapp.com",
    databaseURL: "https://residentialassistant-37878.firebaseio.com",
    projectId: "residentialassistant-37878",
    storageBucket: "residentialassistant-37878.appspot.com",
    messagingSenderId: "525208393424",
    appId: "1:525208393424:web:1d5637c5f7dd44f2fb70d5",
    measurementId: "G-819NS38XZV"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }


const Drawer = createDrawerNavigator();

export default function App() {
  return (

    <NavigationContainer>
    
      <Drawer.Navigator initialRouteName="Community">
        <Drawer.Screen name="Community" component={CommunityPage} />
        <Drawer.Screen name="FAQ" component={QuestionsPage} />
        <Drawer.Screen name="Notifications" component={NotificationPage} />
        <Drawer.Screen name="Forms" component={FormPage} />

      </Drawer.Navigator>
      
    </NavigationContainer>

  
  );
} 