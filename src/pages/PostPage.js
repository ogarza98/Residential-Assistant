import * as React from 'react';
import styles from './components/styles'
import * as firebase from "firebase";
import { View, Text, ActivityIndicator, Share, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView, RefreshControl, Alert } from 'react-native';
import { Avatar, Card, Title, Paragraph} from 'react-native-paper';
import { Header, Divider, Icon, Button} from 'react-native-elements';
import CommunityHeader from './PageHeader';
import {SingleImage} from 'react-native-zoom-lightbox';
import addIcon from './components/addpost.png';

export default class PostPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      items: null,
      isLoaded: false,
   }
  }

   componentDidMount() {
    let self = this;

    firebase.database().ref('posts/').once('value', function (snapshot) {
      const userItem = snapshot.val();
      let items = Object.values(userItem);
      self.setState({ items: items });
      self.setState({isLoaded: true});
    });

}

shareButton(item){
  Share.share({ 
    message: 'Check out this event at UTSA',
    url: item
  })
  
}

moreButton(item){
  console.log("huh", item);
  Alert.alert(
    "Information",
    "Post ID: " + item.toString(),
    [
      {
        text: "Report",
        onPress: () => console.log("Ask me later pressed")
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
    ],
    { cancelable: false }
  );
  
}

clickHandler = () => {
  this.props.navigation.navigate('AddPost')

};


  render() {
    const { isLoaded, items} = this.state;

    return (
      isLoaded ?
      <View style={styles.container}>
      
      <CommunityHeader navigation = {this.props.navigation} text = {'Community Wall'}
      rightComponent={{ icon: 'refresh', color: '#fff', onPress: () => {this.componentDidMount(); Alert.alert("Page Refresh Complete")}}}
            />
   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <FlatList
       keyExtractor={this.state.items.id}
       data={this.state.items}
       renderItem={({ item }) => (
        <Card>
        <Divider style={{height: 10, backgroundColor: '#DCDCDC' }}/>
        <Divider style={{height: 1.5, backgroundColor: 'black' }}/>

        <Card.Content>
          <View style={styles.row}>
          <TouchableOpacity onPress={() => {
              
              /* 1. Navigate to the Details route with params */
                this.props.navigation.navigate('GuestProfile', {
                poster_uid: item.poster_uid ,

              });
              }}>

              <Avatar.Image size={35} source={{ uri: item.avatar}}/>

            </TouchableOpacity>

              <Title> {item.title} </Title>

          </View>

            <Paragraph style={styles.subtitle}>Posted by {item.poster_name} on {item.date_posted}</Paragraph>
            <Paragraph style={styles.paragraph}>{item.text}</Paragraph>

        </Card.Content>

          <SingleImage uri={item.photoUrl}style={styles.stretch} />

          <Divider style={{height: 3, backgroundColor: 'white' }}/>

          <Divider style={{height: 1.5, backgroundColor: 'black' }}/>

          
          <View style={styles.post_row}>
            
            <TouchableOpacity style = {styles.post_action} 
            onPress={() => this.shareButton(item.photoUrl)}>
              <View style={styles.post_action}>
                <Icon name='share' />
                <Text> Share</Text>
              </View>
            </TouchableOpacity>

           
            
            <TouchableOpacity style = {styles.post_action}
            onPress={() => this.moreButton(item.id)}>
              <View style={styles.post_action}>
                <Icon name='info' />
                <Text> Info</Text>
              </View>
            </TouchableOpacity>

          </View>


          
          <Divider style={{height: 10, backgroundColor: 'white' }}/>
          <Divider style={{height: 1.5, backgroundColor: 'black' }}/>

          <Divider style={{height: 1.5, backgroundColor: '#DCDCDC' }}/>

       </Card>
                  
       )}
     />

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={this.clickHandler}
          style={styles.TouchableOpacityStyle}>
          <Image
            //We are making FAB using TouchableOpacity with an image
            //We are using online image here
            source={addIcon}
            //You can use you project image Example below
            //source={require('./images/float-add-icon.png')}
            style={styles.FloatingButtonStyle}
          />
        </TouchableOpacity>
      
      </View>
    </View>

      : 
      <View>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}

