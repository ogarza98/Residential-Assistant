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
    }

  });
export default styles