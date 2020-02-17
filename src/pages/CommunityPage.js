import * as React from 'react';
import { Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import styles from './components/styles';
import { Header, Divider} from 'react-native-elements';
import posts from './components/PostIndex';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {SingleImage} from 'react-native-zoom-lightbox';

function CommunityPage({ navigation }) {

  return(
  <View style={styles.container}>
    <Header
   leftComponent={{ icon: 'menu', color: '#fff', onPress: () => navigation.toggleDrawer() }}
   centerComponent={{ text: 'Community Page', style: { color: '#fff' } }}
   rightComponent={{ icon: 'notifications', color: '#fff', onPress: () => navigation.navigate('Notifications') }}
   />
   
   <View>
     <FlatList
       keyExtractor={posts => posts.id}
       data={posts}
       renderItem={({ item }) => (
       <Card>
       <Divider style={{height: 10, backgroundColor: '#e8f4f8' }}/>
       <Divider style={{height: 1.5, backgroundColor: '#c6cbcd' }}/>

       <Card.Content>
       <View style={styles.row}>
         <TouchableOpacity onPress={() => {
          
          /* 1. Navigate to the Details route with params */
            navigation.navigate('Profile', {
            itemId: item.id,
            firstName: item.poster_firstName ,
            lastName: item.poster_lastName,
            avatar: item.avatar
            
          });
          }}>
           <Avatar.Image size={35} source={{ uri: item.avatar}}/>
         </TouchableOpacity>
           <Title> {item.title}
           </Title>
         </View>
         <Paragraph style={styles.subtitle}>Posted by {item.poster_firstName} {item.poster_lastName} on {item.date_posted}</Paragraph>
         <Paragraph style={styles.paragraph}>{item.text}</Paragraph>
       </Card.Content>
       <SingleImage 
           uri={item.photoUrl}
           style={styles.stretch} />
       
       <Divider style={{height: 10, backgroundColor: 'white' }}/>
       <Divider style={{height: 1.5, backgroundColor: '#c6cbcd' }}/>


       </Card>
                   

       )}
     />
   
   </View>
 </View>)}

export default CommunityPage;