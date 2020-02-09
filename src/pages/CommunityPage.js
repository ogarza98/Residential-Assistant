import * as React from 'react';
import { Button, View } from 'react-native';
import styles from './Styles'

function CommunityPage({ navigation }) {
    return (
      <View style={styles.center}>
        <Button onPress={() => navigation.navigate('Notifications')} title="Go (Current: Community)" />
        <Button onPress={() => navigation.toggleDrawer()} title="Toggle" />
      </View>
    );
  }

export default CommunityPage;