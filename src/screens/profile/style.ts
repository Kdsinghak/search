import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    innerView: {
        width: '80%',
        height: '60%',  
        borderWidth: 1,
        borderRadius: 10,
        overflow: 'hidden',
  
      marginTop: 20,
      marginLeft: 40,
      paddingHorizontal: 10,
      justifyContent: 'center',
    },
    innerView2: {
      flex: 1,
      marginTop: 20,
    },
    profileIcon: {
      height: '100%',
      width: '100%',
      resizeMode: 'stretch',
    },
    heading: {
      fontSize: 20,
      fontWeight: 'bold',
      alignSelf: 'center',
    },
    displayNameView: {
        padding: 30,
        alignItems: 'center',
      justifyContent: 'space-between',
    },
    displayNameText: {
      fontSize: 30,
      fontWeight: 'bold',
    },
    username: {
      marginVertical: 5,
      color: 'grey',
    },
    descriptionView: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
  
    descriptionText: {
      fontSize: 18,
      marginBottom: 5,
      fontWeight: '600',
    },
    indicatorstyle: {
      alignSelf: 'center',
      position: 'absolute',
    },
  });
  
  export default styles