import * as React from 'react';
import s from './components/styles'
import * as firebase from "firebase";
import { View, ActivityIndicator, Text} from 'react-native';
import QuestionsHeader from './PageHeader';

import { ScrollView, FlatList } from 'react-native-gesture-handler';
import QuestionsIndex from './components/QuestionsIndex';
import { SearchBar } from 'react-native-elements';

export default class QuestionsPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      items: null,
      isLoaded: true,
      search: ''
   };
   this.arrayholder = [];
  }
  componentDidMount() {
    let self = this;

    firebase.database().ref('FAQ/').once('value', function (snapshot) {
      const userItem = snapshot.val();
      let items = Object.values(userItem);
      self.setState({ items: items });
      self.setState({isLoaded: false, dataSource: items},
      function() {
        this.arrayholder = items;
      }
        );
    })
    
    .catch(error => {
      console.error(error);
    });
}
  search = text => {
      console.log(text);
    };
    clear = () => {
      this.search.clear();
    };

    SearchFilterFunction(text) {
      //passing the inserted text in textinput
      const newData = this.arrayholder.filter(function(items) {
        //applying filter for the inserted text in search bar
        const itemData = items.question ? items.question.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
  
      this.setState({
        //setting the filtered newData on datasource
        //After setting the data it will automatically re-render the view
        dataSource: newData,
        search: text,
      });

      QuestionsIndex(this.state.dataSource);
    }
    
  render() {
    const { isLoaded, items} = this.state;
    
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
      <SearchBar
          round
          searchIcon={{ size: 24 }}
          onChangeText={text => this.SearchFilterFunction(text)}
          onClear={text => this.SearchFilterFunction('')}
          placeholder="Type Here..."
          value={this.state.search}
        />
      
        <ScrollView>
              <QuestionsIndex 
              items = {this.state.dataSource} 
              id = {this.state.items.id}
              
              />
          </ScrollView>
       </View>   
    )
  }
}