import * as React from 'react';
import styles from './components/styles'
import { Header } from 'react-native-elements';
import * as firebase from "firebase";
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'



export default class ProfilePage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      items: null,
   }
  }
  
  componentDidMount() {
    // firebase.database().ref('users/').once('value', function (snapshot) {
    //     console.log(snapshot.val())
    // });
    console.log('uid', firebase.auth().currentUser.uid);

    var my_uid = firebase.auth().currentUser.uid;

    let self = this;

    firebase.database().ref('users/' + my_uid).once('value', function (snapshot) {
      const userItem = snapshot.val();
      let items = Object.values(userItem);
      self.setState({ items: items });
    });

}
  render() {
    console.log('item', this.state.items)
    return (
      <View style={styles.login_container}>
        <ActivityIndicator size="large" />
        <Text>{this.state.items}</Text>
      </View>
    )
  }
}