import * as React from 'react';
import { Button, View } from 'react-native';
import styles from './components/styles';
import { Header } from 'react-native-elements';
import CommunityHeader from './PageHeader';


function CommunityPage({ navigation }) {
    return (
      <View style={styles.container}>
         <CommunityHeader navigation = {navigation} text = {'Community Wall'}/>
      </View>
    );
  }

export default CommunityPage;