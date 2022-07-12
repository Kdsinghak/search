import {StyleSheet} from 'react-native';
import {normalize} from '../../../utils/dimensions';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0f18',
  },
  textInputStyle: {
    padding: 10,
    width: '95%',
    color: '#e1e3e6',
    borderBottomWidth: 2,
    marginTop: normalize(30),
    backgroundColor: '#0d0f18',
    marginRight: normalize(20),
    borderBottomColor: '#2c3039',
  },
  TextinputView: {
    width: '90%',
    marginHorizontal: 20,
  },
  heading: {
    fontSize: 22,
    color: 'white',
    marginTop: '15%',
    fontWeight: 'bold',
    marginHorizontal: '8%',
  },
  backButton: {
    width: 20,
    marginTop: '17%',
    marginHorizontal: '6%',
  },
  registerButtonStyle: {
    height: normalize(45),
    marginTop: normalize(80),
    backgroundColor: '#fc1655',
    borderRadius: normalize(7),
  },
  textButtonName: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: normalize(16),
    marginTop: normalize(11),
  },
  descriptionSignUpText: {
    color: 'white',
    textAlign: 'center',
    marginTop: normalize(60),
  },
  redDescriptionText: {
    color: '#fc1655',
  },
  errorText: {
    paddingTop: normalize(10),
    color: '#fc1655',
    marginHorizontal: normalize(10),
  },
});
export default styles;
