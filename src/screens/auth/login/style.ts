import {StyleSheet} from 'react-native';
import {normalize} from '../../../utils/dimensions';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0d0f18',
    flex: 1,
  },
  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },
  logoStyle: {
    height: '40%',
    width: '40%',
  },
  textInputStyle: {
    borderBottomColor: '#2c3039',
    borderBottomWidth: 2,
    backgroundColor: '#0d0f18',
    padding: 10,
    color: '#e1e3e6',
    width: '95%',
    marginRight: normalize(20),
  },

  forgotPasswordStyle: {
    color: '#bc1647',
    textAlign: 'right',
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  loginButton: {
    backgroundColor: '#1e2029',
    height: '6%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
    borderRadius: 6,
  },
  buttonText: {
    color: 'white',
  },
  RegisterTextStyle: {
    color: '#979ba6',
    alignSelf: 'center',
  },
  registerButtonStyle: {
    color: '#fc1655',
  },
  errorText: {
    color: '#fc1655',
    paddingTop: 10,
    marginHorizontal: 10,
  },
  TextinputView: {
    width: '90%',
    marginHorizontal: 20,
  },
  socialButtonView: {
    flexDirection: 'row',
    marginVertical: '10%',
    justifyContent: 'space-around',
    paddingHorizontal: '30%',
  },
});

export default styles;
