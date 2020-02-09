import * as React from 'react';
import { Button, View } from 'react-native';

function CommunityPage({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.navigate('Notifications')} title="Go (Current: Community)" />
        <Button onPress={() => navigation.toggleDrawer()} title="Toggle" />
      </View>
    );
  }

export default CommunityPage;