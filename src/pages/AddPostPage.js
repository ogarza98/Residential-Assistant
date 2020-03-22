import * as React from 'react';
import { Header } from 'react-native-elements';
import * as firebase from "firebase";
import { View, Text, ActivityIndicator, StyleSheet, Image, TextInput, TouchableHighlight, Alert, Button } from 'react-native';
import GenerateRandomCode from 'react-random-code-generator';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';


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
        var sec = new Date().getSeconds(); //Current Seconds
        this.setState({
          //Setting the value of the date time
          date:
            month + '-' + date + '-' + year + ' ' + hours + ':' + min,
        });
        
    }
  
    handleChangeText = e => {
      this.setState({
        text: e.nativeEvent.text
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
        <View style={styles.main}>
          <Text style={styles.title}>Add Item</Text>
          <TextInput style={styles.itemInput} onChange={this.handleChangeText} />
          <TextInput style={styles.itemInput} onChange={this.handleChangeTitle} />

          
          <Button
          title="Attach Image"
          onPress={this._pickImage}
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

          <TouchableHighlight
            style={styles.button}
            underlayColor="white"
            onPress={this.handleSubmit}
          >
            <Text style={styles.buttonText}>Add</Text>
          </TouchableHighlight>
        </View>

: 
<View>
  <ActivityIndicator size="large" />
</View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    main: {
      flex: 1,
      padding: 30,
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#6565fc'
    },
    title: {
      marginBottom: 20,
      fontSize: 25,
      textAlign: 'center'
    },
    itemInput: {
      height: 50,
      padding: 4,
      marginRight: 5,
      fontSize: 23,
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 8,
      color: 'white'
    },
    buttonText: {
      fontSize: 18,
      color: '#111',
      alignSelf: 'center'
    },
    button: {
      height: 45,
      flexDirection: 'row',
      backgroundColor: 'white',
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      marginTop: 10,
      alignSelf: 'stretch',
      justifyContent: 'center'
    }
  });