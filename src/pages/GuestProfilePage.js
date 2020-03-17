import * as React from 'react';
import styles from './components/styles'
import { Header } from 'react-native-elements';
import * as firebase from "firebase";
import { View, Text, ActivityIndicator, StyleSheet, Image } from 'react-native'



export default class GuestProfilePage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      items: null,
      isLoaded: false,
   }
  }
  
  componentDidMount() {

    /* 2. Get the param */
    const {poster_uid} = this.props.route.params;

    var posterUID = JSON.stringify(poster_uid);

    var PosterUIDString = new String();

    PosterUIDString = posterUID.toString().replace(/"/g, "");

    var my_uid = PosterUIDString;

    let self = this;

    firebase.database().ref('users/' + my_uid).once('value', function (snapshot) {
      const userItem = snapshot.val();
      let items = Object.values(userItem);
      self.setState({ items: items });
      self.setState({isLoaded: true});
    });

}


  render() {
    const { isLoaded, items} = this.state;
    // console.log('firebase array', this.state.items)
    // const itemArray = this.state.items;

    return (
      isLoaded ?
      <View style={styles.container}>
    <Header
      leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.navigation.toggleDrawer() }}
      centerComponent={{ text: 'Profile', style: { color: '#fff' } }}
   />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.profile_title}>{items[2]}</Text>
      <Image
          style={{width: 100, height: 100, borderRadius: 400/ 2}}
          source={{uri: items[0]}}
        />
        <Text style={styles.profile_title}>{items[1]}</Text>
        <Text style={styles.profile_title}>{items[3]}</Text>


      </View>
      </View>

      : 
      <View>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}