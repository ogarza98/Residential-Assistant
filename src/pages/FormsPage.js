import * as React from 'react';
import { Button, View, Image, TouchableOpacity } from 'react-native';
import styles from './components/styles'
import { Header } from 'react-native-elements';

function FormsPage({ navigation }) {
    return (
      <View style={styles.container}>
         <Header
        leftComponent={{ icon: 'menu', color: '#fff', onPress: () => navigation.toggleDrawer() }}
        centerComponent={{ text: 'Resources Page', style: { color: '#fff' } }}
        />
        <View style={styles.resource}>
        <TouchableOpacity onPress={() => navigation.navigate('CheckIn')}
                            style={{width: 50, height: 50, backgroundColor: 'yellow'}} >
        <Image
          style={styles.icon}
          source={{uri: 'https://simpleicon.com/wp-content/uploads/incoming-mail-1.png'}}
        />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate('CheckOut')}
                            style={{width: 50, height: 50, backgroundColor: 'orange'}}>
 
            <Image
            style={styles.icon}
            source={{uri:'https://static.thenounproject.com/png/367819-200.png'}} /> 
        </TouchableOpacity>

        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>
            
        </View>
    );
  }

export default FormsPage;