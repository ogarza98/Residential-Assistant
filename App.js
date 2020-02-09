import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CommunityPage from './Pages/CommunityPage';
import QuestionsPage from './Pages/QuestionsPage';
import FormPage from './Pages/FormPage';
import NotificationPage from './Pages/NotificationPage';

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