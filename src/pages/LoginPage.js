// Login.js
import React from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import * as firebase from "firebase";
import { Container, Item, Form, Input, Button, Label, Title } from "native-base";
import styles from './components/styles';
import { Header, Icon} from 'react-native-elements';


export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: ""
        };
      }
      LogIn = (email, password) => {
        try {
          firebase
             .auth()
             .signInWithEmailAndPassword(email, password)
             .then(() => this.props.navigation.navigate('Home'));
    } catch (error) {
          console.log(error.toString(error));
        }
      };
      render() {
        return (
          <View style={styles.container}>
            <Header
            centerComponent={{ text: 'Welcome', style: { color: '#fff', fontWeight: 'bold' } }}
            rightComponent={{ icon: 'help', color: '#fff'}}/>
            <View style={styles.login_container}>

            <Title> UTSA's Residential Assistant</Title>
            <Form>
            <Item floatingLabel>
                <Label>Email</Label>
                <Input
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={email => this.setState({ email })}
                />
              </Item>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input
                  secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={password => this.setState({ password })}
                />
              </Item>
    
            </Form>

            <TouchableOpacity style={styles.buttonStyle} onPress={() => this.LogIn(this.state.email, this.state.password)} >
                <Text style={styles.textStyle} >Login</Text>
              </TouchableOpacity>
          </View>
          </View>
        );
      }
    }
    