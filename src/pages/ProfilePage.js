import * as React from 'react';
import styles from './components/styles'
import { Header } from 'react-native-elements';
import * as firebase from "firebase";
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'



export default class ProfilePage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      userData: null
   }
   this.searchedText = ""
   this.localData=null;
  }
  
  componentDidMount() {
    // firebase.database().ref('users/').once('value', function (snapshot) {
    //     console.log(snapshot.val())
    // });
    console.log(firebase.auth().currentUser.uid);

    var my_uid = firebase.auth().currentUser.uid;

    firebase.database().ref('users/' + my_uid).once('value', function (snapshot) {
      console.log(snapshot.val());

    });

}

  render() {
    return (
      <View style={styles.login_container}>
        <ActivityIndicator size="large" />
        <Text>{this.state.userData}</Text>
      </View>
    )
  }
}