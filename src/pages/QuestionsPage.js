import * as React from 'react';
import { ScrollView, View } from 'react-native';
import styles from './components/styles'
import { Header } from 'react-native-elements';
import QuestionsIndex from './components/QuestionsIndex';


function QuestionsPage({ navigation }) {
    return (
      
      <View style={styles.container}>
         <Header
        leftComponent={{ icon: 'menu', color: '#fff', onPress: () => navigation.toggleDrawer() }}
        centerComponent={{ text: 'FAQs', style: { color: '#fff', fontSize: 25, flex: 1, fontWeight: 'bold' } }}
        rightComponent={{ icon: 'notifications', color: '#fff', onPress: () => navigation.navigate('Notifications') }}
        />
        <ScrollView>
            <QuestionsIndex/>
        </ScrollView>
      </View>
     
    );
  }

export default QuestionsPage;