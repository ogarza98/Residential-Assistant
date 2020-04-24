import React from 'react';
import chaticon from './components/vraIcon.png';
import {
  View,
  StatusBar,
  Image,
  Alert,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  StyleSheet,
  Clipboard,
} from 'react-native';
import {
  GiftedChat,
  Bubble,
  Send,
  SystemMessage,
  InputToolbar,
} from 'react-native-gifted-chat';
import { Dialogflow_V2 } from 'react-native-dialogflow-text';
import { dialogflowConfig } from './env';
const BOT_USER = {
  _id: 2,
  name: 'FAQ Bot',
  avatar: chaticon,
};
import { Header } from 'react-native-elements';
import ChatBotHeader from './PageHeader';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    let firstMsg = {
      _id: 1,
      text: 'Hi! I am your Virtual Residential Assistant.\n\nHow may I help you today?',
      createdAt: new Date(),
      system: true,
      user: BOT_USER,
    };

    this.state = {
      messages: [firstMsg],
    };
  }

  componentDidMount() {
    Dialogflow_V2.setConfiguration(
      dialogflowConfig.client_email,
      dialogflowConfig.private_key,
      Dialogflow_V2.LANG_PORTUGUESE_BRAZIL,
      dialogflowConfig.project_id
    );
  }

  sendBotResponse(text) {
    let msg = {
      _id: this.state.messages.length + 1,
      text,
      //createdAt: new Date(Date.UTC(2019, 5, 11, 17, 20, 0)),
      createdAt: new Date(),
      user: BOT_USER,
    };
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, [msg]),
    }));

    if(text == "Dorms can be checked in by filling out the Check-In form in the Forms page of this application.") {
      setTimeout(() => {  this.handleFormsNavigation(); }, 2000);
    }
    if(text == "Campus events can be found posted on the Community Wall of this application.") {
      setTimeout(() => {  this.handleWallNavigation(); }, 2000);
    }
    if(text == "Your account profile is under the Profile page of the application.") {
      setTimeout(() => {  this.handleProfileNavigation(); }, 2000);
    }
    if(text == "Dorms can be checked out of by filling out the Check-Out form in the forms page of this application.") {
      setTimeout(() => {  this.handleFormsNavigation(); }, 2000);
    }
  }

  handleFormsNavigation() {
    this.props.navigation.navigate('Forms');
  }

  handleWallNavigation() {
    this.props.navigation.navigate('Community Wall');
  }

  handleProfileNavigation() {
    this.props.navigation.navigate('Profile');
  }

  handleGoogleResponse(result) {
    console.log(result);
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    this.sendBotResponse(text);
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
    let message = messages[0].text;

    Dialogflow_V2.requestQuery(
      message,
      result => this.handleGoogleResponse(result),
      error => console.log(error)
    );
  }

  renderBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: '#ececec', //e5e5e5
          },
          right: {
            backgroundColor: '#007efc', //FF3D00
          },
        }}
      />
    );
  };
  renderSend(props) {
    return (
      <Send {...props}>
        <View
          style={{
            marginTop: 2,
            marginRight: 10,
            marginBottom: 10,
          }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              marginBottom: 8,
              color: '#007efc', //FF3D00
            }}>
            Send
          </Text>
        </View>
      </Send> 
    );
  }

  renderSystemMessage = props => {
    return (
      <SystemMessage
        {...props}
        containerStyle={{
          marginBottom: 10,
        }}
        textStyle={{
          fontSize: 14,
        }}
      />
    );
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <ChatBotHeader navigation = {this.props.navigation} text = {'Chat Bot'}/>
        <StatusBar hidden />
        <View style={{ backgroundColor: '#fff' }}>
          {/* <Text style={{ fontSize: 15, color: '#aaa', textAlign: 'center' }}>
            Hi! I am your Virtual Residential Assistant.\n\nHow may I help you today?
          </Text> */}
        </View>
        <GiftedChat
          renderLoading={() => (
            <ActivityIndicator size="large" color="#FF3D00" />
          )}
          renderSystemMessage={this.renderSystemMessage}
          //renderAvatar={null}
          renderSend={this.renderSend}
          renderBubble={this.renderBubble}
          inverted={true}
          locale="pt-BR"
          onPressAvatar={() => Alert.alert(' Hello, how are you?', 'I am your Virtual Residential Assistant.')}
          placeholder={'Message'}
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
      </View>
    );
  }
}
