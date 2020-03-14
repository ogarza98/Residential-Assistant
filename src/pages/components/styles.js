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
      flex: 1, 
      flexDirection: 'row', 
      paddingTop: 10
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
      }
  });
 
export default styles