import * as React from 'react';
import { Button, View } from 'react-native';
import styles from './components/styles'
import NotificationsHeader from './PageHeader';
function NotificationPage({navigation}) {
    return (
      <View style={styles.container}>
         <NotificationsHeader navigation = {navigation} text = {'Notifications'}/>
      </View>
    );
  }

export default NotificationPage;