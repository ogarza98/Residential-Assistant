// Loading.js
import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import * as firebase from "firebase";
import styles from './components/styles';

export default class Loading extends React.Component {
  componentDidMount() {
    firebase.auth().signOut();
    this.props.navigation.navigate('App', { screen: 'Loading' });
  }
  render() {
    return (
      <View style={styles.login_container}>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}
