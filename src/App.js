import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CommunityPage from './pages/CommunityPage';
import QuestionsPage from './pages/QuestionsPage';
import FormPage from './pages/FormPage';
import NotificationPage from './pages/NotificationPage';
import ProfilePage from './pages/ProfilePage';
import LoadingPage from './pages/LoadingPage';
import LoginPage from './pages/LoginPage';
import * as firebase from "firebase";


var config = {
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
  firebase.initializeApp(config);
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Home() {
  return (
    
    <Drawer.Navigator>
      <Drawer.Screen name="Community" component={CommunityPage} />
      <Drawer.Screen name="FAQ" component={QuestionsPage} />
      <Drawer.Screen name="Notifications" component={NotificationPage} />
      <Drawer.Screen name="Forms" component={FormPage} />
      <Drawer.Screen name="Profile" component={ProfilePage} />

    </Drawer.Navigator>
    
  );
}

export default function App() {
  return (

    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Loading" component={LoadingPage} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={LoginPage} />
    </Stack.Navigator>
    </NavigationContainer>

  
  );
} 