import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  splashimg: {
    width: '100%',
    flex: 1,
    resizeMode: 'cover',
  },

  loginButton: {
    height: 52,
    width: '40%',
    left: 16,
    position: 'absolute',
    top: '85%',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerButton: {
    height: 52,
    width: '40%',
    left: '55%',
    position: 'absolute',
    top: '85%',
    backgroundColor: '#000000',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: 'black',
    fontWeight: 'bold',
  },
  registerText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
