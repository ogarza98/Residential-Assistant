import * as React from 'react';
import { Button, View, Image, TouchableOpacity, Text } from 'react-native';
import styles from './components/styles'
import { Header } from 'react-native-elements';
import ResourcesHeader from './PageHeader';
import workOrderIcon from './components/workOrder.png';
import laundryIcon from './components/laundry.png';
import vraIcon from './components/vraIcon.png';



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
              source={workOrderIcon}
            />

            <Text style={styles.loginTitle}>Work Orders</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.resource}>
          
          <TouchableOpacity onPress={() => navigation.navigate('Laundry')}
                              style={{width: 150, height: 150}}>
  
              <Image
              style={styles.icon}
              source={laundryIcon} /> 

              <Text style={styles.loginTitle}>Laundry Status</Text>

          </TouchableOpacity>

        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() =>  navigation.navigate('Chat Bot')}
          style={styles.TouchableOpacityStyle}>
          <Image
            //We are making FAB using TouchableOpacity with an image
            //We are using online image here
            source={vraIcon}
            //You can use you project image Example below
            //source={require('./images/float-add-icon.png')}
            style={styles.FloatingButtonStyle}
          />
        </TouchableOpacity>
                  
      </View>

    </View>
        
    );
  }

export default ResourcesPage;