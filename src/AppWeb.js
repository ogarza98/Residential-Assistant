import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppWeb extends Component {
  render() {
    return (
      <View style={styles.container}>
       <Text>Residential Assistant Website</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    padding: 50
  }
});



export default AppWeb;