import * as React from 'react';
import styles from './components/styles'
import { Header } from 'react-native-elements';
import * as firebase from "firebase";
import { View, Text, ActivityIndicator, StyleSheet, Image } from 'react-native'



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


  render() {
    const { isLoaded, items} = this.state;
    console.log('firebase array', this.state.items)

    return (
      isLoaded ?
      <View style={styles.container}>
    <Header
      leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.navigation.toggleDrawer() }}
      centerComponent={{ text: 'Profile', style: { color: '#fff' } }}
   />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      </View>
      </View>

      : 
      <View>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}