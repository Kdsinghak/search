import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0d0f18',
  },
  splashimg: {
    width: '50%',
    resizeMode: 'contain',
  },

  loginButton: {
    left: 16,
    height: 52,
    top: '85%',
    width: '40%',
    borderWidth: 2,
    borderRadius: 8,
    position: 'absolute',
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerButton: {
    top: '85%',
    height: 52,
    left: '55%',
    width: '40%',
    borderRadius: 8,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
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
