import {StyleSheet, Dimensions} from 'react-native';
import {normalize} from '../../utils/dimensions';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0f18',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '6%',
  },
  heading: {
    left: '10%',
    fontSize: 35,
    fontWeight: 'bold',
    marginVertical: '7%',
    color: '#f2f2f3',
  },
  txtinput: {
    padding: 10,
    height: '6%',
    width: '90%',
    borderRadius: 10,
    marginHorizontal: '5%',
    backgroundColor: '#ffffff',
    color: 'black',
  },
  Card: {
    marginTop: '5%',
    borderRadius: 20,
    flexDirection: 'row',
    marginHorizontal: 20,
    height: 180,
  },
  cardTitle: {
    width: '50%',
    fontSize: 20,
    color: 'black',
    marginLeft: 10,
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  networkimg: {
    width: '100%',
    height: '100%',
  },
  emptyListimg: {
    width: 300,
    height: 300,
    marginTop: '20%',
    alignSelf: 'center',
  },
  backToTop: {
    height: 50,
    marginRight: 15,
    borderRadius: 50,
    marginLeft: '80%',
    position: 'absolute',
    alignItems: 'center',
    marginTop: height - 90,
    justifyContent: 'center',
    backgroundColor: '#fc1655',
  },
  cardImg: {
    width: 130,
    height: 130,
    borderRadius: 90,
  },
  imageContainer: {
    width: 130,
    height: 130,
    borderRadius: 90,
    alignSelf: 'center',
    marginLeft: normalize(20),
  },
});

export default styles;
