import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerView: {
    width: '85%',
    height: '60%',
    marginTop: 20,
    marginLeft: 40,
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  innerView2: {
    flex: 1,
    marginTop: 20,
  },
  profileIcon: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
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
    color: 'grey',
    marginVertical: 5,
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

export default styles;
