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
      paddingBottom: 20
    },
    subtitle: {
      fontSize: 12
    },
    row: {
      flex: 1, 
      flexDirection: 'row', 
      paddingTop: 10
    },
    paragraph: {
      paddingBottom: 10
    }
  });
 
export default styles