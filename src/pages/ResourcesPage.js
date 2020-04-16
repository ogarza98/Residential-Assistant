import * as React from 'react';
import { Button, View, Image, TouchableOpacity, Text } from 'react-native';
import styles from './components/styles'
import { Header } from 'react-native-elements';
import ResourcesHeader from './PageHeader';


function ResourcesPage({ navigation }) {
    return (
      <View style={styles.container}>
        <ResourcesHeader navigation = {navigation} text = {'Resources'}/>
        
      <View style={styles.center}>
        <View style={styles.resource}>
          
          <TouchableOpacity onPress={() => navigation.navigate('WorkOrder')}
                              style={{width: 150, height: 150}} >
            <Image
              style={styles.icon}
              source={{uri: 'https://firebasestorage.googleapis.com/v0/b/residentialassistant-37878.appspot.com/o/uploads%2FworkOrder.png?alt=media&token=c2a8ae54-4035-44d9-861d-f6d43e51f06a'}}
            />

            <Text style={styles.loginTitle}>Work Orders</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.resource}>
          
          <TouchableOpacity onPress={() => navigation.navigate('Laundry')}
                              style={{width: 150, height: 150}}>
  
              <Image
              style={styles.icon}
              source={{uri:'https://firebasestorage.googleapis.com/v0/b/residentialassistant-37878.appspot.com/o/uploads%2FworkOrder-2.png?alt=media&token=78fcdd71-a48e-4538-89cd-0f8dc2e6eca0'}} /> 

              <Text style={styles.loginTitle}>Laundry Status</Text>

          </TouchableOpacity>

        </View>
                  
      </View>

    </View>
        
    );
  }

export default ResourcesPage;