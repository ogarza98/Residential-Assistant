// Login.js
import React from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import * as firebase from "firebase"
import styles from './components/styles';
import { Header, Icon} from 'react-native-elements';
import LoginHeader from './PageHeader';


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
             .then(() => this.props.navigation.navigate('Home', { screen: 'Community Wall' })) 
             .catch(error => {
              alert("Incorrect Login", error)
            });
    } catch (error) {
          console.log(error.toString(error));
        }
      };
      render() {
        return (
          <View style={styles.container}>
                  <LoginHeader navigation = {this.props.navigation} text = {'Welcome'}/>

            <View style={styles.login_container}>

            <Text style={styles.loginTitle}> UTSA's Residential Assistant</Text>
                <Text style={styles.loginText}>   Email</Text>
                <TextInput
                  style={styles.loginTextInput}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={email => this.setState({ email })}
                />
        
                <Text style={styles.loginText}>   Password</Text>
                <TextInput
                style={styles.loginTextInput}
                  secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={password => this.setState({ password })}
                />
    
            <TouchableOpacity style={styles.buttonStyle} onPress={() => this.LogIn(this.state.email, this.state.password)} >
                <Text style={styles.textStyle} >Login</Text>
              </TouchableOpacity>
          </View>
          </View>
        );
      }
    }
    