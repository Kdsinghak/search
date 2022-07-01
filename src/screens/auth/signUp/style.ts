import {StyleSheet} from 'react-native';
import {normalize} from '../../../utils/dimensions';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0d0f18',
    flex: 1,
  },
  textInputStyle: {
    borderBottomColor: '#2c3039',
    borderBottomWidth: 2,
    backgroundColor: '#0d0f18',
    padding: 10,
    color: '#e1e3e6',
    width: '95%',
    marginRight: normalize(20),
    marginTop: normalize(30),
  },
  TextinputView: {
    width: '90%',
    marginHorizontal: 20,
  },
  heading: {
    color: 'white',
    marginTop: '15%',
    marginHorizontal: '8%',
    fontSize: 22,
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: '17%',
    width: 20,
    marginHorizontal: '6%',
  },
  registerButtonStyle: {
    height: normalize(45),
    backgroundColor: '#fc1655',
    borderRadius: normalize(7),
    marginTop: normalize(80),
  },
  textButtonName: {
    color: 'white',
    fontSize: normalize(16),
    fontWeight: '600',
    textAlign: 'center',
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
    color: '#fc1655',
    paddingTop: 10,
    marginHorizontal: 10,
  },
});
export default styles;
