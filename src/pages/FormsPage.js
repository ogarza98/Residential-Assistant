import * as React from 'react';
import { Button, View, Image, TouchableOpacity, Text } from 'react-native';
import styles from './components/styles'
import { Header } from 'react-native-elements';
import FormsHeader from './PageHeader';

function FormsPage({ navigation }) {
    return (
      <View style={styles.container}>
         <FormsHeader navigation = {navigation} text = {'Check In/Out'}/>

        <View style={styles.center}>
          <View style={styles.resource}>
            
            <TouchableOpacity onPress={() => navigation.navigate('CheckIn')}
                                style={{width: 150, height: 150}} >
              <Image
                style={styles.icon}
                source={{uri: 'https://firebasestorage.googleapis.com/v0/b/residentialassistant-37878.appspot.com/o/uploads%2FcheckIn-2.png?alt=media&token=582e90dd-d8fb-4573-a1ec-2510ca174161'}}
              />

              <Text style={styles.loginTitle}>Check In Form</Text>
            </TouchableOpacity>

          </View>

          <View style={styles.resource}>
            
            <TouchableOpacity onPress={() => navigation.navigate('CheckOut')}
                                style={{width: 150, height: 150}}>
    
                <Image
                style={styles.icon}
                source={{uri:'https://firebasestorage.googleapis.com/v0/b/residentialassistant-37878.appspot.com/o/uploads%2FcheckOut-2.png?alt=media&token=e91db007-915a-4100-9479-9b6cac4121c7'}} /> 

                <Text style={styles.loginTitle}>Check Out Form</Text>

            </TouchableOpacity>

          </View>
                    
        </View>

      </View>
    );
  }

export default FormsPage;