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
    }
  });
 
export default styles