import * as React from 'react';
import { Button, View } from 'react-native';
import styles from './components/styles'
import FormsHeader from './PageHeader';

function FormPage({ navigation }) {
    return (
      <View style={styles.container}>
         <FormsHeader navigation = {navigation} text = {'Forms'}/>
      </View>
    );
  }

export default FormPage;