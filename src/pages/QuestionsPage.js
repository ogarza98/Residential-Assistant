import * as React from 'react';
import { Button, View } from 'react-native';

function QuestionsPage({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go Back (Current: Questions Page)" />
        <Button onPress={() => navigation.toggleDrawer()} title="Toggle" />
      </View>
    );
  }

export default QuestionsPage;