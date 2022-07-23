import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0f18',
  },
  innerView: {
    width: '85%',
    height: '40%',
    borderRadius: 10,
  },
  innerView2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileIcon: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
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
    textAlign: 'center',
    color: '#ffffff',
  },
  username: {
    color: '#fd1655',
    marginVertical: 15,
    lineHeight: 30,
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
    color: '#ffffff',
  },
  indicatorstyle: {
    alignSelf: 'center',
    position: 'absolute',
  },
  descriptionLines: {
    color: '#ffffff',
  },
});

export default styles;
