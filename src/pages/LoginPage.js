// Login.js
import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import * as firebase from "firebase";
import { Container, Item, Form, Input, Button, Label } from "native-base";
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
             .then(() => this.props.navigation.navigate('Community'));
    } catch (error) {
          console.log(error.toString(error));
        }
      };
      render() {
        return (
          <Container>
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
              <Button onPress={() => this.LogIn(this.state.email, this.state.password)}
                full rounded success>
                <Text>Login</Text>
              </Button>
    
            </Form>
          </Container>
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });
    