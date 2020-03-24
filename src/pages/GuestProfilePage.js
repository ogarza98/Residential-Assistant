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

  componentWillMount(){
    console.log('componentWillMount');

}

componentWillUnmount(){
  console.log('componentWillUnmount');
}

  componentDidMount() {
    console.log('componentDidMount');
    const {poster_uid} = this.props.route.params;

    var posterUID = JSON.stringify(poster_uid);

    var PosterUIDString = new String();

    PosterUIDString = posterUID.trim();

    PosterUIDString = PosterUIDString.slice(0, -1);

    PosterUIDString = PosterUIDString.slice(1);

    var my_uid = PosterUIDString;

    console.log('test', my_uid)

    let self = this;

    firebase.database().ref('users/' + my_uid).once('value', function (snapshot) {
      const userItem = snapshot.val();
      let items = Object.values(userItem);
      self.setState({ items: items });
      self.setState({isLoaded: true});
    });

    
  }
  
  render() {
   
    const {isLoaded, items} = this.state;
   
    return (
      isLoaded ?
      <View style={styles.container}>
    <Header
      leftComponent={{ icon: 'arrow-back', color: '#fff', onPress: () => this.props.navigation.goBack() }}
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