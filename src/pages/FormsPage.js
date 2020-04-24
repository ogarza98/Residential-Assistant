import * as React from 'react';
import { Button, View, Image, TouchableOpacity, Text} from 'react-native';
import styles from './components/styles'
import { Header } from 'react-native-elements';
import FormsHeader from './PageHeader';
import checkInIcon from './components/checkIn-2.png';
import checkOutIcon from './components/checkOut-2.png';
import vraIcon from './components/vraIcon.png';


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
                source={checkInIcon}
              />

              <Text style={styles.loginTitle}>Check In Form</Text>
            </TouchableOpacity>

          </View>

          <View style={styles.resource}>
            
            <TouchableOpacity onPress={() => navigation.navigate('CheckOut')}
                                style={{width: 150, height: 150}}>
    
                <Image
                style={styles.icon}
                source={checkOutIcon} /> 

                <Text style={styles.loginTitle}>Check Out Form</Text>

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

export default FormsPage;