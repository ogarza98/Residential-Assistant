import * as React from 'react';
import { Header } from 'react-native-elements';
import * as firebase from "firebase";
import { View, Text, ActivityIndicator, StyleSheet, Image, TextInput, TouchableHighlight, Alert } from 'react-native'

let addItem = item => {
    console.log('this sent over', item)
    firebase.database().ref('/posts').push({
      name: item[0],
      poster_uid: item[3]
    });
  };

  
  
  export default class AddPostPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          items: null,
          isLoaded: false,
          name: '',
          avatar: '',
          id: '',
          poster_name: '',
          poster_uid: '',

       }
      }

    componentDidMount() {
        console.log('uid', firebase.auth().currentUser.uid);
    
        var my_uid = firebase.auth().currentUser.uid;
    
        let self = this;
    
        firebase.database().ref('users/' + my_uid).once('value', function (snapshot) {
          const userItem = snapshot.val();
          let items = Object.values(userItem);
          self.setState({ items: items });
          self.setState({isLoaded: true});
        });
        
    }
  
    handleChange = e => {
      this.setState({
        name: e.nativeEvent.text
      });
    };
    handleSubmit = () => {
   
      var array = [this.state.name, this.state.items[0], this.state.items[2], firebase.auth().currentUser.uid];
      addItem(array);
      Alert.alert('Item saved successfully');
    };
  
    render() {
        const { isLoaded, items} = this.state;
        console.log('firebase array', this.state.items)
        // const itemArray = this.state.items;
    
        return (
          isLoaded ?
        <View style={styles.main}>
          <Text style={styles.title}>Add Item</Text>
          <TextInput style={styles.itemInput} onChange={this.handleChange} />
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