import * as React from 'react';
import { Button, View, Image, TouchableOpacity } from 'react-native';
import styles from './components/styles'
import { Header } from 'react-native-elements';

function ResourcesPage({ navigation }) {
    return (
      <View style={styles.container}>
         <Header
        leftComponent={{ icon: 'menu', color: '#fff', onPress: () => navigation.toggleDrawer() }}
        centerComponent={{ text: 'Resources Page', style: { color: '#fff' } }}
        />
        <View style={styles.resource}>
        <TouchableOpacity onPress={() => navigation.navigate('WorkOrder')}
                            style={{width: 50, height: 50, backgroundColor: 'yellow'}} >
        <Image
          style={styles.icon}
          source={{uri: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/hammer-724-1119515.png'}}
        />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate('Laundry')}
                            style={{width: 50, height: 50, backgroundColor: 'orange'}}>
 
            <Image
            style={styles.icon}
            source={{uri:'https://cdn.iconscout.com/icon/premium/png-256-thumb/laundry-1750079-1488389.png'}} /> 
        </TouchableOpacity>

        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>
            
        </View>
    );
  }

export default ResourcesPage;