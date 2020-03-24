import { StyleSheet } from 'react-native';
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    title: {
      fontSize: 19,
      fontWeight: 'bold',
    },
    activeTitle: {
      color: 'red',
    },
    center: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    header: {
    fontSize: 40,
    color: '#2589dc',
    textAlign: 'center',
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
   submitButtonText:{
      color: 'white'
   }
  });
 
export default styles