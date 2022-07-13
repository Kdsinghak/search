import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerView: {
    width: '85%',
    height: '40%',

    borderRadius: 10,
    // overflow: 'hidden',
    // backgroundColor: 'green',
  },
  innerView2: {
    flex: 1,
    // marginTop: 20,

    justifyContent: 'center',
    alignItems: 'center',
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
  },
  username: {
    color: 'grey',
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
  },
  indicatorstyle: {
    alignSelf: 'center',
    position: 'absolute',
  },
});

export default styles;
