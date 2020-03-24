//import * as React from 'react';
import React, { Component } from 'react'
import { YellowBox, Animated, Dimensions, Keyboard, UIManager, View, Text, TouchableOpacity, TextInput, StyleSheet, Button, Linking } from 'react-native'
import * as Print from 'expo-print'
import * as FileSystem from 'expo-file-system'
import * as IntentLauncher from 'expo-intent-launcher'
import * as MediaLibrary from 'expo-media-library'
import * as Permissions from 'expo-permissions'
import PDFreader from 'rn-pdf-reader-js'
import * as MailComposer from 'expo-mail-composer';
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from './components/styles'
import { Header } from 'react-native-elements';

//The method componentWillMount is technically out of date because RN made a substitute that is supposedly easier to use. 
//The method will be removed completely from React Native version 17 and higher
YellowBox.ignoreWarnings(['Warning: componentWillMount']);

const { State: TextInputState } = TextInput;

export default class CheckOutForm extends React.Component {

   state = {
      lastName: '',
      l_Label: 'Last Name: ',
      firstName: '',
      f_Label: 'First Name: ',
      phone: '',
      p_Label: 'Phone Number: ',
      complex: '',
      c_Label: 'Complex: ',
      roomLetter: '',
      rl_Label: 'Room Letter: ',
      buildingNumber: '',
      roomNumber: '',
      n_Label: 'Building #/Room #: ',
      bannerID: '',
      b_label: 'My Banner ID: ',
      sig_label: 'Student Signature: ',
      date: new Date(),
      d_Label: 'Date: ',
      shift: new Animated.Value(0),
   }
   componentWillMount() {
     this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
     this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);
   }

   componentWillUnmount() {
     this.keyboardDidShowSub.remove();
     this.keyboardDidHideSub.remove();
   }
   handleLastName = (text) => {
      this.setState({ lastName: text })
   }
   handleFirstName = (text) => {
      this.setState({ firstName: text })
   }
   handlePhone = (text) => {
      this.setState({ phone: text })
   }
   handleComplex = (text) => {
      this.setState({ complex: text })
   }
    handleRoomLetter = (text) => {
      this.setState({ roomLetter: text })
   }
    handleBuildingNumber = (text) => {
      this.setState({ buildingNumber: text })
   }
    handleRoomNumber = (text) => {
      this.setState({ roomNumber: text })
   }
    handleBannerID = (text) => {
      this.setState({ bannerID: text })
   }
   handleDateSelect = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      this.state.date = currentDate;
   }

   createPDF = () => {
      let personal = "<h1 style='text-align: center;'>Housing and Residence Life</h1><br>" + "<h1 style='text-align: center;'>Check-Out Form Response</h1><br>" + this.state.l_Label + this.state.lastName + "<br><br>" + this.state.f_Label + this.state.firstName  + "<br><br>" + this.state.p_Label + this.state.phone + "<br><br>"
      let building = this.state.c_Label + this.state.complex + "<br><br>" + this.state.rl_Label + this.state.roomLetter + "<br><br>" + this.state.n_Label + this.state.buildingNumber + "/" + this.state.roomNumber + "<br><br>"
      let signature = this.state.b_label + this.state.bannerID + "<br><br>" + this.state.sig_label + this.state.firstName + " " + this.state.lastName + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + this.state.d_Label + this.state.date
      let html = personal + building + signature

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
      const { shift } = this.state;
      return (
        <Animated.View style={styles.container, { transform: [{translateY: shift}] }}>
          <Header
          leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.navigation.toggleDrawer() }}
          centerComponent={{ text: 'Check-Out Form', style: {fontSize: 20, color: '#fff' } }}
          rightComponent={{ icon: 'notifications', color: '#fff', onPress: () => this.props.navigation.navigate('Notifications') }}
          />
          {/* <Text style = {styles.header}>Check-Out Form</Text> */}
          <TextInput style = {styles.input}
             underlineColorAndroid = "transparent"
             placeholder = "Last Name"
             placeholderTextColor = "#2589dc"
             autoCapitalize = "none"
             onChangeText = {this.handleLastName}/>
          
          <TextInput style = {styles.input}
             underlineColorAndroid = "transparent"
             placeholder = "First Name"
             placeholderTextColor = "#2589dc"
             autoCapitalize = "none"
             onChangeText = {this.handleFirstName}/>

          <TextInput style = {styles.input}
             underlineColorAndroid = "transparent"
             placeholder = "Contact Phone Number: 555-555-5555"
             placeholderTextColor = "#2589dc"
             autoCapitalize = "none"
             onChangeText = {this.handlePhone}/>

          <TextInput style = {styles.input}
             underlineColorAndroid = "transparent"
             placeholder = "Complex: CV, LV, or ARH"
             placeholderTextColor = "#2589dc"
             autoCapitalize = "none"
             onChangeText = {this.handleComplex}/>

          <TextInput style = {styles.input}
             underlineColorAndroid = "transparent"
             placeholder = "Room Letter: A, B, C, or D"
             placeholderTextColor = "#2589dc"
             autoCapitalize = "none"
             onChangeText = {this.handleRoomLetter}/>

          <TextInput style = {styles.input}
             underlineColorAndroid = "transparent"
             placeholder = "Building Number"
             placeholderTextColor = "#2589dc"
             autoCapitalize = "none"
             onChangeText = {this.handleBuildingNumber}/>

          <TextInput style = {styles.input}
             underlineColorAndroid = "transparent"
             placeholder = "Room Number"
             placeholderTextColor = "#2589dc"
             autoCapitalize = "none"
             onChangeText = {this.handleRoomNumber}/>

          <TextInput style = {styles.input}
             underlineColorAndroid = "transparent"
             placeholder = "Banner ID"
             placeholderTextColor = "#2589dc"
             autoCapitalize = "none"
             onChangeText = {this.handleBannerID}/>

          <TouchableOpacity 
            style = {styles.submitButton}
            onPress={this.createPDF}>
            <Text style = {styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </Animated.View>
      );
    }

   handleKeyboardDidShow = (event) => {
    const { height: windowHeight } = Dimensions.get('window');
    const keyboardHeight = event.endCoordinates.height;
    const currentlyFocusedField = TextInputState.currentlyFocusedField();
    UIManager.measure(currentlyFocusedField, (originX, originY, width, height, pageX, pageY) => {
      const fieldHeight = height;
      const fieldTop = pageY;
      const gap = (windowHeight - keyboardHeight) - (fieldTop + fieldHeight);
      if (gap >= 0) {
        return;
      }
      Animated.timing(
        this.state.shift,
        {
          toValue: gap,
          duration: 1000,
          useNativeDriver: true,
        }
      ).start();
    });
  }

  handleKeyboardDidHide = () => {
    Animated.timing(
      this.state.shift,
      {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }
    ).start();
  }

}