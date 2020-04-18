import * as React from 'react';
import * as firebase from "firebase";
import GenerateRandomCode from 'react-random-code-generator';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import styles from './components/styles'
import AddPostHeader from './PageHeader';
import { View, Text, ActivityIndicator, StyleSheet, Image, FlatList, TextInput, TouchableHighlight, TouchableOpacity, ScrollView, RefreshControl, Alert } from 'react-native';
import { Avatar, Card, Title, Paragraph} from 'react-native-paper';
import { Header, Divider, Icon, Button} from 'react-native-elements';
import photoIcon from './components/photoIcon.png';


let addItem = item => {
    console.log('this sent over', item)
    firebase.database().ref('/posts').push({
      text: item[0],
      poster_uid: item[3],
      id: GenerateRandomCode.NumCode(4),
      poster_name: item[2],
      avatar: item[1],
      date_posted: item[4],
      photoUrl: item[5],
      title: item[6]

    });
  };

  
  
  export default class AddPostPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          items: null,
          isLoaded: false,
          text: '',
          title: '',
          avatar: '',
          id: '',
          poster_name: '',
          poster_uid: '',
          image: null,
          image_uri:'',
          date: '',


       }
      }

    componentDidMount() {
        this.getPermissionAsync();

        console.log('uid', firebase.auth().currentUser.uid);
    
        var my_uid = firebase.auth().currentUser.uid;
    
        let self = this;
    
        firebase.database().ref('users/' + my_uid).once('value', function (snapshot) {
          const userItem = snapshot.val();
          let items = Object.values(userItem);
          self.setState({ items: items });
          self.setState({isLoaded: true});
        });

        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        this.setState({
          //Setting the value of the date time
          date:
            month + '-' + date + '-' + year + ' ' + hours + ':' + min,
        });
        
    }
  
    handleChangeText = (text) => {
      this.setState({
        text: text
      });
    };

    handleChangeTitle = e => {
      this.setState({
        title: e.nativeEvent.text
      });
    };

    handleSubmit = () => {
   
      var array = [this.state.text, this.state.items[0], this.state.items[2], firebase.auth().currentUser.uid, this.state.date, this.state.image_uri, this.state.title];
      addItem(array);
      Alert.alert('Item saved successfully');
      this.props.navigation.goBack();

    };

    getPermissionAsync = async () => {
      if (Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    }
  
    uriToBlob = (uri) => {
  
      return new Promise((resolve, reject) => {
  
        const xhr = new XMLHttpRequest();
  
        xhr.onload = function() {
          // return the blob
          resolve(xhr.response);
        };
        
        xhr.onerror = function() {
          // something went wrong
          reject(new Error('uriToBlob failed'));
        };
  
        // this helps us get a blob
        xhr.responseType = 'blob';
  
        xhr.open('GET', uri, true);
        xhr.send(null);
  
      });
  
    }
  
    uploadToFirebase = (blob) => {

  
      return new Promise((resolve, reject)=>{

        let self = this;

        var storageRef = firebase.storage().ref();
  
        storageRef.child('uploads/photo_' +  GenerateRandomCode.NumCode(4) + '.jpg').put(blob, {
          contentType: 'image/jpeg'
        }).then((snapshot)=>{
  
          blob.close();
  
          resolve(snapshot);
  
          snapshot.ref.getDownloadURL().then(function(downloadURL) {
            self.setState({ image_uri: downloadURL });
          });
  
        }).catch((error)=>{
  
          reject(error);
  
        });
  
      });
  
  
    }      
  
    _pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1
      }).then((result)=>{ 
  
        if (!result.cancelled) {
  
          this.setState({ image: result.uri });
          
          // User picked an image
          const {height, width, type, uri} = result;
          return this.uriToBlob(uri);
  
        }
  
      }).then((blob)=>{
  
        return this.uploadToFirebase(blob);
  
      }).then((snapshot)=>{
  
        console.log("File uploaded");
     
      }).catch((error)=>{
  
        throw error;
  
      }); 
  
    }
  
    render() {
        const { isLoaded, items, image} = this.state;
        console.log('firebase array', this.state.items)
        // const itemArray = this.state.items;
    
        return (
        isLoaded ?
        <View style={styles.container}>

        <AddPostHeader navigation = {this.props.navigation} text = {'Create Post'}
        rightComponent = {{text: 'Post',style: { color: '#0080ff', fontSize: 20, flex: 1, fontWeight: 'bold' }, onPress: () => this.handleSubmit()}}
        />
        <ScrollView>
          <Card>
        <Divider style={{height: 10, backgroundColor: '#DCDCDC' }}/>
        <Divider style={{height: 1.5, backgroundColor: 'black' }}/>

        <Card.Content>
          <View style={styles.row}>
          <Avatar.Image size={35} source={{ uri: this.state.items[0]}}/>
          

          <TextInput style = {styles.inputposttitle}
             underlineColorAndroid = "transparent"
             placeholder = "Program Title..."
             placeholderTextColor = "#555555"
             autoCapitalize = "none"
             onChange = {this.handleChangeTitle}/>

          </View>

            <TextInput style = {styles.inputpost}
             underlineColorAndroid = "transparent"
             placeholder = "Write a caption..."
             placeholderTextColor = "#555555"
             autoCapitalize = "none"
             multiline = {true}
             numberOfLines = {10}
             onChangeText = {this.handleChangeText}/>

        </Card.Content>

        {image &&
          <Image source={{ uri: image }} style={styles.stretch} />}
        
        <TouchableOpacity 
        style={styles.addphoto}
            onPress={this._pickImage}>
            <Image style={styles.photoButton} source={photoIcon}
            />
            <Text style = {styles.addphototext}>Photo/Video</Text>
          </TouchableOpacity>
       


          <Divider style={{height: 1.5, backgroundColor: 'black' }}/>

          <Divider style={{height: 1.5, backgroundColor: '#DCDCDC' }}/>

       </Card>
       </ScrollView>


        </View>
: 
<View>
  <ActivityIndicator size="large" />
</View>
      );
    }
  }