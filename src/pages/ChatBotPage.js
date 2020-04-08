import * as React from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import { Header } from 'react-native-elements';
import { Component } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

class ChatBotPage extends Component {
    state = {
        messages: [
        {
            _id: 1,
            text: `Hi! I am the FAQ bot 🤖 from Jscrambler.\n\nHow may I help you with today?`,
            createdAt: new Date(),
            user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: 'https://i.imgur.com/7k12EPD.png'
            }
        }
        ]
    };

    onSend(messages = []) {
        this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, messages)
        }));
    }    

    render() {
        return (
            <View style={styles.container}>
                <Header
                leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.navigation.toggleDrawer() }}
                centerComponent={{ text: 'Chat Bot', style: { color: '#fff' } }}
                />
                <GiftedChat
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                user={{
                    _id: 1
                }}
                />

            </View>          
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default ChatBotPage;



// // App.js
// import React, { Component } from 'react';
// import { StyleSheet, Text, View, Image } from 'react-native';
// import { GiftedChat } from 'react-native-gifted-chat';

// class App extends Component {
//   state = {
//     messages: [
//       {
//         _id: 1,
//         text: `Hi! I am the FAQ bot 🤖 from Jscrambler.\n\nHow may I help you with today?`,
//         createdAt: new Date(),
//         user: {
//           _id: 2,
//           name: 'FAQ Bot',
//           avatar: 'https://i.imgur.com/7k12EPD.png'
//         }
//       }
//     ]
//   };

//   onSend(messages = []) {
//     this.setState(previousState => ({
//       messages: GiftedChat.append(previousState.messages, messages)
//     }));
//   }

//   render() {
//     return (
//       <View style={{ flex: 1, backgroundColor: '#fff' }}>
//         <GiftedChat
//           messages={this.state.messages}
//           onSend={messages => this.onSend(messages)}
//           user={{
//             _id: 1
//           }}
//         />
//       </View>
//     );
//   }
// }

// export default App;