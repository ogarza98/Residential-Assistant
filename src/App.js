import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import QuestionsPage from './pages/QuestionsPage';
import FormPage from './pages/FormPage';
import NotificationPage from './pages/NotificationPage';
import ProfilePage from './pages/ProfilePage';
import LoadingPage from './pages/LoadingPage';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import PostPage from './pages/PostPage';
import GuestProfilePage from './pages/GuestProfilePage';
import AddPostPage from './pages/AddPostPage';
import LaundryPage from './pages/LaundryPage';
import WorkOrdersPage from './pages/WorkOrdersPage';
import ResourcesPage from './pages/ResourcesPage';



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
const Stack_1 = createStackNavigator();

function Resources() {
  return (

    <Stack_1.Navigator headerMode="none">
      <Stack_1.Screen name="Resources" component={ResourcesPage} />
      <Stack_1.Screen name="WorkOrder" component={WorkOrdersPage} />
      <Stack_1.Screen name="Laundry" component={LaundryPage} />
    </Stack_1.Navigator>

  )
}

function CommunityWall() {
  return (
    <Stack_1.Navigator headerMode="none">
      <Stack_1.Screen name="Post" component={PostPage} />
      <Stack_1.Screen name="AddPost" component={AddPostPage} />
      <Stack_1.Screen name="GuestProfile" component={GuestProfilePage} />
    </Stack_1.Navigator>

  );
}

function Home() {
  return (
    
    <Drawer.Navigator>
      <Drawer.Screen name="Community Wall" component={CommunityWall}/>
      <Drawer.Screen name="Resources" component={Resources}/>
      <Drawer.Screen name="FAQ" component={QuestionsPage} />
      <Drawer.Screen name="Notifications" component={NotificationPage} />
      <Drawer.Screen name="Forms" component={FormPage} />
      <Drawer.Screen name="Profile" component={ProfilePage} />
      <Drawer.Screen name="Logout" component={LogoutPage} />
    </Drawer.Navigator>
    
  );
}

export default function App() {
  return (

    <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Loading" component={LoadingPage} />
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Login" component={LoginPage} />
    </Stack.Navigator>
    </NavigationContainer>

  
  );
}
