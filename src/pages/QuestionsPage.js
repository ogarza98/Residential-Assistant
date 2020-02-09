import * as React from 'react';
import { Button, View } from 'react-native';
import styles from './Styles'

function QuestionsPage({ navigation }) {
    return (
      <View style={styles.center}>
        <Button onPress={() => navigation.goBack()} title="Go Back (Current: Questions Page)" />
        <Button onPress={() => navigation.toggleDrawer()} title="Toggle" />
      </View>
    );
  }

export default QuestionsPage;