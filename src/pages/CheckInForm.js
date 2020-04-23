//import * as React from 'react';
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, Linking } from 'react-native'
import * as Print from 'expo-print'
import * as FileSystem from 'expo-file-system'
import * as IntentLauncher from 'expo-intent-launcher'
import * as MediaLibrary from 'expo-media-library'
import * as Permissions from 'expo-permissions'
import PDFreader from 'rn-pdf-reader-js'
import * as MailComposer from 'expo-mail-composer';
import DateTimePicker from '@react-native-community/datetimepicker';
import CheckInHeader from './PageHeader';

import styles from './components/styles'
import { Header } from 'react-native-elements';

  export default class Inputs extends React.Component {

   static navigationOptions = {
      drawerLabel: () => null
    }

   state = {
      initial: '',
      i_Label: 'Initials: ',
      guest_signature: '',
      g_Label: 'Guest Signature: ',
      checker: '',
      c_Label: 'Checked in by: ',
      form_date: '',
      d_Label: 'Date: ',
      date: new Date(),
   }
   handleInitial = (text) => {
      this.setState({ initial: text })
   }
   handleGuest = (text) => {
      this.setState({ guest_signature: text })
   }
   handleChecker = (text) => {
      this.setState({ checker: text })
   }
   handleDate = (text) => {
      this.setState({ form_date: text })
   }
   handleDateSelect = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      this.state.date = currentDate;
   }

   createPDF = () => {
      let html = "<h1 style='text-align: center;'>Housing and Residence Life</h1><br>" + "<h1 style='text-align: center;'>Check-In Form Response</h1><br>" + this.state.i_Label + this.state.initial + "<br><br>" + this.state.g_Label + this.state.guest_signature  + "<br><br>" + this.state.d_Label + this.state.date

      Print.printToFileAsync({
         html: html,
         width: 612,
         height: 792,
         base64: false,
      })
         .then((filepath) => {
         console.log('num pages', filepath.numberOfPages)

            MailComposer.composeAsync({
                recipients:["djram2898@outlook.com"],
                subject:"Housing Check-In Form",
                attachments: [filepath.uri],
            })
         })
   }
    render() {
      return (
        <View style={styles.container}>
          <CheckInHeader navigation = {this.props.navigation} text = {'Check-In Form'}/>
          {/* <Text style = {styles.header}>Check-In Form</Text> */}
          <TextInput style = {styles.input}
             underlineColorAndroid = "transparent"
             placeholder = "Initials"
             placeholderTextColor = "#2589dc"
             autoCapitalize = "none"
             onChangeText = {this.handleInitial}/>
          
          <TextInput style = {styles.input}
             underlineColorAndroid = "transparent"
             placeholder = "Full Name"
             placeholderTextColor = "#2589dc"
             autoCapitalize = "none"
             onChangeText = {this.handleGuest}/>

          <TouchableOpacity 
            style = {styles.submitButton}
            onPress={this.createPDF}>
            <Text style = {styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }