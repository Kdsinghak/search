import {StyleSheet} from 'react-native';
import {normalize} from '../../../utils/dimensions';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0f18',
  },
  imageView: {
    marginTop: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStyle: {
    width: '30%',
    height: '40%',
  },
  textInputStyle: {
    width: '95%',
    color: '#e1e3e6',
    padding: normalize(10),

    marginRight: normalize(20),
    borderBottomColor: '#2c3039',
    borderBottomWidth: normalize(2),
  },

  forgotPasswordStyle: {
    color: '#bc1647',
    textAlign: 'right',
    marginVertical: normalize(20),
    paddingHorizontal: normalize(20),
  },
  loginButton: {
    height: '6%',
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fc1655',
    borderRadius: normalize(6),
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
    paddingTop: normalize(10),
    marginHorizontal: normalize(10),
  },
  TextinputView: {
    width: '90%',
    height: '20%',
    marginLeft: normalize(20),
  },
  socialButtonView: {
    flexDirection: 'row',
    marginVertical: '10%',
    paddingHorizontal: '30%',
    justifyContent: 'space-around',
  },
});

export default styles;
