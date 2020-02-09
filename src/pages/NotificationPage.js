import * as React from 'react';
import { Button, View } from 'react-native';
import styles from './Styles'

function FormPage({ navigation }) {
    return (
      <View style={styles.center}>
        <Button onPress={() => navigation.goBack()} title="Go Back (Current: Notifications Page)" />
        <Button onPress={() => navigation.toggleDrawer()} title="Toggle" />
      </View>
    );
  }

export default FormPage;