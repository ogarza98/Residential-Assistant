import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    
    container: {
      flex: 1,
    },
    title: {
      fontSize: 19,
      fontWeight: 'bold',
    },
    faqquestion: {
      maxWidth: 768,
      justifyContent: 'flex-start',
      fontSize: 18,
      flexDirection: 'column',
      padding: 15,
      fontWeight: 'bold',
      paddingRight: 60,
    },
    faqquestionopen: {
      maxWidth: 768,
      justifyContent: 'flex-start',
      fontSize: 18,
      flexDirection: 'column',
      padding: 15,
      fontWeight: 'bold',
      paddingRight: 60
    },
    imagestyle: {
      marginTop: -60,
      marginBottom: -400,
      marginLeft: 337,
      maxHeight: 25,
      maxWidth: 25,
    },
    imagestyleopen: {
      marginTop: 30,
      marginBottom: -300,
      marginLeft: 337,
      maxHeight: 25,
      maxWidth: 25,
      transform: [{ rotate: '180deg' }]
    },
    faqanswer: {
      maxHeight: 0,
      opacity: 0,
      overflow: 'hidden'
    },
    faqansweropen: {
      maxHeight:1000,
      opacity: 1,
      backgroundColor: '#C8F2FF',
      padding: 15,
    },
    viewStyle: {
      justifyContent: 'center',
      flex: 1,
      backgroundColor: 'white',
      marginTop: Platform.OS == 'ios' ? 30 : 0,
    },
    searchInput: {
      padding: 10,
      borderColor: '#CCC',
      borderWidth: 1
    },
    activeTitle: {
      color: 'red',
    },
    center: {
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    card: {
      flex:1,
    },
    stretch: {
      height: 350,
      resizeMode: 'cover',
      backgroundColor: 'grey'
    },
    resizeImage: {
      flex: 3,
      resizeMode: "contain"
    },
    title: {
      fontWeight: 'bold',
    },
    profile_title: {
      fontWeight: 'bold',
      fontSize: 20,
      paddingBottom: 20,
      textTransform: 'uppercase',
      paddingTop: 20,
    },
    subtitle: {
      fontSize: 12
    },
    row: {
    flexDirection: 'row', 
    paddingTop: 10
    },
    faqrow: {
      flexDirection: 'row', 
      alignItems: 'center',
    },
    faqButton: {
      marginLeft: 9,
      width: 25,
      height: 25,
    },
    faqButtonopen: {
      transform: [{ rotate: '180deg' }],
      marginLeft: 9,
      width: 25,
      height: 25,
    },
    post_row: {
      flex: 1,
      flexDirection: 'row', 
    },
    paragraph: {
      paddingBottom: 10
    },
    post_action: {
      flex: 1, 
      height: 30, 
      backgroundColor: 'white', 
      paddingTop: 4,
      flexDirection: 'row',
      alignItems: 'center', 
      justifyContent: 'center', 
    },
    login_container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignContent: 'center',
    },
    buttonStyle: {
      margin:25,
      padding: 15,
      backgroundColor: '#1FA9FF',
      borderRadius:5
      },
      textStyle: {
        fontSize:20,
      color: '#ffffff',
      textAlign: 'center'
      },
      main: {
        flex: 1,
        padding: 30,
        flexDirection: 'column',
        justifyContent: 'center',
      },
      title_add: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center'
      },
      itemInput: {
        margin: 15,
        height: 50,
        borderColor: '#7a42f4',
        borderWidth: 1
      },
      itemInput_text: {
        margin: 15,
        height: 80,
        borderColor: '#7a42f4',
        borderWidth: 1
      },
      buttonText: {
        fontSize: 18,
        color: '#111',
        alignSelf: 'center'
      },
      button: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
      },
      resources: {
        marginTop: 50,
        alignItems: 'center',
      },
      icon: {
        width: 150, 
        height: 150
      },
      loginTitle:{
        fontSize: 20,
        textAlign: 'center',
        paddingBottom: 20
      },
      loginText:{
        fontSize: 15,
        paddingBottom: 10,
        paddingTop: 10
      },
      loginTextInput:{
        fontSize: 15,
        backgroundColor: '#F5F5F5',
        padding: 15,
      },
    faqs: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      maxWidth: 768,
      padding: 2,
      margin: 10
    },
    faq:{
      justifyContent: 'flex-start',
      flexDirection: 'column',
      backgroundColor: '#FFF',
      borderRadius: 0,
      shadowColor: '#000000',
      shadowOffset: {
      width: 0,
      height: 5
    },
      shadowRadius: 5,
      shadowOpacity: 1.0
    },
    header: {
    fontSize: 40,
    color: '#2589dc',
    textAlign: 'center',
    },
    inputpost: {
            height: 80,
            padding: 4,
            marginBottom: 90,
            fontSize: 18,
            marginTop: 20,
            marginLeft: -10
         },
      inputposttitle: {
              height: 40,
              padding: 8,
              fontSize: 22,
              fontWeight: 'bold',
              marginLeft: 4,
           },
      input: {
        margin: 15,
        height: 40,
        borderColor: '#2589dc',
        borderWidth: 1,
        padding: 10,
     },
   submitButton: {
      backgroundColor: '#2589dc',
      padding: 10,
      margin: 15,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
   },
   addphoto:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 55,
    borderRadius: 0,
    maxWidth: 768,
    borderColor: '#dddddd',
    borderWidth: 1,
   },
   addphototext: {
      height: 40,
      padding: 8,
      fontSize: 20,
      marginLeft: 4,
   },
   submitButtonText:{
      color: 'white'
   },
   TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  photoButton: {
    alignSelf: 'flex-start',
    width: 50,
    height: 50,
    //backgroundColor:'black'
  },
  
  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    //backgroundColor:'black'
  }
  });
export default styles