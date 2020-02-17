import * as React from 'react';
import { Button, View, Text, Image } from 'react-native';
import styles from './components/styles'
import { Header } from 'react-native-elements';

function ProfilePage({ route, navigation }) {
    
    /* 2. Get the param */
    const { firstName } = route.params;
    const { lastName } = route.params;
    const { avatar } = route.params;

    var avatarImg = JSON.stringify(avatar);

    var avatar_string = new String();

    avatar_string = avatarImg.toString().replace(/"/g, "");

    var name = JSON.stringify(firstName) + ' ' + JSON.stringify(lastName);

    var name_string = new String();

    name_string = name.toString().replace(/"/g, "");

    return (
        <View style={styles.container}>
         <Header
        leftComponent={{ icon: 'menu', color: '#fff', onPress: () => navigation.toggleDrawer() }}
        centerComponent={{ text: 'Forms Page', style: { color: '#fff' } }}
        rightComponent={{ icon: 'notifications', color: '#fff', onPress: () => navigation.navigate('Notifications') }}
        />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.profile_title}>{name_string}</Text>
        <Image
          style={{width: 100, height: 100, borderRadius: 400/ 2}}
          source={{uri: avatar_string}}
        />
        
      </View>
      </View>

      
    );
  }

export default ProfilePage;