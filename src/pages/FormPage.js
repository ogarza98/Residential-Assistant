import * as React from 'react';
import { Button, View } from 'react-native';
import styles from './components/styles'
import { Header } from 'react-native-elements';

function FormPage({ navigation }) {
    return (
      <View style={styles.container}>
         <Header
        leftComponent={{ icon: 'menu', color: '#fff', onPress: () => navigation.toggleDrawer() }}
        centerComponent={{ text: 'Forms Page', style: { color: '#fff' } }}
        rightComponent={{ icon: 'notifications', color: '#fff', onPress: () => navigation.navigate('Notifications') }}
        />
        <View style={styles.center}>
          <Button onPress={() => navigation.goBack()} title="Go Back (Current: Form Page)" />
          <Button onPress={() => navigation.toggleDrawer()} title="Toggle" />
        </View>
      </View>
    );
  }

export default FormPage;