import * as React from 'react';
import s from './components/styles'
import * as firebase from "firebase";
import { View,Image, ActivityIndicator, TouchableOpacity, Text} from 'react-native';
import QuestionsHeader from './PageHeader';
import vraIcon from './components/vraIcon.png';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import QuestionsIndex from './components/QuestionsIndex';
import { SearchBar } from 'react-native-elements';

export default class QuestionsPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      items: null,
      isLoaded: true,
   };
   
  }
  componentDidMount() {
    let self = this;

    firebase.database().ref('FAQ/').once('value', function (snapshot) {
      const userItem = snapshot.val();
      let items = Object.values(userItem);
      self.setState({ items: items });
      self.setState({isLoaded: false},
      
        );
    })}
    
    clickHandlerTwo = () => {
      this.props.navigation.navigate('Chat Bot')
    
    };

  
    
  render() {
    const { isLoaded, items} = this.state;
    

    
    console.log('firebase array', this.state.items)
    if (this.state.isLoaded) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={s.container}>
        
      <QuestionsHeader navigation = {this.props.navigation} text = {'FAQs'}/>
      
      
        <ScrollView>
              <QuestionsIndex 
              items = {this.state.items}
              />
          </ScrollView>
          <TouchableOpacity
          activeOpacity={0.7}
          onPress={this.clickHandlerTwo}
          style={s.TouchableOpacityStyle}>
          <Image
            //We are making FAB using TouchableOpacity with an image
            //We are using online image here
            source={vraIcon}
            //You can use you project image Example below
            //source={require('./images/float-add-icon.png')}
            style={s.FloatingButtonStyle}
          />
        </TouchableOpacity>
       </View>   
    )
  }
}