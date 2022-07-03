import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0f18',
  },
  headerSetting: {
    marginTop: '15%',
    flexDirection: 'row',
    paddingHorizontal: '6%',
    justifyContent: 'flex-start',
  },
  LoginButon: {
    left: 16,
    height: 52,
    width: '90%',
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: '15%',
    justifyContent: 'center',
    backgroundColor: '#fc1655',
  },
  settingHeading: {
    fontSize: 20,
    color: 'white',
    marginHorizontal: '10%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  Button: {
    height: 50,
    width: '100%',
    borderRadius: 5,
    marginVertical: 2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '6%',
    backgroundColor: '#a2abb4',
    justifyContent: 'space-between',
  },
  ButtonView: {
    marginTop: '10%',
    marginHorizontal: '5%',
  },
  appInfoView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  appInfoText: {
    color: '#a2abb4',
  },
});

export default styles;
