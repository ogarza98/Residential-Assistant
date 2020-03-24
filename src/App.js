import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CommunityPage from './pages/CommunityPage';
import QuestionsPage from './pages/QuestionsPage';
import FormPage from './pages/FormPage';
import NotificationPage from './pages/NotificationPage';
import CheckInForm from './pages/CheckInForm';
import CheckOutForm from './pages/CheckOutForm';

//import AppContainer from './FormsNavigation';

const Drawer = createDrawerNavigator();

export default function App() {
  return (

    <NavigationContainer>
    
      <Drawer.Navigator initialRouteName="Community">
        <Drawer.Screen name="Community" component={CommunityPage} />
        <Drawer.Screen name="FAQ" component={QuestionsPage} />
        <Drawer.Screen name="Notifications" component={NotificationPage} />
        {/* <Drawer.Screen name="Forms" component={FormPage} /> */}
        <Drawer.Screen name="Check-In Form" component={CheckInForm} />
        <Drawer.Screen name="Check-Out Form" component={CheckOutForm} />


      </Drawer.Navigator>
      
    </NavigationContainer>
  
  
  );
} 