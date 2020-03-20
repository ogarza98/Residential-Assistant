import * as React from 'react';
import s from './components/styles'
import * as firebase from "firebase";
import { View, ActivityIndicator} from 'react-native';
import QuestionsHeader from './PageHeader';

import { ScrollView } from 'react-native-gesture-handler';
import QuestionsIndex from './components/QuestionsIndex';


export default class QuestionsPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      items: null,
      isLoaded: false,
   }
  }
  componentDidMount() {
    let self = this;

    firebase.database().ref('FAQ/').once('value', function (snapshot) {
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
      <View style={s.container}>
      <QuestionsHeader navigation = {this.props.navigation} text = {'FAQs'}/>
        <ScrollView>
              <QuestionsIndex items = {this.state.items} id = {this.state.items.id}/>
          </ScrollView>    
       </View>       
      : 
      <View>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}